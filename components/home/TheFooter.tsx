import React from "react";
import { FormattedMessage } from "react-intl";
import Suggestions from "../../public/icons/suggestions.svg";

const HomeFooter = () => {
  return (
    <footer className="bottom-0 fixed bg-white w-full mx-auto p-5 sm:px-0 md:py-8">
      <div className="container relative text-center m-auto">
        <div className="relative text-center m-auto flex">
          <div className="w-1/2 flex">
            <span className="text-left text-sm md:text-md">
              <FormattedMessage id="footer.to.be.part" />{" "}
              <a
                className="underline"
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSccyO5jICweFShGTLEEiCOYLYySlEUacI0_4IDCY10AdYqIpA/viewform"
              >
                <FormattedMessage id="footer.google.forms" />
              </a>
              .
            </span>
          </div>
          <button className="w-1/2 flex">
            <div className="ml-auto">
              <span className="mr-1 bg-gray-100 text-sm md:text-md">
                Sugerencias
              </span>
              <Suggestions className="inline w-3 h-3 align-text-top" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
