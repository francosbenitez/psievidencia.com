import React, { useState } from "react";
import UsersService from "../../services/UsersService";

const TheRegister = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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

      (await UsersService.register(formData)).data.data;
    } catch (errors) {
      console.log("errors.response.data", errors.response.data);
    }
  };

  return (
    <>
      <p className="pb-4">¿Ya estás registrado? Logueate</p>
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
          Registrarse
        </button>
      </form>
    </>
  );
};

export default TheRegister;
