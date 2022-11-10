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
  const [loading, setLoading] = useState(false);

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const form = {
        email: email,
        redirect_url: origin + "/reset",
      };

      let formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      setLoading(true);
      await UsersService.resetPasswordStepOne(formData);
      setLoading(false);
      showModal();
    } catch (error) {
      console.log("error", error);
      setLoading(false);
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
          disabled={loading}
          type="submit"
          className={`bg-primary text-white py-2 px-4 rounded ${
            loading ? "disabled cursor-not-allowed" : ""
          }`}
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
