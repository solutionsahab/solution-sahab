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
      className={`w-full scroll-mt-28 py-8 sm:py-12 ${sectionTone(index)}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">{children}</div>
    </section>
  );
}

function Heading({ title }: { title?: string }) {
  if (!title) return null;
  return (
    <h2 className="font-display-serif text-3xl text-ink leading-tight mb-5">
      {title}
    </h2>
  );
}

function Paragraph({ text }: { text: string }) {
  return (
    <p className="font-body-md text-body-md text-ink-soft leading-relaxed m-0">
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
            <div className="max-w-4xl mx-auto lg:mx-0">
              <Heading title={section.title} />
              <div className="flex flex-col gap-4">
                {section.paragraphs.map((paragraph) => (
                  <Paragraph key={paragraph} text={paragraph} />
                ))}
              </div>
            </div>
          )}

          {section.kind === "list" && (
            <div className="max-w-4xl mx-auto lg:mx-0">
              <Heading title={section.title} />
              {section.intro && (
                <p className="font-body-md text-body-md text-ink-soft leading-relaxed mb-5">
                  {section.intro}
                </p>
              )}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 list-none m-0 p-0">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 font-body-md text-body-md text-ink"
                  >
                    <span
                      className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      done
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {section.after && section.after.length > 0 && (
                <div className="flex flex-col gap-4 mt-6">
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
                <p className="font-body-md text-body-md text-ink-soft leading-relaxed mb-5 max-w-4xl">
                  {section.intro}
                </p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {section.items.map((item) => (
                  <div
                    key={item.title}
                    className="border border-ink/10 bg-white p-5 flex items-start gap-3.5"
                  >
                    <span className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <span
                        className="material-symbols-outlined text-[20px]"
                        aria-hidden="true"
                      >
                        {item.icon || "done"}
                      </span>
                    </span>
                    <div>
                      <p className="font-label-md text-label-md font-semibold text-ink m-0">
                        {item.title}
                      </p>
                      {item.text && (
                        <p className="font-body-sm text-body-sm text-ink-soft mt-1 mb-0">
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
