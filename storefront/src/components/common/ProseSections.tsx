// File: src/components/common/ProseSections.tsx
import React from "react";
import type { InfoSection } from "@/lib/info-pages";

interface ProseSectionsProps {
  sections: InfoSection[];
}

function sectionTone(index: number) {
  void index;
  return "bg-white";
}

function SectionShell({
  index,
  id,
  label,
  children,
}: {
  index: number;
  id?: string;
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-label={label || id}
      className={`w-full scroll-mt-28 py-6 sm:py-8 ${sectionTone(index)}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">{children}</div>
    </section>
  );
}

function Heading({ title }: { title?: string }) {
  if (!title) return null;
  return (
    <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight m-0 mb-4">
      {title}
    </h2>
  );
}

function Paragraph({ text }: { text: string }) {
  return (
    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed m-0">
      {text}
    </p>
  );
}

export function ProseSections({ sections }: ProseSectionsProps) {
  if (sections.length === 0) return null;

  return (
    <>
      {sections.map((section, index) => (
        <SectionShell
          key={`${section.kind}-${section.id || index}`}
          index={index}
          id={section.id}
          label={section.title}
        >
          {section.kind === "prose" && (
            <div className="max-w-3xl">
              <Heading title={section.title} />
              <div className="flex flex-col gap-3">
                {section.paragraphs.map((paragraph) => (
                  <Paragraph key={paragraph} text={paragraph} />
                ))}
              </div>
            </div>
          )}

          {section.kind === "list" && (
            <div className="max-w-3xl">
              <Heading title={section.title} />
              {section.intro && (
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed m-0 mb-4">
                  {section.intro}
                </p>
              )}
              {/* Plain text items with a thin blue rule instead of tick icons */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 list-none m-0 p-0">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-[#1B4D8E] pl-3 text-sm sm:text-base text-neutral-800 leading-snug"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {section.after && section.after.length > 0 && (
                <div className="flex flex-col gap-3 mt-4">
                  {section.after.map((paragraph) => (
                    <Paragraph key={paragraph} text={paragraph} />
                  ))}
                </div>
              )}
            </div>
          )}

          {section.kind === "points" && (
            <div>
              <Heading title={section.title} />
              {section.intro && (
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed m-0 mb-4 max-w-3xl">
                  {section.intro}
                </p>
              )}
              {/* Short one-line points: a tight grid shows all of them, a carousel would hide some */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {section.items.map((item) => (
                  <div
                    key={item.title}
                    className="border-l-2 border-[#1B4D8E] bg-neutral-50 px-4 py-3"
                  >
                    {/* Icons left out on purpose: the "verified" glyph reads as a tick mark */}
                    <div>
                      <p className="text-sm sm:text-base font-semibold text-neutral-950 leading-snug m-0">
                        {item.title}
                      </p>
                      {item.text && (
                        <p className="text-sm text-neutral-600 mt-1 mb-0">
                          {item.text}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </SectionShell>
      ))}
    </>
  );
}
