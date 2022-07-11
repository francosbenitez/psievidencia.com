import React from "react";
import GitHub from "../../public/icons/github.svg";
import { FormattedMessage } from "react-intl";

const HomeFooter = () => {
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
        <GitHub className="inline w-4 h-4 align-text-top" />
      </a>
    </footer>
  );
};

export default HomeFooter;
