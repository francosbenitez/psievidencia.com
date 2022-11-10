import React from "react";

const LoginBtn = ({ showModal }: any) => {
  return (
    <button
      className="rounded bg-white text-primary p-2 border border-primary"
      onClick={showModal}
    >
      Ingresar
    </button>
  );
};

export default LoginBtn;
