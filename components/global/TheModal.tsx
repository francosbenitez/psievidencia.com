import React from "react";

type Props = {
  button: React.ReactNode;
  title: string;
  content: string | React.ReactNode;
  show: boolean;
  showModal: React.MouseEventHandler<HTMLButtonElement>;
};

const TheModal = ({ button, title, content, show, showModal }: Props) => {
  return (
    <>
      {button}
      {show && (
        <div
          className={`modal ${title === "Ingresar" && "modal-centered"}`}
          id="modal"
        >
          <h2>
            {title}
            <button className="float-right" onClick={showModal}>
              X
            </button>
          </h2>
          <div className="content">{content}</div>
        </div>
      )}
    </>
  );
};

export default TheModal;
