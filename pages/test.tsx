import React from "react";
import { TheSelect, SelectOption } from "@/components/edit/TheSelect";
import { useState } from "react";

const options = [
  { id: 1, name: "First" },
  { id: 2, name: "Second" },
  { id: 3, name: "Third" },
  { id: 4, name: "Fourth" },
  { id: 5, name: "Fifth" },
];

const selectedOptions = [
  { id: 1, name: "First" },
  { id: 2, name: "Second" },
  { id: 3, name: "Third" },
];

const Test = () => {
  const [value1, setValue1] = useState<SelectOption[]>(selectedOptions);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);

  return (
    <>
      <TheSelect
        multiple
        options={options}
        value={value1}
        onChange={(o) => setValue1(o)}
      />
      <br />
      <TheSelect
        options={options}
        value={value2}
        onChange={(o) => setValue2(o)}
      />
    </>
  );
};

export default Test;
