import Link from "next/link";
import React from "react";

const Servicios = () => {
  return (

    <div className="h-full bg-gray-300">

      {/* // INFORMACION SERVICIOS */}
      <div className="min-h-screen mb-8 flex justify-center items-center">
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
          <div className="pt-24 flex flex-col gap-y-4 md:flex-row items-center">
            {/* Emprendedor X */}
            <div className="w-72 md:w-60 lg:w-80 xl:w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
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
            {/* Capacitaciones y Fomración Profesional */}
            <div className="w-72 md:w-60 lg:w-72 xl:w-80 p-8 bg-[#182d57] text-center rounded-3xl text-white border-4 shadow-xl border-white transform md:scale-125">
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
            {/* Herramientas para el Emprendedor */}
            <div className="w-72 md:w-60 lg:w-72 xl:w-96 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl">
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
      {/* // PREGUNTAS FRECUENTES */}
      <div class="w-full mx-auto p-5 mt-16 min-h-sceen">
        <div class="flex flex-col items-center">
          <h2 class="font-bold text-5xl mt-5 tracking-tight">
            Preguntas Frecuentes
          </h2>
        </div>
        <div class="grid lg:grid-cols-2 divide-y gap-4 divide-neutral-200 w-full mx-auto mt-8">
          <div class="py-5 bg-white rounded-xl px-4">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Que es <b>LEFTAP</b>?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Leftap es un centro de formación y consultoría para emprendedores, dedicada a promover y difundir la educación financiera principalmente en los jóvenes
              </p>
            </details>
          </div>
          <div class="py-5 bg-white rounded-xl px-4 ">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Cuáles son los objetivos de Leftap?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Nuestro objetivo principal es ayudar a las personas a alcanzar sus metas personales y financieras, brindándoles las herramientas necesarias para el crecimiento personal y el logro de la independencia económica.
              </p>
            </details>
          </div>
          <div class="py-5 bg-white rounded-xl px-4">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> ¿Cuál es la misión de Leftap?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Nuestra misión es sembrar semillas para las futuras generaciones, fomentar y promover la educación financiera  a través de la difusión de información en las escuelas y centros educativos, promover el desarrollo personal y el emprendedorismo.
              </p>
            </details>
          </div>
          <div class="py-5 bg-white rounded-xl px-4">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Que puedo encontrar en Leftap.org?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Puedes encontrar información sobre emprendimiento, desarrollo personal y educación financiera, en la sección de blog encontrarás información más detallada de cada una de ellas.
              </p>
            </details>
          </div>
          <div class="py-5 bg-white rounded-xl px-4">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Cómo puedo estar al tanto de las últimas publicaciones de Leftap?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Puedes unirte a nuestro grupo de WhatsApp informativo para recibir actualizaciones e información que te ayudarán en tu crecimiento personal. También te recomendamos seguirnos en nuestras redes sociales, donde compartimos nuestras publicaciones y promovemos la discusión.
              </p>
            </details>
          </div>
          <div class="py-5 bg-white rounded-xl px-4">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Cómo puedo contactar al equipo de Leftap?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Puedes utilizar el formulario de contacto en nuestro sitio web para enviarnos un mensaje, en nuestra web o bien en las redes sociales, en nuestro perfil  puedes encontrar al botón de WhatsApp. Nos esforzamos por responder a todas las consultas y comentarios en el menor tiempo posible.
              </p>
            </details>
          </div>
          <div class="py-5 bg-white rounded-xl px-4">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Qué tipo de temas cubre Leftap?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                En Leftap promovemos temas de educación financiera , incluyendo finanzas personales, orientación vocacional, planeación de objetivos de vida, capacitación a docentes, charlas y conferencias y más. Nuestro objetivo es proporcionar información objetiva y perspectivas diversas sobre estos temas.
              </p>
            </details>
          </div>
          <div class="py-5 bg-white rounded-xl px-4">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Leftap ofrece recursos educativos o herramientas para la participación ciudadana?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Sí, aparte de los artículos informativos en nuestro blog, también proporcionamos recursos educativos como entrenamientos gratuitos, guías prácticas y herramientas para ayudar a las personas a adquirir conocimientos básicos de educación financiera, además a través de charlas presenciales fomentamos la educación financiera y la importancia de tener un objetivo de vida.
              </p>
            </details>
          </div>
          <div class="py-5 bg-white rounded-xl px-4">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Realizan conferencias internacionales o charlas presenciales?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Si, realizamos charlas y conferencias en establecimientos educativos e instituciones que deseen impartir una propuesta diferente, la educación financiera debe ser divulgada, puedes contactarme por el número de WhatsApp y nuestro equipo te orientará sobre más detalles y cotización.
              </p>
            </details>
          </div>
          <div class="py-5 bg-white rounded-xl px-4">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Cómo puedo apoyar financieramente a Leftap?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Si deseas apoyar financieramente nuestro trabajo, puedes realizar una donación, a través de nuestro sitio web encontrarás un número de WhatsApp donde podrás estar en contacto con nuestro equipo. Cada contribución es valiosa y nos ayuda a mantener y mejorar los servicios que ofrecemos.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Servicios;
