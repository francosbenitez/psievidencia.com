import React from "react";

const LoginBtn = ({ showModal }: any) => {
  return (
    <button
      className="rounded bg-primary text-white p-2 border-white"
      onClick={showModal}
    >
      Registrarse
    </button>
  );
};

export default LoginBtn;
