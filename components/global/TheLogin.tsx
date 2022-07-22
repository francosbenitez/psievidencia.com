import React, { useState } from "react";
import UsersService from "../../services/UsersService";
import { setToken, getToken } from "../../utils/helper";

const TheLogin = () => {
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

      const response = (await UsersService.login(formData)).data;
      setToken(response.token);
      console.log(getToken());
    } catch (errors) {
      console.log("errors.response.data", errors.response.data);
    }
  };

  return (
    <>
      <p className="pb-4">¿No estás registrado? Registrate</p>
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
          Loguearse
        </button>
      </form>
    </>
  );
};

export default TheLogin;
