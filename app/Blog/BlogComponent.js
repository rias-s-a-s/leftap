"use client"
import { Button, Card, CardBody, CardFooter, CardHeader, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { Fragment, useState } from "react";

const BlogComponent = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  return (
    <main className="flex-grow">
      <div className="relative px-8">
        <div className="max-w-screen-xl mx-auto my-12 md:mt-18 lg:mt-20 text-center">
          <h1 className="font-display text-secondary-500 text-4xl font-black tracking-wide">
            Un poco de nosotros
          </h1>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-3 p-4 gap-2 bg-[#182d57] rounded-md">
        <div>
          <Card className="mt-6 w-96 h-[92%] mx-auto">
            <CardHeader color="blue-gray" className="h-56">
              <img src="https://leftap.org/wp-content/uploads/2022/11/20221124_181314_0000.png" alt="img-blur-shadow" layout="fill" />
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
          <Card className="mt-6 w-96 mx-auto h-[92%]">
            <CardHeader color="blue-gray" className="h-56">
              <img src="https://leftap.org/wp-content/uploads/2022/07/pexels-yan-krukov-8199166-scaled-e1674319724695-874x551.jpg" alt="img-blur-shadow" layout="fill" />
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
          <Card className="mt-6 w-96 mx-auto h-[92%]">
            <CardHeader color="blue-gray" className="h-56">
              <img src="https://leftap.org/wp-content/uploads/2021/05/0e0acc_c2550764127246f8ba1f77e2900d19damv2-e1674319682725.webp" alt="img-blur-shadow" layout="fill" />
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
        </div>
        <div>
          <Card className="mt-6 w-96 mx-auto h-[92%]">
            <CardHeader color="blue-gray" className="h-56">
              <img src="https://leftap.org/wp-content/uploads/2022/08/Diseno-sin-titulo-e1674319529312-874x551.png" alt="img-blur-shadow" layout="fill" />
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
      </div>
    </main>
  );
};

export default BlogComponent;
