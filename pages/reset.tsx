import React, { useState } from "react";
import EyeLined from "@/public/icons/eye-lined.svg";
import EyeOffLined from "@/public/icons/eye-off-lined.svg";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import UsersService from "@/services/UsersService";
import Head from "next/head";
// import Link from "next/link";

const Reset = ({
  token_valid,
  uidb64,
  token,
}: {
  token_valid: string;
  uidb64: string;
  token: string;
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  if (token_valid === "False") {
    router.push("error");
  }

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const form = {
        password: password,
        token: token,
        uidb64: uidb64,
      };

      let formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      setLoading(true);
      await UsersService.resetPasswordStepThree(formData);
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Recuperá tu contraseña</title>
      </Head>
      <div className="container min-h-screen w-11/12 mx-auto pt-20 pb-40">
        {success ? (
          <div className="w-1/2 mx-auto">
            <p className="text-center text-3xl leading-normal bg-white p-3 rounded-xl">
              ¡Tu contraseña fue actualizada éxitosamente!
            </p>
            {/* <div className="flex my-3">
              <Link href="/edit">
                <button className="bg-primary text-white rounded p-2 border border-primary">
                  ← Volver a Editar perfil
                </button>
              </Link>
              <Link href="/">
                <button className="bg-white text-primary rounded p-2 ml-auto border border-primary">
                  Ir a la Home →
                </button>
              </Link>
            </div> */}
          </div>
        ) : (
          <form className="w-1/2 mx-auto" onSubmit={handleSubmit}>
            <label>
              Ingresá tu contraseña nueva
              <div className="pass-wrapper mb-3">
                <input
                  className="h-10 sm:h-full border border-primary w-full outline-0 rounded"
                  value={password}
                  type={passwordShown ? "text" : "password"}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <i onClick={togglePasswordVisiblity}>
                  {!passwordShown ? <EyeLined /> : <EyeOffLined />}
                </i>{" "}
              </div>
            </label>
            <button
              disabled={loading}
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded w-full"
            >
              Confirmá tu contraseña nueva
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { token_valid, uidb64, token } = context.query;
  return {
    props: { token_valid, uidb64, token },
  };
};

export default Reset;
