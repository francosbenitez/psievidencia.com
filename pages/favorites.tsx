import React from "react";
import UsersService from "../services/UsersService";
import { GetServerSideProps } from "next";

const Favorites = ({ favorites }: { favorites: any }) => {
  console.log("favorites", favorites);
  return (
    <div className="main-content">
      <h2 className="text-3xl">Favorites</h2>
      {favorites.length > 0 &&
        favorites.map((favorite: any) => (
          <div key={favorite.id}>
            <p>{favorite.psychologist_id}</p>
            <p>{favorite.user_id}</p>
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
