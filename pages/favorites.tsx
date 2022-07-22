import React from "react";
import UsersService from "../services/UsersService";
// import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import TheCard from "../components/home/TheCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const result = (await UsersService.favorites()).data;
      setFavorites(result);
    };
    fetchFavorites();
  }, []);

  return (
    <div className="container mx-auto px-5 sm:px-0 pt-20 pb-40 main-content">
      <h2 className="text-3xl text-center">Mis favoritos</h2>
      <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {favorites.map((psychologist: any) => {
          return <TheCard key={psychologist.id} psychologist={psychologist} />;
        })}
      </div>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const favorites = (await UsersService.favorites()).data;
//   return {
//     props: {
//       favorites,
//     },
//   };
// };

export default Favorites;
