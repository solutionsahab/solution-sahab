// File: src/components/common/RichText.tsx
import React from "react";
import Link from "next/link";

/**
 * Renders body copy with inline emphasis and internal links.
 * Syntax: "**bold**" and "text [Invisible Grills](/invisible-grills) more text"
 * Only internal paths (starting with "/") are treated as links.
 */
export function renderRichText(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const pattern = /\*\*([^*]+)\*\*|\[([^\]]+)\]\((\/[^)\s]+)\)/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined) {
      nodes.push(
        <strong key={`b-${key++}`} className="font-bold text-on-surface">
          {match[1]}
        </strong>
      );
    } else {
      nodes.push(
        <Link
          key={`rt-${key++}`}
          href={match[3]}
          className="text-secondary font-semibold hover:underline"
        >
          {match[2]}
        </Link>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}
