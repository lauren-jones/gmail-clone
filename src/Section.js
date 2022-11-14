import React from "react";
import "./Section.css";

function Section({ Icon, title, selected }) {
  return (
    <div className={`section ${selected && "section--selected"}`}>
      <Icon className="section--icon" />
      <div className="section--title">{title}</div>
    </div>
  );
}

export default Section;
