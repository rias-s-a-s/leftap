"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";

const Login = () => {
  const [InputValue, setInputValue] = useState({});
  const onSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, InputValue?.Usuario, InputValue?.Password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log("error", error);

        if (
          errorCode === "auth/invalid-email" ||
          errorCode === "auth/wrong-password"
        ) {
          alert("Usuario a contraseña incorrectos");
        } else {
          alert("Error al intentar ingresar al sistema ");
        }
      });
  };

  const handlerChange = (e) => {
    setInputValue({
      ...InputValue,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div className="bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-[#1066c3] bottom-0 leading-5 h-full w-full overflow-hidden"></div>
      <div className="relative   min-h-screen  sm:flex sm:flex-row  justify-center bg-transparent rounded-3xl shadow-xl">
        <div className="flex-col flex  self-center lg:px-14 sm:max-w-4xl xl:max-w-md  z-10">
          <div className="self-start hidden lg:flex flex-col  text-gray-300">
            <h1 className="my-3 font-semibold text-4xl">
              ¡Bienvenido/a de nuevo!
            </h1>
            <p className="pr-3 text-sm opacity-75">
              Comienza a administrar tus productos de forma sencilla y
              eficiente. ¿Listo/a para agregar o editar un producto? ¡Vamos
              allá!
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center  z-10">
          <form
            onSubmit={onSubmit}
            className="p-12 bg-white mx-auto rounded-3xl w-96 "
          >
            <div className="mb-7">
              <h3 className="font-semibold text-2xl text-gray-800">
                Iniciar sesión{" "}
              </h3>
            </div>
            <div className="space-y-6">
              <div className>
                <input
                  className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                  type="email"
                  placeholder="Email"
                  onChange={handlerChange}
                  name="Usuario"
                  required
                />
              </div>
              <div>
                <input
                  onChange={handlerChange}
                  type="password"
                  placeholder="Password"
                  className="text-sm text-gray-800 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"
                  name="Password"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center bg-[#1066c3]  hover:bg-[#131b2c] text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
                >
                  Iniciar sesión{" "}
                </button>
              </div>
            </div>
            <div className="mt-7 text-center text-gray-300 text-xs">
              <span>
                Copyright © {new Date().getFullYear()}-
                {new Date().getFullYear() + 1}{" "}
                <a
                  className="text-purple-500 hover:text-purple-600 "
                  href="https://conticold.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  conticold
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
