import Link from "next/link";
import React from "react";

const Servicios = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-300">
      <div className>
        <div className="text-center font-semibold">
          <h1 className="text-5xl">
            <span className="text-blue-700 tracking-wide">Nuestros </span>
            <span>Servicios</span>
          </h1>
          <p className="p-2">
            <span className="text-lg font-semibold">No hay mejor inversión que la que uno hace por uno mismo.<br />
              El educarte te hace crecer y expandir tu conocimiento y por ende tus  ingresos</span>
          </p>
        </div>
        <div className="pt-24 flex flex-row">
          {/* Basic Card */}
          <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
            <h1 className="text-black font-semibold text-2xl">Emprendedoor X</h1>
            <p className="pt-2 tracking-wide">
              <span className="text-gray-400 align-top">$ </span>
              <span className="text-3xl font-semibold">13.20</span>
            </p>
            <hr className="mt-4 border-1" />
            <div className="pt-8">
              <div className="text-left flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                </svg>
                <span className="align-middle font-thin text-gray-800">
                  Más de 20 cursos digitales en una sola plataforma
                </span>
              </div>
              <div className="text-left flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                </svg>
                <span className="align-middle font-thin text-gray-800">
                  Suscribiéndote anualmente, tendrás la flexibilidad de aprender a tu propio ritmo
                </span>
              </div>
              <div className="text-left flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                </svg>
                <span className="align-middle font-thin text-gray-800">
                  Todos los cursos gratis con una mínima suscripción
                </span>
              </div>
              <a href="https://hotmart.com/es/marketplace/productos/suscripcion-emprendedoorx/N72655897L?ref=X75779763C" rel="noreferrer" target="_blank">
                <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                  <span className="font-bold">Comprar</span>
                </p>
              </a>
            </div>
          </div>
          {/* StartUp Card */}
          <div className="w-80 p-8 bg-[#182d57] text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">
            <h1 className="text-white font-semibold text-2xl">Capacitaciones y Formación profesional</h1>
            <hr className="mt-4 border-1 border-gray-600" />
            <div className="pt-8">
              <div className="text-left flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                </svg>
                <span className="align-middle text-sm font-thin text-white">
                  Todos los cursos gratis con una mínima suscripción
                </span>
              </div>
              <div className="text-left flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                </svg>
                <span className="align-middle text-sm font-thin text-white">
                  Herramientas que puedes utilizar para hacer crecer tu negocio
                </span>
              </div>
              <div className="text-left flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                </svg>
                <span className="align-middle text-sm font-thin text-white">
                  Curso de desarrollo personal y formación profesional
                </span>
              </div>
              <div className="text-left flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                </svg>
                <span className="align-middle text-sm font-thin text-white">
                  Tendrás la oportunidad de estudiar y crear tu proio emprendimiento
                </span>
              </div>
              <Link
                href={"/Capacitaciones"}

              >
                <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                  <span className="font-bold">Ver Información</span>
                </p>
              </Link>
            </div>
            <div className="absolute top-4 right-4">
              <p className="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">
                Popular
              </p>
            </div>
          </div>
          {/* Enterprise Card */}
          <div className="w-96 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl">
            <h1 className="text-black font-semibold text-2xl">Herramientas para el emprendedor</h1>
            <hr className="mt-4 border-1" />
            <div className="pt-8">
              <div className="text-left flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                </svg>
                <span className="align-middle font-thin text-gray-800">
                  Todo lo que un emprendedor necesita para su empresa
                </span>
              </div>
              <div className="text-left flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                </svg>
                <span className="align-middle font-thin text-gray-800">
                  Sotfware de sistemas operativos, administrativos y contables
                </span>
              </div>
              <div className="text-left flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                </svg>
                <span className="align-middle font-thin text-gray-800">
                  Programas y libros para el crecimiento de tu empresa
                </span>
              </div>
              <Link href={"/Herramientas"}>
                <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                  <span className="font-bold">Ver Información</span>
                </p>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
