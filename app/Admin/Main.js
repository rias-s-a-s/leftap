"use client";
import Login from "./Login";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "./Header";
import Link from "next/link";

import { FaBloggerB } from "react-icons/fa";

const Main = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;

  if (!user) return <Login />;

  return (
    <div className="bg-gray-100 h-screen ">
      <Header user={user} />
      <section>
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white  text-black ">
          <div className="fixed flex flex-col top-[47px] left-0 w-14 hover:w-64 md:w-64 bg-[#22429d]  h-full text-white transition-all duration-300 border-none z-10 sidebar">
            <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
              <ul className="flex flex-col py-4 space-y-1">
                <li className="px-5 hidden md:block">
                  <div className="flex flex-row items-center h-8">
                    <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                      Main
                    </div>
                  </div>
                </li>

                <li>
                  <Link
                    href="/Admin/Blog"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500  pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <FaBloggerB className="w-5 h-5 text-white" />
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Blog
                    </span>
                  </Link>
                </li>
              </ul>
              <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
                Copyright @{new Date().getFullYear()} -{" "}
                {new Date().getFullYear() + 1}
              </p>
            </div>
          </div>
          {/* ./Sidebar */}
          <div className="h-full ml-14  mb-6 md:ml-64 p-4">{children}</div>
        </div>
      </section>{" "}
    </div>
  );
};

export default Main;
