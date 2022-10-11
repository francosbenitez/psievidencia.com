import React from "react";

const Contact = () => {
  return (
    <div className="container min-h-screen w-11/12 mx-auto pt-20 pb-40">
      <div className="flex flex-col justify-center sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center underline">Contacto</h2>
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-lg">
          <div className="bg-white py-8 px-4 border shadow sm:rounded-lg sm:px-10">
            <form action="#">
              <div className="mt-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
                <div className="mb-5 sm:col-span-6">
                  <label
                    // for="name"
                    className="block text-sm font-medium leading-5 text-primary"
                  >
                    Tu nombre
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      name="name"
                      type="text"
                      id="name"
                      className="appearance-none block w-full px-3 py-2 border border-primary rounded-md shadow-sm placeholder-primary focus:outline-none focus:bg-white focus:border-primary sm:text-sm "
                      value=""
                    />
                  </div>
                </div>
                <div className="mb-5 sm:col-span-6">
                  <label
                    // for="email"
                    className="block text-sm font-medium leading-5 text-primary"
                  >
                    Tu email
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      name="email"
                      type="email"
                      id="email"
                      className="appearance-none block w-full px-3 py-2 border border-primary rounded-md shadow-sm placeholder-primary focus:outline-none focus:bg-white focus:border-primary sm:text-sm "
                      value=""
                    />
                  </div>
                </div>
                <div className="mb-5 sm:col-span-6">
                  <label
                    // for="message"
                    className="block text-sm font-medium leading-5 text-primary"
                  >
                    Tu mensaje
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <textarea
                      name="message"
                      // type="text"
                      id="message"
                      className="appearance-none block w-full px-3 py-2 border border-primary rounded-md shadow-sm placeholder-primary focus:outline-none focus:bg-white focus:border-primary sm:text-sm "
                    ></textarea>
                  </div>
                </div>
              </div>
              <span className="block rounded-md shadow-sm">
                <button
                  type="submit"
                  className="mt-5 w-full px-6 py-3 border border-transparent text-sm leading-4 uppercase font-medium rounded-md text-white bg-primary hover:bg-white hover:text-primary hover:border-primary focus:outline-none transition ease-in-out duration-150"
                >
                  Enviar mensaje
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
