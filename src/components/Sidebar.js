import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = (isOpen) => {
    return setIsOpen(!isOpen);
  };

  const domeNode = useRef();

  const updateState = (event) => {
    if (domeNode.current.contains(event.target)) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", updateState);
    return () => {
      document.removeEventListener("mousedown", updateState);
    };
  }, []);

  return (
    <>
      <header className="top-bar container mx-auto px-5 sm:px-0">
        <div className="menu-bar">
          <span
            ref={domeNode}
            className="nav-icon"
            onClick={() => {
              open(isOpen);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="black"
            >
              {isOpen ? (
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              ) : (
                <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
              )}
            </svg>
          </span>
        </div>
        <div className="side-menu" style={{ left: isOpen ? "0" : "-265px" }}>
          {/* <span
            ref={domeNode}
            className="nav-icon"
            onClick={() => {
              open(isOpen);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="black"
            >
              {isOpen ? (
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              ) : (
                <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
              )}
            </svg>
          </span> */}
          <Link to={"/"}>Home</Link>
          <Link to={"/dashboard"}>Dashboard</Link>
        </div>
      </header>
    </>
  );
};

export default Sidebar;
