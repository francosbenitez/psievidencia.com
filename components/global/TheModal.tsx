import React, {
  useState,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
// import { useScrollBlock } from "@/hooks/useScrollBlock";

type Props = {
  button?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  title: string;
  content: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  modalCentered?: boolean;
  showRegister: any;
  showLogin: any;
  showReset: any;
  modalMask?: boolean;
  count?: number;
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
    showReset,
    modalMask,
    count,
  }: Props = props;

  // const [blockScroll, allowScroll] = useScrollBlock();

  const showModal = () => {
    // !show ? blockScroll() : allowScroll();
    setShow(!show);
  };

  useImperativeHandle(ref, () => ({
    getAlert() {
      showModal();
    },
  }));

  return (
    <>
      {button && React.cloneElement(button, { showModal: showModal })}
      {show && (
        <div className={`${modalCentered ? "modal-wrapper" : ""}`}>
          {modalMask && <div className="modal-mask"></div>}
          <div
            className={`modal-custom ${modalCentered ? "modal-centered" : ""}`}
            id="modal"
            style={{
              height: `${count && "100%"}`,
              width: `${count && "100%"}`,
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
                showLogin: showLogin,
                showRegister: showRegister,
                showReset: showReset,
              })}
            </div>
            {count && (
              <button
                className="bg-primary text-white rounded px-6 py-3 flex m-auto"
                onClick={showModal}
              >
                <p>Ver {count} psicoterapeutas</p>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default React.forwardRef(TheModal);
