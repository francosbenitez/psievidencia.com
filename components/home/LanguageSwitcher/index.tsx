import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

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
    <label className={`${styles["language-switcher"]} cursor-pointer`}>
      <input type="checkbox" onChange={handleChange} />
      <span className={`${styles["slider"]} ${styles["round"]}`}></span>
      <span className={styles["select-fr"]}>ES</span>
      <span className={styles["select-en"]}>EN</span>
    </label>
  );
};

export default LanguageSwitcher;
