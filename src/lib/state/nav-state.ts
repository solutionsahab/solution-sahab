// File: src/lib/state/nav-state.ts
import { useState, useCallback, useEffect } from "react";

export type DropdownType = "products" | "solutions" | "about" | null;

export interface NavState {
  isMobileMenuOpen: boolean;
  openDropdown: DropdownType;
  isScrolled: boolean;
}

export const initialNavState: NavState = {
  isMobileMenuOpen: false,
  openDropdown: null,
  isScrolled: false,
};

export function toggleMobileMenuState(current: NavState): NavState {
  return {
    ...current,
    isMobileMenuOpen: !current.isMobileMenuOpen,
    openDropdown: null,
  };
}

export function closeMobileMenuState(current: NavState): NavState {
  return {
    ...current,
    isMobileMenuOpen: false,
    openDropdown: null,
  };
}

export function toggleDropdownState(
  current: NavState,
  dropdown: DropdownType
): NavState {
  return {
    ...current,
    openDropdown: current.openDropdown === dropdown ? null : dropdown,
  };
}

export function setScrolledState(current: NavState, isScrolled: boolean): NavState {
  return {
    ...current,
    isScrolled,
  };
}

export function useNavState() {
  const [navState, setNavState] = useState<NavState>(initialNavState);

  const toggleMobileMenu = useCallback(() => {
    setNavState((prev) => toggleMobileMenuState(prev));
  }, []);

  const closeMobileMenu = useCallback(() => {
    setNavState((prev) => closeMobileMenuState(prev));
  }, []);

  const toggleDropdown = useCallback((dropdown: DropdownType) => {
    setNavState((prev) => toggleDropdownState(prev, dropdown));
  }, []);

  const closeDropdown = useCallback(() => {
    setNavState((prev) => ({ ...prev, openDropdown: null }));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setNavState((prev) => (prev.isScrolled !== scrolled ? setScrolledState(prev, scrolled) : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    isMobileMenuOpen: navState.isMobileMenuOpen,
    openDropdown: navState.openDropdown,
    isScrolled: navState.isScrolled,
    toggleMobileMenu,
    closeMobileMenu,
    toggleDropdown,
    closeDropdown,
  };
}
