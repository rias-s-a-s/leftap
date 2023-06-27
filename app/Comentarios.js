import React from "react";

const Comentarios = () => {
  return (
    <>
      <div className="mt-2">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <h2 className="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">
            Estas instituciones ya están cultivando el futuro.
          </h2>
          <div class="h-screen flex bg-gray-900 items-center justify-center">
            <div class="grid grid-cols-12 gap-2 gap-y-4 max-w-6xl">

              {/* <!-- Video 1 --> */}
              <div class="col-span-12 sm:col-span-6 md:col-span-3">
                <card class="w-full flex flex-col">
                  <div class="relative">

                    {/* <!-- Image Video --> */}
                    <a href="#">
                      <img src="https://picsum.photos/seed/59/300/200" class="w-96 h-auto" />
                    </a>

                    <p class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p>
                  </div>

                  <div class="flex flex-row mt-2 gap-2">

                    {/* <!-- Profile Picture --> */}
                    <a href="#">
                      <img src="https://picsum.photos/seed/1/40/40" class="rounded-full max-h-10 max-w-10" />
                    </a>

                    {/* <!-- Description --> */}
                    <div clas="flex flex-col">
                      <a href="#">
                        <p class="text-gray-100 text-sm font-semibold">Learn CSS Box Model in 8 Minutes</p>
                      </a>
                      <a class="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> Web Dev Simplified </a>
                      <p class="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
                    </div>

                  </div>
                </card>
              </div>

              {/* <!-- Video 2 --> */}
              <div class="col-span-12 sm:col-span-6 md:col-span-3">
                <card class="w-full flex flex-col">
                  <div class="relative">

                    {/* <!-- Image Video --> */}
                    <a href="#">
                      <img src="https://picsum.photos/seed/60/300/200" class="w-96 h-auto" />
                    </a>

                    <p class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p>
                  </div>

                  <div class="flex flex-row mt-2 gap-2">

                    {/* <!-- Profile Picture --> */}
                    <a href="#">
                      <img src="https://picsum.photos/seed/4/40/40" class="rounded-full max-h-10 max-w-10" />
                    </a>

                    {/* <!-- Description --> */}
                    <div clas="flex flex-col">
                      <a href="#">
                        <p class="text-gray-100 text-sm font-semibold">Learn CSS Box Model in 8 Minutes</p>
                      </a>
                      <a class="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> Web Dev Simplified </a>
                      <p class="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
                    </div>

                  </div>
                </card>
              </div>

              {/* <!-- Video 3 --> */}
              <div class="col-span-12 sm:col-span-6 md:col-span-3">
                <card class="w-full flex flex-col">
                  <div class="relative">

                    {/* <!-- Image Video --> */}
                    <a href="#">
                      <img src="https://picsum.photos/seed/22/300/200" class="w-96 h-auto" />
                    </a>

                    <p class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p>
                  </div>

                  <div class="flex flex-row mt-2 gap-2">

                    {/* <!-- Profile Picture --> */}
                    <a href="#">
                      <img src="https://picsum.photos/seed/88/40/40" class="rounded-full max-h-10 max-w-10" />
                    </a>

                    {/* <!-- Description --> */}
                    <div clas="flex flex-col">
                      <a href="#">
                        <p class="text-gray-100 text-sm font-semibold">Learn CSS Box Model in 8 Minutes</p>
                      </a>
                      <a class="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> Web Dev Simplified </a>
                      <p class="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
                    </div>

                  </div>
                </card>
              </div>

              {/* <!-- Video 4 --> */}
              <div class="col-span-12 sm:col-span-6 md:col-span-3">
                <card class="w-full flex flex-col">
                  <div class="relative">

                    {/* <!-- Image Video --> */}
                    <a href="#">
                      <img src="https://picsum.photos/seed/90/300/200" class="w-96 h-auto" />
                    </a>

                    <p class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p>
                  </div>

                  <div class="flex flex-row mt-2 gap-2">

                    {/* <!-- Profile Picture --> */}
                    <a href="#">
                      <img src="https://picsum.photos/seed/57/40/40" class="rounded-full max-h-10 max-w-10" />
                    </a>

                    {/* <!-- Description --> */}
                    <div clas="flex flex-col">
                      <a href="#">
                        <p class="text-gray-100 text-sm font-semibold">Learn CSS Box Model in 8 Minutes</p>
                      </a>
                      <a class="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> Web Dev Simplified </a>
                      <p class="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
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
