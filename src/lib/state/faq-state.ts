// File: src/lib/state/faq-state.ts
import { useState, useCallback } from "react";

export interface FaqItem {
  id: number | string;
  question: string;
  answer: string;
}

export interface FaqState {
  openItemIds: (number | string)[];
  allowMultiple: boolean;
}

export function createInitialFaqState(initialOpenId: number | string = 1, allowMultiple: boolean = false): FaqState {
  return {
    openItemIds: [initialOpenId],
    allowMultiple,
  };
}

export function toggleFaqItemState(
  currentState: FaqState,
  itemId: number | string
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

export function isFaqOpen(state: FaqState, itemId: number | string): boolean {
  return state.openItemIds.includes(itemId);
}

export function useFaqState(initialOpenId: number | string = 1, allowMultiple: boolean = false) {
  const [faqState, setFaqState] = useState<FaqState>(() =>
    createInitialFaqState(initialOpenId, allowMultiple)
  );

  const toggleItem = useCallback((itemId: number | string) => {
    setFaqState((prev) => toggleFaqItemState(prev, itemId));
  }, []);

  const isOpen = useCallback(
    (itemId: number | string) => isFaqOpen(faqState, itemId),
    [faqState]
  );

  return {
    faqState,
    toggleItem,
    isOpen,
  };
}
