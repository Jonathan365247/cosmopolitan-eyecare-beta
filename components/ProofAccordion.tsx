"use client";

import { useId, useState, type ReactNode } from "react";

export function ProofAccordion({ title, children }: { title: string; children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return <div className="proof-accordion">
    <button type="button" aria-expanded={isOpen} aria-controls={contentId} onClick={() => setIsOpen((open) => !open)}>
      {title}<span aria-hidden="true">{isOpen ? "−" : "+"}</span>
    </button>
    <div id={contentId} hidden={!isOpen}><p>{children}</p></div>
  </div>;
}
