import React from "react";

const LogoutBtn = (logout: any) => {
  return (
    <button
      className="rounded bg-primary text-white p-2 border-white"
      onClick={logout}
    >
      Salir
    </button>
  );
};

export default LogoutBtn;
