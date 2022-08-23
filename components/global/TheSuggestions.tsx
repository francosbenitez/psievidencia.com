import React, { useState } from "react";
import UsersService from "../../services/UsersService";

const TheSuggestions = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const form = {
        title: title,
        description: description,
      };

      let formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      (await UsersService.create(formData)).data.data;
      setSubmitted(true);
    } catch (errors) {
      console.log("errors.response.data", errors.response.data);
      setSubmitted(false);
    }
  };
  return (
    <>
      {!submitted ? (
        <>
          <p className="pb-4">
            ¿Tenés alguna sugerencia, no te gustó algo, o simplemente te
            gustaría que se implementara algo en particular? ¡Genial! Esta app
            la hacemos entre todes, por lo cual te invitamos a dejar tu
            comentario debajo (es completamente anónimo) ↓
          </p>
          <form className="w-full" onSubmit={handleSubmit}>
            <label>
              Título
              <div className="relative flex mb-3">
                <input
                  type="text"
                  className="h-10 sm:h-full border border-primary w-full outline-0 rounded p-2"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
            </label>
            <label>
              Descripción
              <div className="relative flex mb-3">
                <input
                  type="text"
                  className="h-10 sm:h-full border border-primary w-full outline-0 rounded p-2"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>
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
        <div className="text-center">¡Muchísimas gracias por tu ayuda!</div>
      )}
    </>
  );
};

export default TheSuggestions;
