import React, { useState } from "react";

type Props = {
  btnText: string;
  title: string;
  content: string | React.ReactNode;
};

const TheModal = ({ btnText, title, content }: Props) => {
  const [show, setShow] = useState<boolean>(false);

  const showModal = () => {
    setShow(!show);
  };

  return (
    <>
      <button
        className="toggle-button"
        id="centered-toggle-button"
        onClick={showModal}
      >
        {btnText}
      </button>
      {show && (
        <div className="modal" id="modal">
          <h2>{title}</h2>
          <div className="content">{content}</div>
          <div className="actions">
            <button className="toggle-button" onClick={showModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TheModal;
