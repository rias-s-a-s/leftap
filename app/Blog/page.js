"use client";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Link from "next/link";

const Blog = () => {
  const [Blog, setBlog] = useState([]);

  console.log("Blog", Blog);
  useEffect(() => {
    onSnapshot(
      collection(db, `Blog`),
      // orderBy("email", "asc"),
      (snapshot) => {
        setBlog(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
    );
  }, []);
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 ">
        <img
          src="/BannerBlog.webp"
          alt="banner"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl  bg-black/80"
          aria-hidden="true"
        >
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-blue-900 to-[#1479dd] opacity-20" />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu  bg-black/80"
          aria-hidden="true"
        >
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-blue-900 to-[#1479dd] opacity-20" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 shadow-lg backdrop-blur-sm">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Un espacio para <br /> Curiosos y Soñadores{" "}
            </h2>
            {/* <p className="mt-6 text-lg leading-8 text-gray-300">
              Bienvenido a nuestra biblioteca virtual de blogs. Aquí, cada
              entrada es un mundo en sí mismo, esperando ser descubierto por ti.
            </p> */}
          </div>
        </div>
      </div>

      {/* blog */}

      <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3  ">
        {Blog?.map((blog) => (
          <Link
            href={`/Blog/${blog.id}`}
            key={blog.id}
            className="flex flex-col h-full max-w-lg mx-auto cursor-pointer hover:opacity-80"
          >
            <div className="flex flex-col bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 h-full">
              <img
                className="rounded-t-lg"
                src={blog?.Imagenes[0] || ""}
                alt="imageBlog"
              />

              <div className="p-12">
                <div>
                  <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                    {blog?.Titulo}
                  </h5>
                </div>
                <div
                  className="quill-content line-clamp-4 text-justify"
                  dangerouslySetInnerHTML={{ __html: blog?.Blog }}
                />

                <button className=" mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                  Leer más{" "}
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
