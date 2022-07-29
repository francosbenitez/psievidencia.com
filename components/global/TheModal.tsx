import React, {
  useState,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";

type Props = {
  button: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  title: string;
  content: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  modalCentered?: boolean;
  showRegister: any;
  showLogin: any;
};

const TheModal = (props: any, ref: any) => {
  const [show, setShow] = useState<boolean>(false);

  const {
    button,
    title,
    content,
    modalCentered,
    showRegister,
    showLogin,
  }: Props = props;

  const showModal = () => {
    setShow(!show);
  };

  useImperativeHandle(ref, () => ({
    getAlert() {
      showModal();
    },
  }));

  return (
    <>
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
              {React.cloneElement(content, {
                showModal: showModal,
                showLogin: showLogin,
                showRegister: showRegister,
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default React.forwardRef(TheModal);
