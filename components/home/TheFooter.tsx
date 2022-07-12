import React from "react";
import { FormattedMessage } from "react-intl";

type Props = {
  setShowFooter: React.Dispatch<React.SetStateAction<boolean>>;
};

const HomeFooter = ({ setShowFooter }: Props) => {
  return (
    <footer className="bottom-0 fixed bg-white w-full p-8 text-center">
      <FormattedMessage id="footer.to.be.part" />{" "}
      <a
        className="underline"
        target="_blank"
        rel="noreferrer"
        href="https://docs.google.com/forms/d/e/1FAIpQLSccyO5jICweFShGTLEEiCOYLYySlEUacI0_4IDCY10AdYqIpA/viewform"
      >
        <FormattedMessage id="footer.google.forms" />
      </a>{" "}
      |{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/francosbenitez/psievidencia-frontend"
      >
        <span className="underline">
          <FormattedMessage id="footer.source.code" />
        </span>{" "}
      </a>
      <span
        className="absolute right-2 top-2 cursor-pointer"
        onClick={() => {
          setShowFooter(false);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="black"
        >
          <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
        </svg>
      </span>
    </footer>
  );
};

export default HomeFooter;
