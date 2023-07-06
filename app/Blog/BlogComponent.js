"use client"
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";

const BlogComponent = () => {
  const [reel, setReel] = useState(false)
  return (
    <main className="flex-grow">
      <div className="relative px-8">
        <div className="max-w-screen-xl mx-auto my-12 md:mt-18 lg:mt-20 text-center">
          <h1 className="font-display text-secondary-500 text-4xl font-black tracking-wide">
            {/* Un poco de nosotros */}
          </h1>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 p-4 gap-2 bg-[#182d57] rounded-md">
        <div>
          <Card className="mt-6 w-full h-[92%] mx-auto">
            <CardHeader color="blue-gray" className="h-56">
              <img src="/CardsImages/emprendedor.webp" alt="img-blur-shadow" layout="fill" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                ¡Emprendedores y pequeñas empresas!
              </Typography>
              <Typography>
                Maximice su potencial con nuestras capacidades especialmente diseñadas para ustedes.
              </Typography>
            </CardBody>
            {/* <CardFooter className="pt-0">
              <Button onClick={handleOpen}>Conoce mas</Button>
            </CardFooter> */}
          </Card>
        </div>
        <div>
          <Card className="mt-6 w-full mx-auto h-[92%]">
            <CardHeader color="blue-gray" className="h-56">
              <img src="/CardsImages/joventud.webp" alt="img-blur-shadow" layout="fill" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                ¡Atención jóvenes!
              </Typography>
              <Typography>
                Aprende a manejar tu dinero de manera inteligente con nuestras charlas-taller de educación financiera
              </Typography>
            </CardBody>
            {/* <CardFooter className="pt-0">
              <Button onClick={handleOpen}>Conoce mas</Button>
            </CardFooter> */}
          </Card>
        </div>
        <div>
          <Link href={"/Capacitaciones"}>
            <Card className="mt-6 w-full mx-auto h-[92%]">
              <CardHeader color="blue-gray" className="h-56">
                <img src="/CardsImages/habilidad.webp" alt="img-blur-shadow" layout="fill" />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  ¡Mejora tus habilidades!
                </Typography>
                <Typography>
                  Aumenta tu valor en el mercado laboral con nuestras capacitaciones
                </Typography>
              </CardBody>
              {/* <CardFooter className="pt-0">
              <Button onClick={handleOpen}>Conoce mas</Button>
            </CardFooter> */}
            </Card>
          </Link>
        </div>
        <div>
          <Card className="mt-6 w-full mx-auto h-[92%]">
            <CardHeader color="blue-gray" className="h-56">
              <img src="/CardsImages/mejoraVida.webp" alt="img-blur-shadow" layout="fill" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                ¡Transforma tu vida!
              </Typography>
              <Typography>
                Con nuestras capacitaciones de desarrollo personal
              </Typography>
            </CardBody>
            {/* <CardFooter className="pt-0">
              <Button onClick={handleOpen}>Conoce mas</Button>
            </CardFooter> */}
          </Card>
        </div>
        <div>
          <Card className="mt-6 w-full mx-auto h-[92%] cursor-pointer" onClick={() => {
            setReel(!reel)
          }}>
            <CardHeader color="blue-gray" className="h-56">
              <img src="/CardsImages/Charla.webp" alt="img-blur-shadow" layout="fill" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Charlas Institucionales
              </Typography>
              <Typography>
                Charlas Institucionales: aprende, conecta y crece en el mundo de las finanzas.
              </Typography>
            </CardBody>
            {/* <CardFooter className="pt-0">
              <Button onClick={handleOpen}>Conoce mas</Button>
            </CardFooter> */}
          </Card>
        </div>
        <div>
          <Card className="mt-6 w-full mx-auto h-[92%]" >
            <CardHeader color="blue-gray" className="h-56">
              <img src="/CardsImages/VirtualPresencial.webp" alt="img-blur-shadow" layout="fill" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                conferencias (Virtual/Presencial)
              </Typography>
              <Typography>
                Divulgar la educación financiera entre los jóvenes en el sistema educativo es crucial para empoderarlos con habilidades financieras y prepararlos para un futuro económico sólido.
              </Typography>
            </CardBody>
            {/* <CardFooter className="pt-0">
              <Button onClick={handleOpen}>Conoce mas</Button>
            </CardFooter> */}
          </Card>
        </div>
      </div>
      {reel && <>
        {/* <iframe src="https://www.instagram.com/reel/Cs0yW8dJQ7P/?utm_source=ig_web_button_share_sheet&igshid=MzRlODBiNWFlZA==" /> */}
      </>}
    </main>
  );
};

export default BlogComponent;
