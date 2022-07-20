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
              Título:
              <input
                type="text"
                className="h-10 sm:h-full border border-primary w-full pl-3 outline-0 rounded dropdown-header"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </label>
            <label>
              Descripción
              <input
                type="text"
                className="h-10 sm:h-full border border-primary w-full pl-3 outline-0 rounded dropdown-header"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
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
        <div className="text-center">¡Muchísimas gracias por tu ayuda!</div>
      )}
    </>
  );
};

export default TheSuggestions;
