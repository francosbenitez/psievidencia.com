import React from "react";
import UsersService from "../services/UsersService";
import { useState, useEffect } from "react";
import TheCard from "../components/home/TheCard";
import Head from "next/head";

import withAuth from "@/hoc/withAuth";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {
    const result = (await UsersService.favorites()).data;
    setFavorites(result);
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <>
      <Head>
        <title>Mis favoritos | Psievidencia</title>
        <meta name="description" content="Mis favoritos | Psievidencia" />
      </Head>
      <div className="container min-h-screen w-11/12 mx-auto pt-20 pb-40">
        <h2 className="text-3xl text-center underline">Mis favoritos</h2>
        {favorites != null && favorites.length > 0 ? (
          <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {favorites.map((psychologist: any) => {
              return (
                <TheCard
                  key={psychologist.id}
                  psychologist={psychologist}
                  update={fetchFavorites}
                />
              );
            })}
          </div>
        ) : (
          <div className="grid place-items-center text-2xl h-56">
            No se han encontrado resultados
          </div>
        )}
      </div>
    </>
  );
};

export default withAuth(Favorites);
