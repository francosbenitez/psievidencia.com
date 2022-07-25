import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/user/userActions";
import type { AppDispatch } from "../../store";

const TheLogin = ({ showModal }: { showModal?: any }) => {
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

      dispatch(userLogin(formData));
      showModal();
    } catch (errors) {
      console.log("errors.response.data", errors.response.data);
    }
  };

  return (
    <>
      <p className="pb-4">
        ¿No estás registrado?{" "}
        <button onClick={showModal} className="underline">
          Registrate
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
  );
};

export default TheLogin;
