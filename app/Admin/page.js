import { Card } from "@tremor/react";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="  flex items-center justify-center  ">
        <div className="bg-white p-8 rounded-lg shadow-md ">
          <h1 className="text-2xl font-bold mb-4">Bienvenido </h1>
          <p className="text-gray-600">
            Nos alegra verte de nuevo. Navega y disfruta de las características
            de nuestra plataforma.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
