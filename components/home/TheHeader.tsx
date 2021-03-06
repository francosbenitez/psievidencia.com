import React from "react";
import Magnifier from "../../public/icons/magnifier.svg";
import { FormattedMessage } from "react-intl";

const TheHeader = () => {
  return (
    <>
      <h1 className="text-center text-5xl">
        <Magnifier className="w-12 h-12 hidden sm:inline" />
        <span className="sm:px-4 text-primary">Psievidencia</span>
        <Magnifier className="w-12 h-12 hidden sm:inline" />
      </h1>
      <h2 className="text-center text-2xl my-9 text-primary">
        <FormattedMessage id="title" />
      </h2>
    </>
  );
};

export default TheHeader;
