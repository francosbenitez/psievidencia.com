import React from "react";
import { ReactComponent as Magnifier } from "../../assets/icons/magnifier.svg";

const TheHeader = () => {
  return (
    <>
      <h1 className="text-center font-bold text-5xl">
        <Magnifier className="inline w-12 h-12" /> PsiEvidencia
      </h1>
      <h2 className="text-center text-2xl my-9">
        A web app to help you find the best evidence-based psychologists
      </h2>
    </>
  );
};

export default TheHeader;
