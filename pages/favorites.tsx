import React from "react";
import UsersService from "../services/UsersService";
import { GetServerSideProps } from "next";

const Favorites = ({ favorites }: { favorites: any }) => {
  console.log("favorites", favorites);
  return (
    <div className="main-content">
      <h2 className="text-3xl">Favorites</h2>
      {favorites.length > 0 &&
        favorites.map((suggestion: any) => (
          <div key={suggestion.id}>
            <p>{suggestion.title}</p>
            <p>{suggestion.description}</p>
          </div>
        ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const favorites = (await UsersService.favorites()).data;
  return {
    props: {
      favorites,
    },
  };
};

export default Favorites;
