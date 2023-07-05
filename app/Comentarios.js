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
          <div class="h-full p-8 flex bg-[#182d57] items-center justify-center rounded-lg">
            <div class="grid grid-cols-12 gap-4 gap-y-4 max-w-6xl">
              {/* <!-- Video 1 --> */}
              <div class="col-span-12 sm:col-span-6 md:col-span-3 bg-blue-900 rounded-xl filter hover:shadow-lg hover:shadow-white cursor-pointer">
                <card class="w-full flex flex-col">
                  <div class="relative self-center">
                    {/* <!-- Image Video --> */}
                    <Image
                      src={"/Colegios/SanMartin.webp"}
                      height={250}
                      width={200}
                    />
                  </div>
                  <div class="flex flex-row mt-2 gap-2">
                    {/* <!-- Description --> */}
                    <div className="flex flex-col text-center w-full">
                      <p class="text-gray-100 text-sm font-semibold">Instituto General San Martín</p>
                    </div>

                  </div>
                </card>
              </div>
              {/* <!-- Video 2 --> */}
              <div class="col-span-12 sm:col-span-6 md:col-span-3 bg-blue-900 p-2 rounded-xl hover:shadow-lg hover:shadow-white cursor-pointer">
                <card class="w-full flex flex-col">
                  <div class="relative self-center">
                    {/* <!-- Image Video --> */}
                    <Image
                      src={"/Colegios/Tucuman.webp"}
                      height={250}
                      width={200}
                    />
                  </div>
                  <div class="flex flex-row mt-2 gap-2">
                    {/* <!-- Description --> */}
                    <div className="flex flex-col text-center w-full">
                      <p class="text-gray-100 text-sm font-semibold">Instituto Congreso Tucumán</p>
                    </div>

                  </div>
                </card>
              </div>
              {/* <!-- Video 3 --> */}
              <div class="col-span-12 sm:col-span-6 md:col-span-3 bg-blue-900 p-2 rounded-xl hover:shadow-lg hover:shadow-white cursor-pointer">
                <card class="w-full flex flex-col">
                  <div class="relative self-center">
                    {/* <!-- Image Video --> */}
                    <Image
                      src={"/Colegios/JovenArgentino.webp"}
                      height={250}
                      width={200}
                    />
                  </div>
                  <div class="flex flex-row mt-2 gap-2">
                    {/* <!-- Description --> */}
                    <div className="flex flex-col text-center w-full">
                      <p class="text-gray-100 text-sm font-semibold">Instituto Privado Joven Argentino</p>
                    </div>

                  </div>
                </card>
              </div>
              {/* <!-- Video 4 --> */}
              <div class="col-span-12 sm:col-span-6 md:col-span-3 bg-blue-900 p-2 rounded-xl hover:shadow-lg hover:shadow-white cursor-pointer">
                <card class="w-full flex flex-col">
                  <div class="relative self-center">
                    {/* <!-- Image Video --> */}
                    <Image
                      src={"/Colegios/Apemys.webp"}
                      height={250}
                      width={200}
                    />
                  </div>
                  <div class="flex flex-row mt-2 gap-2">
                    {/* <!-- Description --> */}
                    <div className="flex flex-col text-center w-full">
                      <p class="text-gray-100 text-sm font-semibold">Agremiación del Personal de Enseñanza Media y Superior</p>
                    </div>

                  </div>
                </card>
              </div>
            </div>
          </div>
          {/* <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
            <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
              <div className="h-full flex flex-col justify-center space-y-4">
                <img
                  className="w-20 h-20 mx-auto rounded-full"
                  src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp"
                  alt="user avatar"
                  height={220}
                  width={220}
                  loading="lazy"
                />
                <p className="text-gray-600 md:text-xl">
                  {" "}
                  <span className="font-serif">`&quot;`</span> Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quaerat repellat
                  perspiciatis excepturi est. Non ipsum iusto aliquam
                  consequatur repellat provident, omnis ut, sapiente voluptates
                  veritatis cum deleniti repudiandae ad doloribus.{" "}
                  <span className="font-serif">`&quot;`</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">
                    Jane Doe
                  </h6>
                  <span className="text-xs text-gray-500">
                    Product Designer
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
              <img
                className="w-20 h-20 mx-auto rounded-full"
                src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp"
                alt="user avatar"
                height={220}
                width={220}
                loading="lazy"
              />
              <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                <p className="text-gray-600">
                  {" "}
                  <span className="font-serif">`&quot;`</span> Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quaerat repellat
                  perspiciatis excepturi est. Non ipsum iusto aliquam
                  consequatur repellat provident, omnis ut, sapiente voluptates
                  veritatis cum deleniti repudiandae ad doloribus.{" "}
                  <span className="font-serif">`&quot;`</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">
                    Jane Doe
                  </h6>
                  <span className="text-xs text-gray-500">
                    Product Designer
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
              <img
                className="w-20 h-20 mx-auto rounded-full"
                src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp"
                alt="user avatar"
                height={220}
                width={220}
                loading="lazy"
              />
              <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                <p className="text-gray-600">
                  {" "}
                  <span className="font-serif">`&quot;`</span> Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quaerat repellat
                  perspiciatis excepturi est. Non ipsum iusto aliquam
                  consequatur repellat provident, omnis ut, sapiente voluptates
                  veritatis cum deleniti repudiandae ad doloribus.{" "}
                  <span className="font-serif">`&quot;`</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">
                    Jane Doe
                  </h6>
                  <span className="text-xs text-gray-500">
                    Product Designer
                  </span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Comentarios;
