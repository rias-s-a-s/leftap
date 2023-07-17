import Link from "next/link";
import { BsFacebook, BsInstagram, BsTiktok } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="flex items-end w-full bg-gray-200">
      <footer className="w-full text-gray-700 bg-gray-200 body-font">
        <div className="container grid md:grid-cols-3 gap-2 px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="w-full px-4">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
              Informes
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <div className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                  </svg>
                  <Link href={"tel:+5493815210268"} className="text-[#182d57] cursor-pointer hover:text-[#3760b1] md:text-sm">
                    +54 9 381 521-0268
                  </Link>
                </div>
              </li>
              <li className="mt-3">
                <div className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                  </svg>
                  <Link href="mailto:" className="text-[#182d57] cursor-pointer hover:text-[#3760b1] md:text-sm">
                    correo@gmail.com
                  </Link>
                </div>
              </li>
            </nav>
          </div>
          <div className="w-full px-4">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
              Dirección
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <div className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <Link href={"#"} className="text-[#182d57] cursor-pointer hover:text-[#3760b1] md:text-sm">
                    Contact Support
                  </Link>
                </div>
              </li>
              <li className="mt-3">
                <a className="text-[#182d57] text-sm cursor-pointer hover:text-[#3760b1] md:text-xs">
                  Ver en google maps
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
              Redes
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <div className="flex space-x-2 items-center">
                  <BsFacebook className="h-6 w-6" fill="blue" />
                  <BsInstagram className="h-6 w-6" fill="#e1306c" />
                  <BsTiktok className="h-6 w-6" fill="black" />
                </div>
              </li>
            </nav>
          </div>
        </div>
        <div className="bg-gray-300">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-gray-700 capitalize xl:text-center">
              © 2024 All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
