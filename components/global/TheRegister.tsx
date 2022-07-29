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

      await dispatch(registerUser(formData)).unwrap();
      // showModal();
      setVerificationSent(true);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      {verificationSent ? (
        <div className="grid place-items-center text-2xl h-56">
          ¡Un paso más! Revisá tu correo para verificar tu cuenta.
        </div>
      ) : (
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
            {error !== null && error.username && (
              <>
                {error.username.map((item: string) => (
                  <p key={item} className="text-red-500 text-center">
                    {item}
                  </p>
                ))}
              </>
            )}
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
            {error !== null && error.password && (
              <>
                {error.password.map((item: string) => (
                  <p key={item} className="text-red-500 text-center">
                    {item}
                  </p>
                ))}
              </>
            )}
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded"
            >
              Enviar
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default TheRegister;
