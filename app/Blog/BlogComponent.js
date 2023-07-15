"use client"
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const BlogComponent = () => {
  const [reel, setReel] = useState(false)
  return (
    <main className="flex-grow">

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 sm:gap-2 lg:grid-cols-3 mt-4 px-4 py-8 md:gap-8 bg-[#182d57] rounded-md">
        <div>
          <Card className="mt-6 w-full  h-[92%] mx-auto hover:-translate-y-2 hover:shadow-lg hover:shadow-green-300">
            <CardHeader color="blue-gray" className="h-56">
              <img src="/CardsImages/emprendedor.webp" className="lg:h-[225px] h-[214px] md:h-[220px] w-full" alt="img-blur-shadow" layout="fill" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                ¡Emprendedores y pequeñas empresas!
              </Typography>
              <Typography>
                Maximice su potencial con nuestras capacidades especialmente diseñadas para ustedes.
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="mt-6 w-full mx-auto h-[92%] hover:-translate-y-2 hover:shadow-lg hover:shadow-green-300">
            <CardHeader color="blue-gray" className="h-56">
              <img src="/CardsImages/joventud.webp" className="lg:h-[225px] h-[214px] md:h-[224px] w-full" alt="img-blur-shadow" layout="fill" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                ¡Atención jóvenes!
              </Typography>
              <Typography>
                Aprende a manejar tu dinero de manera inteligente con nuestras charlas-taller de educación financiera
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div>
          <Link href={"/Capacitaciones"}>
            <Card className="mt-6 w-full mx-auto h-[92%] hover:-translate-y-2 hover:shadow-lg hover:shadow-green-300">
              <CardHeader color="blue-gray" className="h-56">
                <img src="/CardsImages/habilidad.webp" className="lg:h-[225px] h-[217px] md:h-[223px] w-full" alt="img-blur-shadow" layout="fill" />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  ¡Mejora tus habilidades!
                </Typography>
                <Typography>
                  Aumenta tu valor en el mercado laboral con nuestras capacitaciones
                </Typography>
              </CardBody>
            </Card>
          </Link>
        </div>
        <div>
          <Card className="mt-6 w-full mx-auto h-[92%] hover:-translate-y-2 hover:shadow-lg hover:shadow-green-300">
            <CardHeader color="blue-gray" className="h-56">
              <img src="/CardsImages/mejoraVida.webp" className="lg:h-[225px] h-[220px] w-full" alt="img-blur-shadow" layout="fill" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                ¡Transforma tu vida!
              </Typography>
              <Typography>
                Con nuestras capacitaciones de desarrollo personal
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="mt-6 w-full mx-auto h-[92%] cursor-pointer hover:-translate-y-2 hover:shadow-lg hover:shadow-green-300" onClick={() => {
            setReel(!reel)
          }}>
            <CardHeader color="blue-gray" className="h-56">
              <Image
                src={"/CardsImages/Charlas.webp"}
                width={600}
                height={600}
                className="lg:h-[225px] h-[214px] md:h-[225px] w-full"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Charlas Institucionales
              </Typography>
              <Typography>
                Divulgar la educación financiera entre los jóvenes en el sistema educativo es crucial para empoderarlos con habilidades financieras y prepararlos para un futuro económico sólido.
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="mt-6 w-full mx-auto h-[92%] hover:-translate-y-2 hover:shadow-lg hover:shadow-green-300" >
            <CardHeader color="blue-gray" className="h-56">
              <img src="/CardsImages/VirtualPresencial.webp" className="md:h-auto h-[214px] w-full" alt="img-blur-shadow" layout="fill" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                conferencias (Virtual/Presencial)
              </Typography>
              <Typography>
                ¡Descubre el poder de la educación financiera, muestra a tus estudiantes una propuesta diferente y actualizada! Comunícate con nosotros para brindarles charlas y conferencias sobre educación financiera en tu institución educativa y brinda a tus estudiantes las herramientas necesarias para un futuro financiero exitoso.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
      {reel && <>
        <div className='w-full fixed top-0 z-50 h-screen bg-black/20 text-center'>
          <div className='text-red-700 w-full mx-auto font-bold font-[oswald] text-6xl drop-shadow-lg italic tracking-[7px] mt-14 fixed justify-center z-50 flex'>
            NUESTRAS CHARLAS
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 ml-6 cursor-pointer" onClick={() => {
              setReel(!reel)
            }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div className='bg-white w-3/4 z-50 mx-auto mt-32 h-[74%] text-center p-2 rounded-md '>
            <Carousel showArrows={true} autoPlay showThumbs={false} showStatus={false}>
              <div>
                <img
                  src="/Presentaciones/Presentacion1.webp"
                  alt="image 1"
                  className="md:h-auto h-[214px]"
                />
                <p className="legend">Nuestras charlas interactivas y conferencias inspiradoras están diseñadas específicamente para jóvenes, abordando temas clave como el manejo del dinero, sus objetivos de vida, orientación vocacional, la planificación financiera, el ahorro, la inversión y la toma de decisiones inteligentes. Con ejemplos prácticos y consejos prácticos, nuestros expertos capacitarán a tus estudiantes para tomar el control de su futuro económico.</p>
              </div>
              <div>
                <img
                  src="/Presentaciones/Presentacion2.webp"
                  alt="image 2"
                  className="md:h-auto h-[214px]"
                />
                <p className="legend">No dejes que tus estudiantes se enfrenten a los desafíos financieros sin la preparación adecuada, ayudalos guíalos con la información que necesitan saber hoy para aplicarla en toda su vida. Nuestro equipo de profesionales apasionados y con experiencia está listo para equipar a tus jóvenes con habilidades financieras fundamentales que los acompañarán a lo largo de su desarrollo.</p>
              </div>
              <div>
                <img
                  src="/Presentaciones/Presentacion3.webp"
                  alt="image 3"
                  className="md:h-auto h-[214px]"
                />
                <p className="legend">¡Reserva una charla o conferencia hoy mismo, conviértete en un pionero en aplicar esta información en la educación formal y ayuda a tus estudiantes a construir una base sólida para lograr sus metas financieras! Contáctanos ahora para más información y disponibilidad.</p>
              </div>
            </Carousel>
          </div>
        </div>
      </>}
    </main>
  );
};

export default BlogComponent;
