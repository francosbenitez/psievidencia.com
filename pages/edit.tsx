import React from "react";
import Head from "next/head";
import * as EditComponents from "@/components/edit";

const Edit = () => {
  const Components: Record<string, any> = EditComponents;
  return (
    <>
      <Head>
        <title>Editá tus datos | Psievidencia</title>
      </Head>
      <div className="container min-h-screen w-11/12 mx-auto pt-20 pb-40">
        <h2 className="text-3xl">Editá tus datos</h2>
        <form className="">
          {Object.keys(EditComponents).map((item) => {
            const Item: any = Components[item];
            return <Item key={item} />;
          })}
        </form>
      </div>
    </>
  );
};

export default Edit;
