import React from "react";

const DropdownBtn = ({ showModal }: any) => {
  return (
    <button
      className="rounded bg-white text-primary p-2 border border-primary"
      onClick={showModal}
    >
      Filtrar
    </button>
  );
};

export default DropdownBtn;
