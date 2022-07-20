import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import TheModal from "./TheModal";
import TheSuggestions from "./TheSuggestions";
import SuggestionsBtn from "./SuggestionsBtn";

const HomeFooter = () => {
  const [show, setShow] = useState<boolean>(false);

  const showModal = () => {
    setShow(!show);
  };

  return (
    <footer className="bottom-0 w-full mx-auto p-5 sm:px-0 md:py-8 footer">
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
          <TheModal
            button={<SuggestionsBtn showModal={showModal} />}
            title={"Sugerencias"}
            content={<TheSuggestions />}
            showModal={showModal}
            show={show}
          />
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
