"use client";

import { useState } from "react";

interface FAQ {
  q: string;
  a: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border-color border-t border-border-color">
      {faqs.map((faq, i) => (
        <button
          key={faq.q}
          onClick={() => setOpen(open === i ? null : i)}
          className="w-full text-left py-5 flex items-start justify-between gap-4 group"
        >
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground group-hover:text-foreground/70 transition-colors">
              {faq.q}
            </p>
            {open === i && (
              <p className="text-sm text-muted font-light leading-relaxed mt-3 pr-8">
                {faq.a}
              </p>
            )}
          </div>
          <svg
            className={`w-4 h-4 text-muted flex-shrink-0 mt-0.5 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      ))}
    </div>
  );
}
