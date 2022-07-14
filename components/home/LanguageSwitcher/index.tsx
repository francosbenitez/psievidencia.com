import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Argentina from "../../../public/icons/argentina.svg";
import Usa from "../../../public/icons/usa.svg";

const LanguageSwitcher = () => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState("es");

  const [open, setOpen] = useState(false);
  const switchOpen = () => {
    setOpen(!open);
  };

  const handleClick = (value: string) => {
    setIsClicked(value);
  };

  useEffect(() => {
    if (isClicked === "en") {
      router.push("/en", undefined, { locale: "en" });
    } else {
      router.push("/", undefined, { locale: "es" });
    }
  }, [isClicked]);

  return (
    <div className="switcher-area cursor-pointer">
      <div className="lang-switcher">
        <div
          className={`flag-container ${open && "active"}`}
          onClick={switchOpen}
        >
          {isClicked === "en" ? (
            <Usa size="30" className="flag-svg" />
          ) : (
            <Argentina width="30" className="flag-svg" />
          )}
          <svg
            stroke="#313131"
            fill="#313131"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            className="triangle"
            height="14"
            width="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
          </svg>
        </div>
        <div className={`select-area ${open && "active"}`}>
          <div
            className={`flag-wrapper ${isClicked !== "en" && "active"}`}
            onClick={() => handleClick("es")}
          >
            <Argentina width="30" className="flag-svg" />
          </div>

          <div
            className={`flag-wrapper ${isClicked === "en" && "active"}`}
            onClick={() => handleClick("en")}
          >
            <Usa width="30" className="flag-svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
