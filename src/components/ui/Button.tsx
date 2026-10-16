// File: src/components/ui/Button.tsx
import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  icon?: string; // Material symbol name, e.g., "arrow_forward" or "call"
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
}

export function Button({
  children,
  href,
  external = false,
  icon,
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2.5 text-xs min-h-[38px]",
    md: "px-6 py-3.5 text-xs sm:text-sm min-h-[46px]",
    lg: "px-7 py-4 text-sm sm:text-base min-h-[52px]",
  }[size];

  // Solid architectural blue (#1B365D) -> Darker navy hover (#122440) + subtle arrow slide
  const baseClasses = `group inline-flex items-center justify-center gap-2 bg-[#1B365D] hover:bg-[#122440] active:bg-[#0D1A2E] text-white font-mono uppercase tracking-wider font-semibold border border-[#1B365D] hover:border-[#122440] transition-all duration-200 select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none ${sizeClasses} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span
          className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
    </>
  );

  // 1. External Link or tel: / mailto:
  if (href && (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:"))) {
    return (
      <a
        href={href}
        className={baseClasses}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  // 2. Internal Next.js Link (e.g., "#quick-booking" or "/gallery")
  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  // 3. Standard Button (e.g., Form Submit or onClick)
  return (
    <button type={props.type || "button"} className={baseClasses} {...props}>
      {content}
    </button>
  );
}