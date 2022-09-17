import React, { useState } from "react";
import EyeLined from "@/public/icons/eye-lined.svg";
import EyeOffLined from "@/public/icons/eye-off-lined.svg";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import UsersService from "@/services/UsersService";
import Head from "next/head";

const Reset = ({
  token_valid,
  uidb64,
  token,
}: {
  token_valid: string;
  uidb64: string;
  token: string;
}) => {
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

      await UsersService.resetPasswordStepThree(formData);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <Head>
        <title>Recuperá tu contraseña</title>
      </Head>
      <div className="container min-h-screen w-11/12 mx-auto pt-20 pb-40">
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
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded w-full"
          >
            Confirmá tu contraseña nueva
          </button>
        </form>
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
