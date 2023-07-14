import Image from "next/image";
import React from "react";

const Comentarios = () => {
  return (
    <>
      <div className="mt-2">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <h2 className="mb-2 uppercase drop-shadow-lg text-center text-2xl text-gray-900 italic font-serif font-bold md:text-5xl">
            Estas instituciones ya están cultivando el futuro.
          </h2>
          <div className="h-full p-8 flex bg-[#182d57] items-center justify-center rounded-lg">
            <div className="grid grid-cols-12 gap-4 gap-y-4 max-w-6xl">
              {/* <!-- Video 1 --> */}
              <div className="col-span-12 sm:col-span-6 md:col-span-3 bg-blue-900 rounded-xl filter hover:shadow-lg hover:shadow-white cursor-pointer">
                <card className="w-full flex flex-col">
                  <div className="relative self-center">
                    {/* <!-- Image Video --> */}
                    <Image
                      src={"/Colegios/SanMartin.webp"}
                      height={250}
                      width={200}
                    />
                  </div>
                  <div className="flex flex-row mt-2 gap-2">
                    {/* <!-- Description --> */}
                    <div className="flex flex-col text-center w-full">
                      <p className="text-gray-100 text-sm font-semibold">Instituto General San Martín</p>
                    </div>

                  </div>
                </card>
              </div>
              {/* <!-- Video 2 --> */}
              <div className="col-span-12 sm:col-span-6 md:col-span-3 bg-blue-900 p-2 rounded-xl hover:shadow-lg hover:shadow-white cursor-pointer">
                <card className="w-full flex flex-col">
                  <div className="relative self-center">
                    {/* <!-- Image Video --> */}
                    <Image
                      src={"/Colegios/Tucuman.webp"}
                      height={250}
                      width={200}
                    />
                  </div>
                  <div className="flex flex-row mt-2 gap-2">
                    {/* <!-- Description --> */}
                    <div className="flex flex-col text-center w-full">
                      <p className="text-gray-100 text-sm font-semibold">Instituto Congreso Tucumán</p>
                    </div>

                  </div>
                </card>
              </div>
              {/* <!-- Video 3 --> */}
              <div className="col-span-12 sm:col-span-6 md:col-span-3 bg-blue-900 p-2 rounded-xl hover:shadow-lg hover:shadow-white cursor-pointer">
                <card className="w-full flex flex-col">
                  <div className="relative self-center">
                    {/* <!-- Image Video --> */}
                    <Image
                      src={"/Colegios/JovenArgentino.webp"}
                      height={250}
                      width={200}
                    />
                  </div>
                  <div className="flex flex-row mt-2 gap-2">
                    {/* <!-- Description --> */}
                    <div className="flex flex-col text-center w-full">
                      <p className="text-gray-100 text-sm font-semibold">Instituto Privado Joven Argentino</p>
                    </div>

                  </div>
                </card>
              </div>
              {/* <!-- Video 4 --> */}
              <div className="col-span-12 sm:col-span-6 md:col-span-3 bg-blue-900 p-2 rounded-xl hover:shadow-lg hover:shadow-white cursor-pointer">
                <card className="w-full flex flex-col">
                  <div className="relative self-center">
                    {/* <!-- Image Video --> */}
                    <Image
                      src={"/Colegios/Apemys.webp"}
                      height={250}
                      width={200}
                    />
                  </div>
                  <div className="flex flex-row mt-2 gap-2">
                    {/* <!-- Description --> */}
                    <div className="flex flex-col text-center w-full">
                      <p className="text-gray-100 text-sm font-semibold">Agremiación del Personal de Enseñanza Media y Superior</p>
                    </div>

                  </div>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comentarios;
