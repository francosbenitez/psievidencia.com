import React from "react";
import { TheSelect, SelectOption } from "@/components/edit/TheSelect";
import { useState } from "react";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

const Test = () => {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
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
