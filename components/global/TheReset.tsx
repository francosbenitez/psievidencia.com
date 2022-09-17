import React from "react";

const TheReset = ({
  showModal,
  showLogin,
}: {
  showModal?: any;
  showLogin: any;
}) => {
  return (
    <div>
      <div>Restablecer mi contraseña</div>
      <div>
        Para recuperar tu contraseña, ingresá tu dirección de e-mail en el campo
        inferior.
      </div>
      <input />
      <button className="underline">Enviar</button>
      <button
        onClick={() => {
          showModal(), showLogin();
        }}
        className="underline"
      >
        Volver al login
      </button>
    </div>
  );
};

export default TheReset;
