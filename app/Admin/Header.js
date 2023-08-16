import React, { useEffect, useState, useRef } from "react";
import { signOut } from "firebase/auth";
import { ImExit } from "react-icons/im";
import HeaderConfigItem from "./HeaderConfigItem";
import Image from "next/image";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { BiSolidUserCircle } from "react-icons/bi";
import { auth, db } from "../firebase";
import Link from "next/link";

const HeaderConfig = ({ user }) => {
  const [click, setClick] = useState(false);
  const [userDB, setUserDB] = useState([]);

  const modalRef = useRef();

  const handleClick = (event) => {
    console.log("modalRef", modalRef?.current?.contains(event.target));

    if (!modalRef?.current?.contains(event?.target)) {
      // El clic se produjo fuera del área
      // Aquí puedes escribir tu código para manejar el evento
      setNotificationComponent(false);
    }
  };

  const MenuItemArray = [
    // {
    //   id: 1,
    //   title: "Configuración de Usuarios",
    //   icono: <ImCog />,
    //   ruta: "/ConfiguracionCuenta/welcome",
    // },
    // {
    //   id: 2,
    //   title: "Configuración de los Parámetros",
    //   icono: <ImEqualizer />,
    //   ruta: "/configuracion/Parametros",
    // },
    // {
    //   id: 3,
    //   title: "Perfiles de Usuario",
    //   icono: "/Menu/Parametros.png",
    //   ruta: "/",
    // },
  ];
  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, "users", `${user.uid}`), (doc) => {
        setUserDB(doc.data());
      });
    }
  }, [user]);

  return (
    <div className="sticky z-10 top-0 bg-[#3a5dd0] shadow-xl border-b px-5 py-1 flex justify-between items-center max-h-[70px]">
      <Link href={"/"} className=" flex">
        {/* <img className="" src="/ConticoldLogo.png" alt="Logo" /> */}
        {/* <Image src="/ConticoldLogo.png" width={60} height={40} alt="Logo" /> */}
      </Link>
      <div className="text-xl lg:text-3xl text-center px-2">
        <span>
          <p className="text-white"> Leftap </p>
        </span>
      </div>
      <div>
        <div className="flex space-x-4 items-center">
          {user && (
            <div className="relative" onClick={() => setClick(!click)}>
              <div className="flex ">
                {/* <img
                  className="h-auto w-20 rounded-full cursor-pointer"
                  src={`${user?.photoURL}`}
                  alt="photoUrl "
                /> */}
                {user.photoURL ? (
                  <>
                    {/* <Image
                      className="py-2 rounded-full cursor-pointer   "
                      src={`${user?.photoURL}`}
                      width={40}
                      height={40}
                      alt="photoUrl"
                      objectFit="cover"
                    /> */}
                    <BiSolidUserCircle className="w-[40px] h-[40px] text-white" />
                  </>
                ) : (
                  "Cargando Imagen ..."
                )}
              </div>

              {/* cuadro configuraciones */}
              {click && (
                <div>
                  <div className="absolute right-0 w-[22rem] h-auto z-50 bg-gray-200 rounded-md p-3">
                    <div className="flex place-items-center space-x-2">
                      {user.photoURL && (
                        // <Image
                        //   className="h-auto w-20 rounded-full cursor-pointer   "
                        //   src={`${user?.photoURL}`}
                        //   width={60}
                        //   height={60}
                        //   alt="photoUrl"
                        //   objectFit="cover"
                        // />
                        <BiSolidUserCircle className="w-[60px] h-[60px] text-[#436bf0]" />
                      )}

                      <h1 className="text-[1.6rem] capitalize font-bold">
                        {userDB.displayName}
                      </h1>
                    </div>
                    <hr className="w-full border-gray-300 border-[1px] my-2"></hr>
                    {/* iconos y titulos */}
                    <div>
                      {/* <HeaderConfigItem
                        title="Configuración de Usuarios"
                        icono={<ImCog />}
                        ruta="/ConfiguracionCuenta/welcome"
                      />
                      <HeaderConfigItem
                        title="Configuración de los Parámetros"
                        icono={<ImEqualizer />}
                        ruta="/configuracion/Parametros"
                      /> */}
                      {MenuItemArray.map((item) => (
                        <HeaderConfigItem
                          key={item.id}
                          title={item.title}
                          icono={item.icono}
                          ruta={item.ruta}
                        />
                      ))}

                      <div
                        className="cursor-pointer text-[1.06rem] h-12 font-bold flex bg-gray-300 p-3 rounded-md hover:bg-gray-400 place-items-center"
                        onClick={() => signOut(auth)}
                      >
                        <span className="mr-2 text-[1.9rem]">
                          <ImExit />
                        </span>
                        Cerrar Sesión{" "}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderConfig;
