import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

export type SelectOption = {
  id: string | number;
  name: string;
  slug?: string;
};

type MultipleSelectProps = {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};

type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

type SelectProps = {
  options: SelectOption[];
  lastElementRef: any;
} & (SingleSelectProps | MultipleSelectProps);

export function TheSelect({
  multiple,
  value,
  onChange,
  options,
  lastElementRef,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function clearOptions() {
    multiple && onChange([]);
  }

  function selectOption(option: SelectOption) {
    if (multiple) {
      if (value.some((e) => e.id === option.id)) {
        onChange(value.filter((o) => o.id !== option.id));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  }

  function isOptionSelected(option: SelectOption) {
    return multiple
      ? value.some((e) => e.id === option.id)
      : option.name === value?.name;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target != containerRef.current) return;
      switch (e.code) {
        case "Enter":
        case "Space":
          setIsOpen((prev) => !prev);
          if (isOpen) selectOption(options[highlightedIndex]);
          break;
        case "ArrowUp":
        case "ArrowDown": {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }

          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
        case "Escape":
          setIsOpen(false);
          break;
      }
    };
    containerRef.current?.addEventListener("keydown", handler);

    return () => {
      containerRef.current?.removeEventListener("keydown", handler);
    };
  }, [isOpen, highlightedIndex, options]);

  return (
    <div
      ref={containerRef}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
      className={styles.container}
    >
      <span className={styles.value}>
        {multiple
          ? value.map((v) => (
              <button
                key={v.id}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(v);
                }}
                className={styles["option-badge"]}
              >
                {v.name}
                <span className={styles["remove-btn"]}>&times;</span>
              </button>
            ))
          : value?.hasOwnProperty("slug")
          ? value?.slug
          : value?.name}
      </span>
      {multiple && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            clearOptions();
          }}
          className={styles["clear-btn"]}
        >
          &times;
        </button>
      )}
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option, index) => {
          if (options.length === index + 1) {
            return (
              <li
                ref={lastElementRef}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(option);
                  setIsOpen(false);
                }}
                onMouseEnter={() => setHighlightedIndex(index)}
                key={option.id}
                className={`${styles.option} ${
                  isOptionSelected(option) ? styles.selected : ""
                } ${index === highlightedIndex ? styles.highlighted : ""}`}
              >
                {option.hasOwnProperty("slug") ? option.slug : option.name}
              </li>
            );
          } else {
            return (
              <li
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(option);
                  setIsOpen(false);
                }}
                onMouseEnter={() => setHighlightedIndex(index)}
                key={option.id}
                className={`${styles.option} ${
                  isOptionSelected(option) ? styles.selected : ""
                } ${index === highlightedIndex ? styles.highlighted : ""}`}
              >
                {option.hasOwnProperty("slug") ? option.slug : option.name}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
