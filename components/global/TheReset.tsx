import React, { useState } from "react";
import UsersService from "@/services/UsersService";

const TheReset = ({
  showModal,
  showLogin,
}: {
  showModal?: any;
  showLogin: any;
}) => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const form = {
        email: email,
        redirect_url: "http://localhost:3000",
      };

      let formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      await UsersService.resetPasswordStepOne(formData);
      showModal();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <form className="w-full" onSubmit={handleSubmit}>
        <label>
          Email
          <div className="relative flex mb-3">
            <input
              type="text"
              className="h-10 sm:h-full border border-primary w-full outline-0 rounded p-2"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </label>
        <button
          type="submit"
          className="bg-primary text-white py-2 px-4 rounded"
        >
          Recuperar
        </button>
      </form>
      <button
        className="block mt-3"
        onClick={() => {
          showModal(), showLogin();
        }}
      >
        ← Volver
      </button>
    </>
  );
};

export default TheReset;
