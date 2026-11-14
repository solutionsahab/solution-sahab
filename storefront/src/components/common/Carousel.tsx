// File: src/components/common/Carousel.tsx
// Native scroll-snap row with previous/next arrows and position dots underneath.
// Controls only appear when the row actually overflows.
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

interface CarouselProps {
  /** Accessible name, e.g. "Our products" */
  label: string;
  /** Classes for the scrolling track (flex row, gap, snap, padding) */
  className: string;
  /** Extra classes for the controls row, e.g. "sm:hidden" when the row is a grid on larger screens */
  controlsClassName?: string;
  children: React.ReactNode;
}

const EDGE = 2; // px tolerance for sub-pixel layout

export function Carousel({ label, className, controlsClassName = "", children }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const positionsRef = useRef<number[]>([]);
  const pendingRef = useRef<number | null>(null);
  const pendingTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const settledRef = useRef(0);
  const userScrollRef = useRef(false);
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(0);
  const [status, setStatus] = useState("");

  // Snap positions the track can actually rest on; the last one is the end of the row.
  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    if (max <= EDGE) {
      positionsRef.current = [];
      setCount(0);
      return;
    }
    const pad = parseFloat(getComputedStyle(track).scrollPaddingLeft) || 0;
    const left = track.getBoundingClientRect().left - track.scrollLeft + pad;
    const starts = Array.from(track.children).map(
      (el) => (el as HTMLElement).getBoundingClientRect().left - left,
    );
    // Cards that can't scroll fully to the start all collapse onto the end of the row
    const positions: number[] = [];
    for (const x of starts.map((s) => Math.min(Math.max(s, 0), max))) {
      if (positions.length === 0 || x - positions[positions.length - 1] > EDGE) positions.push(x);
    }
    positionsRef.current = positions;
    setCount(positions.length);
  }, []);

  const nearest = useCallback(() => {
    const track = trackRef.current;
    const positions = positionsRef.current;
    if (!track || positions.length === 0) return 0;
    const x = track.scrollLeft;
    let best = 0;
    positions.forEach((p, i) => {
      if (Math.abs(p - x) < Math.abs(positions[best] - x)) best = i;
    });
    return best;
  }, []);

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    const positions = positionsRef.current;
    if (!track || positions.length === 0) return;
    const target = Math.min(Math.max(index, 0), positions.length - 1);
    userScrollRef.current = true;
    setCurrent(target);
    if (Math.abs(track.scrollLeft - positions[target]) <= EDGE) return; // already there: no scroll, no scrollend
    pendingRef.current = target;
    // Safety net in case the browser never fires scrollend (e.g. the scroll gets interrupted)
    clearTimeout(pendingTimerRef.current);
    pendingTimerRef.current = setTimeout(() => {
      pendingRef.current = null;
    }, 1500);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: positions[target], behavior: reduce ? "auto" : "smooth" });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    let debounce: ReturnType<typeof setTimeout> | undefined;

    const settle = () => {
      pendingRef.current = null;
      const index = nearest();
      setCurrent(index);
      if (userScrollRef.current && index !== settledRef.current) {
        setStatus(`Card ${index + 1} of ${positionsRef.current.length}`);
      }
      settledRef.current = index;
    };

    const onScroll = () => {
      userScrollRef.current = true;
      if (pendingRef.current === null && !frame) {
        frame = requestAnimationFrame(() => {
          frame = 0;
          setCurrent(nearest());
        });
      }
      if (!("onscrollend" in window)) {
        clearTimeout(debounce);
        debounce = setTimeout(settle, 120);
      }
    };

    const resize = new ResizeObserver(() => {
      measure();
      setCurrent(nearest());
    });
    resize.observe(track);
    measure();

    track.addEventListener("scroll", onScroll, { passive: true });
    track.addEventListener("scrollend", settle);
    return () => {
      resize.disconnect();
      cancelAnimationFrame(frame);
      clearTimeout(debounce);
      clearTimeout(pendingTimerRef.current);
      track.removeEventListener("scroll", onScroll);
      track.removeEventListener("scrollend", settle);
    };
  }, [measure, nearest]);

  // `current` already holds the pending target while a click-scroll is in flight, so rapid clicks build on it
  const arrow =
    "flex h-10 w-10 items-center justify-center border border-[#1B4D8E] text-[#1B4D8E] bg-white transition-colors hover:bg-[#1B4D8E] hover:text-white disabled:opacity-30 disabled:pointer-events-none touch-manipulation focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4D8E]";

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label} className="flex flex-col">
      {/* Controls come first in DOM order (screen readers reach them before the cards) but sit underneath visually */}
      {count > 1 && (
        <div className={`order-last mt-4 flex items-center justify-between gap-4 ${controlsClassName}`}>
          <div className="flex flex-wrap items-center" aria-label={`Choose a card in ${label}`} role="group">
            {Array.from({ length: count }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to card ${i + 1} of ${count}`}
                aria-current={i === current ? "true" : undefined}
                className="flex h-6 w-6 items-center justify-center touch-manipulation focus-visible:outline-2 focus-visible:outline-[#1B4D8E]"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-5 bg-[#1B4D8E]" : "w-2 bg-neutral-300"
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => goTo(current - 1)}
              disabled={current === 0}
              aria-label="Previous cards"
              className={arrow}
            >
              <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                chevron_left
              </span>
            </button>
            <button
              type="button"
              onClick={() => goTo(current + 1)}
              disabled={current === count - 1}
              aria-label="Next cards"
              className={arrow}
            >
              <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      )}

      <div ref={trackRef} className={className}>
        {children}
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        {status}
      </p>
    </div>
  );
}
