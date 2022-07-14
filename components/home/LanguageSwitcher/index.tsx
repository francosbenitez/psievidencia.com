import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Argentina from "../../../public/icons/argentina.svg";
import Usa from "../../../public/icons/usa.svg";

const LanguageSwitcher = () => {
  const router = useRouter();
  const [isChecked, setChecked] = useState(false);

  const [open, setOpen] = useState(false);
  const switchOpen = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    setChecked(!isChecked);
  };

  useEffect(() => {
    if (isChecked) {
      router.push("/en", undefined, { locale: "en" });
    } else {
      router.push("/", undefined, { locale: "es" });
    }
  }, [isChecked]);

  return (
    <div className="switcher-area">
      <div className="lang-switcher">
        <div
          className={`flag-container ${open && "active"}`}
          onClick={switchOpen}
        >
          {isChecked ? (
            <Usa size="30" className="flag-svg" />
          ) : (
            <Argentina width="30" className="flag-svg" />
          )}
          <svg
            stroke="black"
            fill="black"
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
            className={` flag-wrapper ${!isChecked && "active"}`}
            onClick={() => handleClick()}
          >
            <Argentina
              width="30"
              className={`flag-svg ${!isChecked && "active"}`}
              onClick={() => handleClick()}
            />
          </div>

          <div
            className={` flag-wrapper ${isChecked && "active"}`}
            onClick={() => handleClick()}
          >
            <Usa width="30" className="flag-svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
