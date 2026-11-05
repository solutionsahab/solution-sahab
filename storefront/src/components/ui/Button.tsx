// File: src/components/ui/Button.tsx
import React from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "outline" | "white" | "whatsapp" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  /** Open an http link in the same tab (some in-app browsers block new tabs) */
  sameTab?: boolean;
  icon?: string | React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  sameTab = false,
  icon,
  iconPosition,
  fullWidth = false,
  loading = false,
  className = "",
  disabled,
  onClick,
  ...props
}: ButtonProps) {
  // Determine smart icon position if not explicitly specified
  const effectiveIconPosition: "left" | "right" =
    iconPosition ||
    (typeof icon === "string" &&
    (icon.includes("arrow") || icon.includes("chevron") || icon.includes("outward"))
      ? "right"
      : "left");

  // Consistent typography, borders and interaction feedback across all button types
  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-[#1B4D8E] hover:bg-[#143A6B] active:bg-[#0E2B50] text-white border border-[#1B4D8E] hover:border-[#143A6B] shadow-sm",
    outline:
      "bg-transparent hover:bg-[#1B4D8E] active:bg-[#143A6B] text-[#1B4D8E] hover:text-white border border-[#1B4D8E] transition-colors",
    white:
      "bg-white hover:bg-neutral-100 active:bg-neutral-200 text-neutral-950 border border-white shadow-sm",
    whatsapp:
      "bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da851] text-white border border-[#25D366] hover:border-[#20bd5a] shadow-sm",
    ghost:
      "bg-transparent hover:bg-blue-50 active:bg-blue-100 text-[#1B4D8E] border border-transparent",
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-xs min-h-[38px]",
    md: "px-5 py-3 text-xs sm:text-sm min-h-[44px]",
    lg: "px-6 py-3.5 text-sm sm:text-base min-h-[48px]",
  };

  const baseClasses = `group inline-flex items-center justify-center gap-2 font-gilroy font-extrabold uppercase tracking-wider text-center select-none cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4D8E] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${
    variantClasses[variant]
  } ${sizeClasses[size]} ${fullWidth ? "w-full" : ""} ${className}`;

  const renderIcon = () => {
    if (!icon) return null;
    if (typeof icon !== "string") return icon;
    return (
      <span
        className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${
          effectiveIconPosition === "right"
            ? "group-hover:translate-x-0.5"
            : "group-hover:scale-110"
        }`}
        aria-hidden="true"
      >
        {icon}
      </span>
    );
  };

  const content = (
    <>
      {loading ? (
        <svg
          className="animate-spin h-4 w-4 shrink-0 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        effectiveIconPosition === "left" && renderIcon()
      )}
      {children && <span>{children}</span>}
      {!loading && effectiveIconPosition === "right" && renderIcon()}
    </>
  );

  const isDisabled = disabled || loading;

  // 1. External link or tel: / mailto:
  if (href && (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:"))) {
    const isBlank = !sameTab && (external || href.startsWith("http"));
    return (
      <a
        href={isDisabled ? undefined : href}
        className={`${baseClasses} ${isDisabled ? "pointer-events-none opacity-50" : ""}`}
        target={isBlank ? "_blank" : undefined}
        rel={isBlank ? "noopener noreferrer" : undefined}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        aria-disabled={isDisabled}
      >
        {content}
      </a>
    );
  }

  // 2. Next.js Internal link (e.g., "#quick-booking" or "/gallery")
  if (href) {
    return (
      <Link
        href={isDisabled ? "#" : href}
        className={`${baseClasses} ${isDisabled ? "pointer-events-none opacity-50" : ""}`}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        aria-disabled={isDisabled}
      >
        {content}
      </Link>
    );
  }

  // 3. Regular Button (e.g., Form submit, modal trigger, reset)
  return (
    <button
      type={props.type || "button"}
      className={baseClasses}
      disabled={isDisabled}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      {...props}
    >
      {content}
    </button>
  );
}