"use client";
import React, { FC, useState } from "react";
import "./style.scss";
import MaterialSymbolsClose from "../Assets/Icons/MaterialSymbolsClose";

interface AccordionProps {
  title: string;
  content: string|React.JSX.Element;
}

const Accordion: FC<AccordionProps> = ({ title, content }) => {
  const [openAccordion, setOpenAccordiion] = useState(false);
  return (
    <div className="accordion-wrapper">
      <div
        className="accordion-head"
        onClick={() => setOpenAccordiion((current) => !current)}
      >
        <span className="acc-title">{title}</span>
        <span className={`close-acc ${!openAccordion ? "rotate" : ""}`}>
          <MaterialSymbolsClose />
        </span>
      </div>
      <div className={`accordion-body ${openAccordion ? "active" : ""}`}>
        <div className="accordion-inner">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
