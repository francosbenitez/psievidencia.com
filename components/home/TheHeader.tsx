import React from "react";
import Magnifier from "../../public/icons/magnifier.svg";
import { FormattedMessage } from "react-intl";

const TheHeader = () => {
  return (
    <>
      <h1 className="text-center font-bold text-5xl">
        <Magnifier className="inline w-12 h-12" />
        <span className="px-4">PsiEvidencia</span>
        <Magnifier className="inline w-12 h-12" />
      </h1>
      <h2 className="text-center text-2xl my-9 font-semibold">
        <FormattedMessage id="title" />
      </h2>
    </>
  );
};

export default TheHeader;
