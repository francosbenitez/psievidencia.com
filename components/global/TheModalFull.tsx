import React, { useState } from "react";
import { useScrollBlock } from "@/hooks/useScrollBlock";
import Reinitialiser from "@/public/icons/reinitialiser.svg";

type Props = {
  button: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  content: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  count?: number;
  reinitialise: any;
};

const TheModalFull = (props: any, ref: any) => {
  const [show, setShow] = useState<boolean>(false);

  const { button, content, count, reinitialise }: Props = props;

  const [blockScroll, allowScroll] = useScrollBlock();

  const showModal = () => {
    !show ? blockScroll() : allowScroll();
    setShow(!show);
  };

  return (
    <>
      {React.cloneElement(button, { showModal: showModal })}
      {show && (
        <div
          className="modal-wrapper"
          style={{
            background: "white",
            // border: "1px solid #313131",
            borderRadius: "0.25rem",
          }}
        >
          <div
            className="modal"
            id="modal"
            style={{
              height: "100%",
              width: "100%",
              border: "none",
              boxShadow: "none",
              zIndex: "9999",
              bottom: "0",
              filter: "inherit",
              transform: "inherit",
            }}
          >
            <h2
              className="flex"
              style={{
                position: "sticky",
                width: "100%",
                background: "white",
                top: "0",
                zIndex: "100",
                border: "none",
              }}
            >
              <button
                className="flex items-center"
                onClick={() => reinitialise()}
              >
                <Reinitialiser className="mr-2" /> Reiniciar
              </button>
              <button className="ml-auto" onClick={showModal}>
                X
              </button>
            </h2>
            <div className="content" style={{ paddingBottom: "60px" }}>
              {React.cloneElement(content, {
                showModal: showModal,
              })}
            </div>
            <div
              className="py-3 bg-white border-r-2 border-primary bottom-0 w-full fixed"
              style={{ zIndex: "100" }}
            >
              <button
                className="btn bg-primary text-white rounded px-6 py-2 flex m-auto"
                onClick={showModal}
              >
                <p>Ver {count} psicólogos</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TheModalFull;
