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
      className={`h-10 ${
        fixedHeight ? "sm:h-10" : "sm:h-full"
      } border-primary w-full pl-3 outline-0 rounded shadow-md dropdown-header`}
      style={{ marginBottom: `${fixedHeight ? "1rem" : ""}` }}
      placeholder={placeholder}
      onChange={handleNameChange}
      value={name}
    />
  );
};

export default SearchName;
