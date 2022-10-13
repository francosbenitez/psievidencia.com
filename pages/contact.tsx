import React, { useState } from "react";
import Head from "next/head";
import UsersService from "@/services/UsersService";
import LoadingSpinner from "@/components/home/LoadingSpinner";

const Contact = () => {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");

  const handleContact = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const form = {
        name: name,
        from_email: fromEmail,
        message: message,
      };

      let formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      setLoading(true);
      const response = await UsersService.contact(formData);
      setLoading(false);
      setStatus(response.data.status);
    } catch (error) {
      setStatus(error.response.data.status);
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contacto | Psievidencia</title>
      </Head>
      <div className="container min-h-screen w-11/12 mx-auto pt-20 pb-40">
        <div className="flex flex-col justify-center sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center underline">Contacto</h2>
          <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-lg">
            <div className="bg-white py-8 px-4 border shadow sm:rounded-lg sm:px-10">
              <form onSubmit={handleContact}>
                <div className="mt-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
                  <div className="mb-5 sm:col-span-6">
                    <label className="block text-sm leading-5 text-primary">
                      Tu nombre
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        name="name"
                        type="text"
                        id="name"
                        className="appearance-none block w-full px-3 py-2 border border-primary rounded-md shadow-sm placeholder-primary focus:outline-none focus:bg-white focus:border-primary sm:text-sm"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-5 sm:col-span-6">
                    <label className="block text-sm leading-5 text-primary">
                      Tu email
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        name="email"
                        type="email"
                        id="email"
                        className="appearance-none block w-full px-3 py-2 border border-primary rounded-md shadow-sm placeholder-primary focus:outline-none focus:bg-white focus:border-primary sm:text-sm"
                        value={fromEmail}
                        onChange={(event) => setFromEmail(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-5 sm:col-span-6">
                    <label className="block text-sm leading-5 text-primary">
                      Tu mensaje
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <textarea
                        name="message"
                        id="message"
                        className="appearance-none block w-full px-3 py-2 border border-primary rounded-md shadow-sm placeholder-primary focus:outline-none focus:bg-white focus:border-primary sm:text-sm"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <span className="block rounded-md shadow-sm">
                  <button
                    disabled={
                      loading || (status !== "" && status === "success")
                    }
                    type="submit"
                    className={`mt-5 w-full px-6 py-3 border border-transparent text-sm leading-4 rounded-md text-white bg-primary focus:outline-none transition ease-in-out duration-150 ${
                      status !== ""
                        ? status === "failed"
                          ? "bg-red-500"
                          : "bg-green-500"
                        : ""
                    }  `}
                  >
                    {loading ? (
                      <LoadingSpinner btn={true} />
                    ) : status === "" ? (
                      "Enviar mensaje"
                    ) : status === "failed" ? (
                      "Ha habido un error"
                    ) : (
                      "Mensaje enviado exitósamente"
                    )}
                  </button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
