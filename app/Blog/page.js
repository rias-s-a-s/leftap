import React from "react";

const Blog = () => {
  const publicaciones = {
    imagen: "https://leftap.org/wp-content/uploads/2023/02/MOTIVACION-TIEMPO-1080x675.png",
    texto: <>
      <p className="text-4xl font-bold p-2">Con el desarrollo personal puedes superar los obstáculos que no te permiten crecer en tu vida. Te ayuda a alcanzar tus metas y descubrir tu verdadero potencial, aumentar tu autoestima, confianza en uno mismo y reduce tus niveles de ansiedad y estrés.</p>
      <p className="text-gray-700 p-4"><b>El desarrollo personal es esencial para alcanzar una vida plena y satisfactoria.</b> Te permite descubrir tu verdadero potencial y convertirte en la mejor versión de ti mismo, lo que te permite vivir una vida más significativa y feliz.</p>
    </>,
    por: "leftap",
    fecha: "Mar 10, 2023"
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {/*First card*/}
      <div className="md:p-8 p-2 bg-white" >
        {/*Banner image*/}
        <img
          className="rounded-lg w-full"
          src="https://leftap.org/wp-content/uploads/2023/02/MOTIVACION-TIEMPO-1080x675.png
    "
          alt="image 1"
        />
        {/*Title*/}
        <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize">
          Desarrollo personal ¿Qué es y para que sirve?
        </h1>
        {/*Description*/}
        <div className="max-w-full">
          <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
            Con el desarrollo personal puedes superar los obstáculos que no te permiten crecer en tu vida. Te ayuda a alcanzar tus metas y descubrir tu verdadero potencial, aumentar tu autoestima, confianza en uno mismo y reduce tus niveles de ansiedad y estrés. El desarrollo...
          </p>
        </div>
        <div className="flex items-center space-x-2 mt-5">
          {/*Author's profile photo*/}
          <img
            className="w-10 h-10 object-cover object-top rounded-full"
            src="/marina.jpg"
            alt="random user"
          />
          <div>
            {/*Author name*/}
            <p className="text-gray-900 font-semibold">Leftap</p>
            <p className="text-gray-500 font-semibold text-sm">
              Mar 10, 2023
            </p>
          </div>
        </div>
      </div>
      {/*End of first card*/}
      {/*Second Tag*/}
      <div className="p-8 bg-white">
        {/*Banner image*/}
        <img
          className="rounded-lg w-full"
          src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80
    "
          alt="image 3"
        />
        {/*Tag*/}
        <p className="text-indigo-500 font-semibold text-base mt-2">
          Startup stories
        </p>
        {/*Title*/}
        <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
          The rise of facebook
        </h1>
        {/*Description*/}
        <div className="max-w-full">
          <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
            dignissimos repudiandae. Consequuntur minus ipsam repudiandae soluta
            qui, recusandae obcaecati molestias commodi magnam nisi illo illum
            quaerat aut maiores! Esse, aperiam!
          </p>
        </div>
        <div className="flex items-center space-x-2 mt-20">
          {/*Author's profile photo*/}
          <img
            className="w-10 h-10 object-cover object-center rounded-full"
            src="https://randomuser.me/api/portraits/men/54.jpg"
            alt="random user"
          />
          <div>
            {/*Author name*/}
            <p className="text-gray-900 font-semibold">Lugano Shabani</p>
            <p className="text-gray-500 font-semibold text-sm">
              Feb 24,2021 · 6 min read
            </p>
          </div>
        </div>
      </div>
      {/*End of first card*/}
      {/*Third  card*/}
      <div className="p-8 bg-white">
        {/*Banner image*/}
        <img
          className="h-80 rounded-lg w-full object-cover object-center"
          src="https://images.unsplash.com/photo-1580867532901-7e3707f178ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=732&q=80"
          alt="image 5"
        />
        {/*Tag*/}
        <p className="text-indigo-500 font-semibold text-base mt-2">Culture</p>
        {/*Title*/}
        <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
          the life of masaai people from tanzania
        </h1>
        {/*Description*/}
        <div className="max-w-full">
          <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            officiis aspernatur, modi nobis et neque quod asperiores laboriosam
            ab. Magni fugit necessitatibus ducimus placeat assumenda perferendis
            laborum quae aperiam minus.
          </p>
        </div>
        <div className="flex items-center space-x-2 mt-20">
          {/*Author's profile photo*/}
          <img
            className="w-10 h-10 object-cover object-center rounded-full"
            src="https://randomuser.me/api/portraits/men/54.jpg"
            alt="random user"
          />
          <div>
            {/*Author name*/}
            <p className="text-gray-900 font-semibold">Lugano Shabani</p>
            <p className="text-gray-500 font-semibold text-sm">
              Feb 24,2021 · 6 min read
            </p>
          </div>
        </div>
      </div>
      {/*End of first card*/}
    </div>
  );
};

export default Blog;
