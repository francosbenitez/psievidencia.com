import React, { useState } from "react";
// import UsersService from "../services/UsersService";

const Suggestions = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    console.log("title", title);
    console.log("description", description);

    event.preventDefault();
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
