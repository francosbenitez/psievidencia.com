import React from "react";
import Magnifier from "../../public/icons/magnifier.svg";
import { FormattedMessage } from "react-intl";

const TheHeader = () => {
  return (
    <>
      <h1 className="text-center text-5xl">
        <Magnifier className="inline w-12 h-12" />
        <span className="sm:px-4 text-primary font-bold">PsiEvidencia</span>
        <Magnifier className="inline w-12 h-12" />
      </h1>
      <h2 className="text-center text-2xl my-9 font-semibold text-secondary">
        <FormattedMessage id="title" />
      </h2>
    </>
  );
};

export default TheHeader;
