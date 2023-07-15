"use client";
import { Carousel } from "react-responsive-carousel";
import BlogComponent from "./Blog/BlogComponent";
import Comentarios from "./Comentarios";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      {/* slider */}
      <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
        <div className="relative w-full max-h-[480px] ">
          <img
            src={`/Slider/PortadaLEFTAP.webp`}
            className="max-h-[700px] md:max-h-[605px] md:h-auto h-[200px] w-full object-cover overflow-hidden  "
            alt="slider 1"
          />

          <div className=" absolute top-0 left-0 bg-black/50 w-full h-full text-white">
            <div className=" flex justify-start items-center max-w-[1000px] md:max-w-[883px] h-full md:pl-20">
              <div className="flex flex-col justify-start">
                <Typography
                  variant="h3"
                  color="white"
                  className="mb-4 md:w-2/3 text-sm sm:text-xl lg:text-3xl"
                >
                  ¿Te resulta difícil administrar tu dinero y sientes que saboteas tus propios proyectos?
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-4 w-2/3 hidden md:block text-md sm:text-md lg:text-xl font-bold text-justify"
                >
                  Aprende a manejar tu dinero y desarrollarte personalmente en nuestros cursos en línea. Adquiere habilidades financieras y alcanza tus metas mientras experimentas crecimiento personal. ¡Inscríbete hoy y transforma tu vida financiera y personal!
                </Typography>
                <div className="hidden md:flex gap-2">
                  <Button size="lg" color="white">
                    <Link href="/Nosotros">Conocenos</Link>
                  </Button>
                </div>
                <div className="flex md:hidden justify-center gap-2">
                  <Button size="sm" color="white">
                    <Link href="/Nosotros">Conocenos</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>

      {/* blog  */}
      <BlogComponent />

      <Comentarios />

    </>
  );
};

export default Home;
