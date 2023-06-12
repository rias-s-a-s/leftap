"use client";
import React, { useState } from "react";
import Image from "next/image";
import ItemMenu from "./ItemMenu";
import Link from "next/link";

const MenuPrincipal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      style={{ filter: "drop-shadow(0px 0px 3px black)" }}
      className="sticky z-50 top-0 p-2 shadow-sm md:flex md:items-center md:justify-around bg-[#182d57] sm:bg-[#182d57] sm:from-[#182d57] sm:via-[#182d57] sm:to-[#182d57]"
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
              src="/Logo.png"
              width={200}
              height={100}
              alt="Logotype"
              className="object-contain"
            />
          </div>
        </Link>
        <span className="text-3xl cursor-pointer mx-2 md:hidden block text-white">
          <button name="Menu" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="h-10 w-10 text-white"
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
          className={` text-center  flex flex-col h-screen md:h-auto  md:flex md:flex-row  md:items-center z-[-1] md:z-auto md:static gap-2 absolute text-white font-semibold bg-blue-700 md:bg-transparent w-full left-0 top-full md:w-auto md:py-0  md:pl-0 pl-7 md:opacity-100 opacity-0 right-[-400px] transition-all ease-in  ${
            isOpen ? ` right-0 py-11 opacity-100` : `hidden`
          }`}
        >
          <ItemMenu ruta="/" setIsOpen={setIsOpen}>
            Inicio
          </ItemMenu>
          <ItemMenu ruta="/Nosotros" setIsOpen={setIsOpen}>
            Nosotros
          </ItemMenu>
          <ItemMenu ruta="/Blog" setIsOpen={setIsOpen}>
            Blog
          </ItemMenu>
          <ItemMenu ruta="/Herramientas" setIsOpen={setIsOpen}>
            Herramientas
          </ItemMenu>
          <ItemMenu ruta="/Contactanos" setIsOpen={setIsOpen}>
            Desarrollo Personal
          </ItemMenu>
        </div>
      </div>
    </nav>
  );
};

export default MenuPrincipal;
