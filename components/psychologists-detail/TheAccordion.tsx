import { useState } from "react";

const Accordion = ({ title, content }: { title: string; content: string }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {content !== "" && (
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => setIsActive(!isActive)}
          >
            <div className="font-medium">{title}</div>
            <div>{isActive ? "-" : "+"}</div>
          </div>
          {isActive && <div className="accordion-content">{content}</div>}
        </div>
      )}
    </>
  );
};

export default Accordion;
