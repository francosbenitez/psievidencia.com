import React from "react";
import GitHub from "../../public/icons/github.svg";

const HomeFooter = () => {
  return (
    <footer className="bottom-0 fixed bg-white w-full p-8 text-center">
      To be part of this collection, fill your data in{" "}
      <a
        className="underline"
        target="_blank"
        rel="noreferrer"
        href="https://docs.google.com/forms/d/e/1FAIpQLSccyO5jICweFShGTLEEiCOYLYySlEUacI0_4IDCY10AdYqIpA/viewform"
      >
        this Google Forms
      </a>{" "}
      |{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/francosbenitez/psievidencia"
      >
        <span className="underline">Source code</span>{" "}
        <GitHub className="inline w-4 h-4" />
      </a>
    </footer>
  );
};

export default HomeFooter;
