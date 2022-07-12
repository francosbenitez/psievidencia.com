import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const [isChecked, setChecked] = useState(false);

  const handleChange = () => {
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
    <label className="language-switcher cursor-pointer">
      <input type="checkbox" onChange={handleChange} />
      <span className="slider round"></span>
      <span className="select-fr">ES</span>
      <span className="select-en">EN</span>
    </label>
  );
};

export default LanguageSwitcher;
