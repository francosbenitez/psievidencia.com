import React from "react";
import { useIntl } from "react-intl";

const SearchName = ({
  name,
  handleNameChange,
  fixedHeight,
}: {
  name?: string | undefined;
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fixedHeight?: boolean;
}) => {
  const intl = useIntl();
  const placeholder = intl.formatMessage({ id: "search.name" });
  return (
    <input
      className={`${
        fixedHeight ? "h-10" : "h-full"
      } border-primary w-full pl-3 mb-6 outline-0 rounded shadow-md`}
      placeholder={placeholder}
      onChange={handleNameChange}
      value={name}
    />
  );
};

export default SearchName;
