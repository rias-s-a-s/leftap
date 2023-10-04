"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ItemMenu from "./ItemMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuPrincipal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pagina = usePathname();
  useEffect(() => {
    //console.log(pagina)
    setIsOpen(false);
  }, [pagina]);
  return (
    <nav
      style={{ filter: "drop-shadow(0px 0px 3px black)" }}
      className={`${
        (pagina == "/Admin" && "hidden") || "sticky md:flex"
      } z-20 top-0 p-2 shadow-sm md:items-center md:justify-around bg-gray-200 sm:bg-gray-200 sm:from-gray-200 sm:via-gray-200 sm:to-gray-200 text-[#182d57]`}
    >
      <div className="flex justify-between items-center  ">
        {/* Escudo Logo "inicio" */}
        <Link href="/">
          <div
            style={{ filter: "drop-shadow(0px 0px 6px #99C5B5)" }}
            className="cursor-pointer"
          >
            <Image
              title="Ir a inicio"
              src="/Logos/Logo.webp"
              width={120}
              height={50}
              alt="Logotype"
              className="object-contain"
            />
          </div>
        </Link>
        <span className="text-3xl cursor-pointer mx-2 md:hidden block text-white">
          <button name="Menu" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="h-10 w-10 text-[#182d57]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>{" "}
          </button>
        </span>
      </div>
      <div className="">
        <div
          className={` text-center  flex flex-col h-screen md:h-auto  md:flex md:flex-row  md:items-center z-[-1] md:z-auto md:static gap-2 absolute  font-semibold bg-gray-100 md:bg-transparent w-full left-0 top-full md:w-auto md:py-0  md:pl-0 pl-7 md:opacity-100 opacity-0 right-[-400px] transition-all ease-in  ${
            isOpen ? ` right-0 py-11 opacity-100` : `hidden`
          }`}
        >
          <ItemMenu ruta="/" setIsOpen={setIsOpen}>
            Inicio
          </ItemMenu>
          <ItemMenu ruta="/Servicios" setIsOpen={setIsOpen}>
            Servicios
          </ItemMenu>
          <ItemMenu ruta="/Nosotros" setIsOpen={setIsOpen}>
            Nosotros
          </ItemMenu>
          <a
            href="https://leftap.blogspot.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="cursor-pointer mx-3 my-6 md:mx-1 lg:mx-3">
              <div className="uppercase md:text-base lg:text-xl"> Blog</div>
            </div>
          </a>

          <ItemMenu ruta="/Desarrollo" setIsOpen={setIsOpen}>
            Desarrollo Personal
          </ItemMenu>
          <ItemMenu ruta="/Admin/Blog" setIsOpen={setIsOpen}>
            Login{" "}
          </ItemMenu>
        </div>
      </div>
    </nav>
  );
};

export default MenuPrincipal;
