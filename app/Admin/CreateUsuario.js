"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useUpdateProfile } from "react-firebase-hooks/auth";

const CreateUsuario = ({ setNewUser }) => {
  const [InputValues, setInputValues] = useState({});
  const [Eyes, setEyes] = useState({
    Pass: false,
    ConfirmPass: false,
  });
  const [PassDiference, setPassDiference] = useState(false);
  const [updateProfile, updating, error] = useUpdateProfile(auth);

  const createUserDb = async (user) => {
    // crear referencia al documento
    const userRef = doc(db, `users/${user.uid}/`);
    // buscar documento
    const consulta = await getDoc(userRef);

    // revisar si existe
    if (!consulta.exists()) {
      // crear documento

      try {
        await setDoc(userRef, {
          // crear usuario firebase

          displayName:
            `${InputValues.Nombre} ${InputValues.Apellido}` ||
            user.displayName ||
            " ",
          email: user.email || " ",
          pass: InputValues?.Pass || "",
          photoURL: user?.photoURL || "/NoPhotoUrl.webp",
          uid: user.uid || " ",
          createdAt: serverTimestamp(),
          lastLogin: serverTimestamp(),
          providerId: user.providerData[0].providerId || "",
          status: false,

          // crear roles de usuario
        });

        const displayName = `${InputValues.Nombre} ${InputValues.Apellido}`;
        const photoURL = "/NoPhotoUrl.webp";
        await updateProfile({ displayName, photoURL });
      } catch (err) {
        console.log(err);
        alert(err);
      }
    }
  };

  const handerSubmit = async (e) => {
    e.preventDefault();
    setPassDiference(false);
    if (InputValues.Pass != InputValues.ConfirmPass) {
      setPassDiference(true);
      return;
    }
    createUserWithEmailAndPassword(auth, InputValues.Email, InputValues.Pass)
      .then((userCredential) => {
        console.log("user", userCredential);
        // Signed in
        const user = userCredential.user;
        createUserDb(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
        // ..
      });
  };

  const handleChange = (e) => {
    setInputValues({
      ...InputValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-black/60 transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0">
      <div className="container mx-auto  w-11/12 md:w-2/3 max-w-xl">
        <div className="relative overflow-auto   max-h-screen  py-2 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
          <h3 className="pt-2 text-2xl text-center">Crear una cuenta</h3>

          <form onSubmit={handerSubmit} className="px-8 py-6  bg-white rounded">
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="Nombre"
                >
                  Nombre <span className="text-red-900">(*)</span>
                </label>
                <input
                  className="InputStyle"
                  id="Nombre"
                  name="Nombre"
                  type="text"
                  placeholder="Nombre"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="Apellido"
                >
                  Apellido <span className="text-red-900">(*)</span>
                </label>
                <input
                  className="InputStyle"
                  id="Apellido"
                  name="Apellido"
                  type="text"
                  placeholder="Apellido"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="Email"
              >
                Email <span className="text-red-900">(*)</span>
              </label>
              <input
                className="InputStyle"
                id="Email"
                type="email"
                placeholder="Email"
                name="Email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 md:flex md:justify-between gap-x-4">
              <div className="mb-2">
                <label
                  htmlFor="Pass"
                  className="block mb-2 text-sm font-bold text-gray-700"
                >
                  Contraseña Nueva <span className="text-red-900">(*)</span>
                </label>
                <div className="relative">
                  <input
                    autoComplete="off"
                    autoFocus
                    type={Eyes.Pass ? "text" : "password"}
                    name="Pass"
                    id="Pass"
                    required
                    onChange={handleChange}
                    className="InputStyle"
                    // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Debe contener al menos una letra mayúscula, un número y 8 o más caracteres"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    {Eyes.Pass ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        onClick={() => {
                          setEyes({ ...Eyes, Pass: !Eyes.Pass });
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        onClick={() => {
                          setEyes({ ...Eyes, Pass: !Eyes.Pass });
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                {PassDiference && (
                  <p className="text-xs italic text-red-500">
                    Las contraseñas no coinciden.{" "}
                  </p>
                )}
              </div>
              <div className="mb-2">
                <label
                  htmlFor="ConfirmPass"
                  className="block mb-2 text-sm font-bold text-gray-700"
                >
                  Confirma tu Contraseña{" "}
                  <span className="text-red-900">(*)</span>{" "}
                </label>
                <div className="relative">
                  <input
                    autoComplete="off"
                    type={Eyes.ConfirmPass ? "text" : "password"}
                    name="ConfirmPass"
                    id="ConfirmPass"
                    required
                    onChange={handleChange}
                    className="InputStyle "
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    {Eyes.ConfirmPass ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        onClick={() => {
                          setEyes({ ...Eyes, ConfirmPass: !Eyes.ConfirmPass });
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        onClick={() => {
                          setEyes({ ...Eyes, ConfirmPass: !Eyes.ConfirmPass });
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <hr className="py-2 border-t" />

            <div className="flex justify-around  gap-2">
              <button type="submit" className="InputButtom">
                Registrar Usuario
              </button>
              <button
                className="InputButtom"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setNewUser(false);
                }}
              >
                Cerrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUsuario;
