import React, { useState } from "react";
import UsersService from "@/services/UsersService";
import LoadingSpinner from "@/components/home/LoadingSpinner";

const ProfilePassword = ({ email }: { email: string }) => {
  const [loading, setLoading] = useState(false);

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const handleReset = async (event: React.FormEvent) => {
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
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };
  return (
    <div className="my-4">
      <label className="block text-gray-700 text-1xl mb-2">Contraseña</label>
      <div className="w-96 flex">
        <input
          disabled
          className="p-2 rounded border border-primary focus-visible:outline-none cursor-not-allowed mr-2"
          placeholder="******************"
        />
        <button
          disabled={loading}
          className="w-full rounded bg-primary text-white p-2 border-white ml-auto"
          onClick={handleReset}
        >
          {loading ? <LoadingSpinner btn={true} /> : "Cambiar contraseña"}
        </button>
      </div>
    </div>
  );
};

export default ProfilePassword;
