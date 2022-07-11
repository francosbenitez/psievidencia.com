import React from "react";
import { useIntl } from "react-intl";

const SearchName = ({
  name,
  handleNameChange,
}: {
  name?: string | undefined;
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const intl = useIntl();
  const placeholder = intl.formatMessage({ id: "search.name" });
  return (
    <input
      className="border-solid h-10 border-2 border-primary w-full pl-3 mb-6 outline-0"
      placeholder={placeholder}
      onChange={handleNameChange}
      value={name}
    />
  );
};

export default SearchName;
