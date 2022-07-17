import React, { useState } from "react";
import UsersService from "../services/UsersService";

const Suggestions = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      console.log("title", title);
      console.log("description", description);

      const form = {
        title: title,
        description: description,
      };

      let formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });
      const response = (await UsersService.create(formData)).data.data;
    } catch (errors) {
      console.log("errors.response.data", errors.response.data);
    }
  };

  return (
    <div className="main-content">
      <h2 className="text-3xl">Suggestions</h2>
      <form className="m-auto w-1/2" onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Suggestions;
