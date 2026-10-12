// File: src/lib/state/faq-state.ts
import { useState, useCallback } from "react";

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqState {
  openItemIds: number[];
  allowMultiple: boolean;
}

export function createInitialFaqState(initialOpenId: number = 1, allowMultiple: boolean = false): FaqState {
  return {
    openItemIds: [initialOpenId],
    allowMultiple,
  };
}

export function toggleFaqItemState(
  currentState: FaqState,
  itemId: number
): FaqState {
  const isOpen = currentState.openItemIds.includes(itemId);

  if (currentState.allowMultiple) {
    return {
      ...currentState,
      openItemIds: isOpen
        ? currentState.openItemIds.filter((id) => id !== itemId)
        : [...currentState.openItemIds, itemId],
    };
  }

  return {
    ...currentState,
    openItemIds: isOpen ? [] : [itemId],
  };
}

export function isFaqOpen(state: FaqState, itemId: number): boolean {
  return state.openItemIds.includes(itemId);
}

export function useFaqState(initialOpenId: number = 1, allowMultiple: boolean = false) {
  const [faqState, setFaqState] = useState<FaqState>(() =>
    createInitialFaqState(initialOpenId, allowMultiple)
  );

  const toggleItem = useCallback((itemId: number) => {
    setFaqState((prev) => toggleFaqItemState(prev, itemId));
  }, []);

  const isOpen = useCallback(
    (itemId: number) => isFaqOpen(faqState, itemId),
    [faqState]
  );

  return {
    faqState,
    toggleItem,
    isOpen,
  };
}
