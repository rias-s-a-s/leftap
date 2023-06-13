import React from "react";

const Blog = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {/*First card*/}
      <div className="md:p-8 p-2 bg-white">
        {/*Banner image*/}
        <img
          className="rounded-lg w-full"
          src="https://images.unsplash.com/photo-1603349206295-dde20617cb6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80
    "
          alt="image 1"
        />
        {/*Tag*/}
        <p className="text-indigo-500 font-semibold text-base mt-2">Science</p>
        {/*Title*/}
        <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
          the life of albert einstein
        </h1>
        {/*Description*/}
        <div className="max-w-full">
          <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            vel soluta dolore id nesciunt eum nam ipsam, eveniet cupiditate sint
            veritatis harum odit. Iste dignissimos, ad provident nulla
            voluptatum ut.
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
