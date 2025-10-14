// src/components/Accordion.tsx
"use client";
import { useState } from "react";

interface AccordionProps {
  details: Record<string, string>;
}

export default function Accordion({ details }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion">
      <div
        className={`accordion-item`}
      >
        <div
          className={`accordion-header ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          جزئیات محصول
        </div>
        <div className={`accordion-content ${open ? "active" : ""}`}>
          {Object.entries(details).map(([key, value]) => (
            <p key={key}>
             {value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
