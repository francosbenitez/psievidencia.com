import React, { useState } from "react";
import { useScrollBlock } from "@/hooks/useScrollBlock";

type Props = {
  button: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  title: string;
  content: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  modalCentered?: boolean;
  count?: number;
};

const TheModalFull = (props: any, ref: any) => {
  const [show, setShow] = useState<boolean>(false);

  const { button, title, content, modalCentered, count }: Props = props;

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
          className={`${modalCentered ? "modal-wrapper" : ""}`}
          style={{
            background: "white",
            border: "1px solid #313131",
            borderRadius: "0.25rem",
          }}
        >
          <div
            className={`modal ${modalCentered ? "modal-centered" : ""}`}
            id="modal"
            style={{
              height: `${count && "100%"}`,
              width: `${count && "100%"}`,
              border: "none",
              boxShadow: "none",
              zIndex: "9999",
            }}
          >
            <h2>
              {title}
              <button className="float-right" onClick={showModal}>
                X
              </button>
            </h2>
            <div className="content">
              {React.cloneElement(content, {
                showModal: showModal,
              })}
            </div>
            {count && (
              <div className="pb-8">
                <button
                  className="btn bg-primary text-white rounded px-6 py-3 flex m-auto"
                  onClick={showModal}
                >
                  <p>Ver {count} psicólogos</p>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TheModalFull;
