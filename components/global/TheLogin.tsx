import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/user/userActions";
import type { AppDispatch } from "../../store";

const TheLogin = ({
  showModal,
  showRegister,
}: {
  showModal?: any;
  showRegister: any;
}) => {
  const { loading, error } = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch<AppDispatch>();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const form = {
        username: username,
        password: password,
      };

      let formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      await dispatch(userLogin(formData)).unwrap();
      showModal();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <p className="pb-4">
        ¿No estás registrado?{" "}
        <button
          onClick={() => {
            showModal(), showRegister();
          }}
          className="underline"
        >
          Registrarse
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
  );
};

export default TheLogin;
