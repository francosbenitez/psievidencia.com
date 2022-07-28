import React, { useState } from "react";

type Props = {
  button: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  title: string;
  content: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  className?: string;
  modalCentered?: boolean;
};

const TheModal = ({
  button,
  title,
  content,
  className,
  modalCentered,
}: Props) => {
  const [show, setShow] = useState<boolean>(false);

  const showModal = () => {
    setShow(!show);
  };

  return (
    <div className={`${className ? className : ""}`}>
      {React.cloneElement(button, { showModal: showModal })}
      {show && (
        <div className={`${modalCentered ? "modal-wrapper" : ""}`}>
          <div
            className={`modal ${modalCentered ? "modal-centered" : ""}`}
            id="modal"
          >
            <h2>
              {title}
              <button className="float-right" onClick={showModal}>
                X
              </button>
            </h2>
            <div className="content">
              {React.cloneElement(content, { showModal: showModal })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TheModal;
