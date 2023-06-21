"use client";
import BlogComponent from "./Blog/BlogComponent";
import Comentarios from "./Comentarios";
import { Button, Carousel, Typography } from "@material-tailwind/react";
import Image from "next/image";

const Home = () => {
  return (
    <>
      {/* slider */}
      <Carousel className="rounded-xl h-4/6 lg:h-2/5">
        <div>
          {/* <Image
            src={"/PortadaLEFTAP.png"}
            width={1350}
            height={1350}
          /> */}
          <img src="/PortadaLEFTAP.png" />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h3"
                color="white"
                className="mb-4 text-md md:text-3xl lg:text-4xl"
              >
                ¿Te resulta difícil administrar tu dinero y sientes que saboteas tus propios proyectos?
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 text-sm lg:text-xl opacity-80 text-justify"
              >
                Aprende a manejar tu dinero y desarrollarte personalmente en nuestros cursos en línea. Adquiere habilidades financieras y alcanza tus metas mientras experimentas crecimiento personal. ¡Inscríbete hoy y transforma tu vida financiera y personal!
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg" color="white">
                  <a href="/Nosotros">Conocenos</a>
                </Button>
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
