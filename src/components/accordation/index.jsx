import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Accordion = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="flex  items-center px-2">
          {/* Replace the <h3> with the image */}
          <img
            src={title}
            alt="setting"
            className="px-2"
            style={{ marginTop: "-29px" }}          />

          <span className="font-m text-xl leading-[5rem] " >
            {expanded ? (
              <KeyboardArrowUpIcon className="font-m"             style={{ marginTop: "-23px" }}         
              />
            ) : (
              <KeyboardArrowDownIcon className="font-m"             style={{ marginTop: "-23px" }}         
              />
            )}
          </span>
        </div>
        {expanded && (
          <div className="accordion-content text-center">
            <p>{children}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
