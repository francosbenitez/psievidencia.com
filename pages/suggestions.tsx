import React from "react";
import UsersService from "../services/UsersService";
import { GetServerSideProps } from "next";

const Suggestions = ({ suggestions }: { suggestions: any }) => {
  console.log("suggestions", suggestions);

  return (
    <div className="main-content">
      <h2 className="text-3xl">Suggestions</h2>
      {suggestions.length > 0 &&
        suggestions.map((suggestion: any) => (
          <div key={suggestion.id}>
            <p>{suggestion.title}</p>
            <p>{suggestion.description}</p>
          </div>
        ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const suggestions = (await UsersService.suggestions()).data;
  return {
    props: {
      suggestions,
    },
  };
};

export default Suggestions;
