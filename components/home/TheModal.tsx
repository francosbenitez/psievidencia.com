import React, { useState } from "react";
import Suggestions from "../../public/icons/suggestions.svg";

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
      <button className="w-1/2 flex" onClick={showModal}>
        <div className="ml-auto">
          <span className="mr-1 bg-gray-100 text-sm md:text-md">{btnText}</span>
          <Suggestions className="inline w-3 h-3 align-text-top" />
        </div>
      </button>
      {show && (
        <div className="modal" id="modal">
          <h2>
            {title}
            <button className="float-right" onClick={showModal}>
              X
            </button>
          </h2>
          <p className="px-4 pt-4">
            ¿Tenés alguna sugerencia, no te gustó algo, o simplemente te
            gustaría que se implementara algo en particular? ¡Genial! Esta la
            app la hacemos entre todes, por lo cual te invitamos a dejar tu
            comentario debajo (es completamente anónimo) ↓
          </p>
          <div className="content">{content}</div>
          {/* <div className="actions">
            <button className="toggle-button" onClick={showModal}>
              Close
            </button>
          </div> */}
        </div>
      )}
    </>
  );
};

export default TheModal;
