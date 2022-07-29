import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/user/userActions";
import type { AppDispatch } from "../../store";

const TheRegister = ({
  showModal,
  showLogin,
}: {
  showModal?: any;
  showLogin: any;
}) => {
  useSelector((state: any) => {
    console.log(state);
  });

  const { loading, userInfo, error, success } = useSelector(
    (state: any) => state.userReducer
  );

  const dispatch = useDispatch<AppDispatch>();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [verificationSent, setVerificationSent] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const form = {
        username: username,
        email: email,
        password: password,
      };

      let formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      dispatch(registerUser(formData));
      // showModal();
      setVerificationSent(true);
    } catch (errors) {
      console.log("errors.response.data", errors.response.data);
    }
  };

  return (
    <>
      {!verificationSent ? (
        <>
          <p className="pb-4">
            ¿Ya estás registrado?{" "}
            <button
              onClick={() => {
                showModal(), showLogin();
              }}
              className="underline"
            >
              Ingresar
            </button>
          </p>
          <form className="w-full" onSubmit={handleSubmit}>
            <label>
              Usuario
              <input
                type="text"
                className="h-10 sm:h-full border border-primary w-full pl-3 outline-0 rounded dropdown-header"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>
            <label>
              Email
              <input
                type="text"
                className="h-10 sm:h-full border border-primary w-full pl-3 outline-0 rounded dropdown-header"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label>
              Contraseña
              <input
                type="text"
                className="h-10 sm:h-full border border-primary w-full pl-3 outline-0 rounded dropdown-header"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded"
            >
              Enviar
            </button>
          </form>
        </>
      ) : (
        <div className="grid place-items-center text-2xl h-56">
          ¡Un paso más! Revisá tu correo para verificar tu cuenta.
        </div>
      )}
    </>
  );
};

export default TheRegister;
