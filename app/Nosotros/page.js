"use client"
import React, { useState } from "react";
import ModalInfo from "./ModalInfo";
import Image from "next/image";
import { Button, ButtonGroup } from "@material-tailwind/react";

const Nosotros = () => {
  const [Abrir, setOpen] = useState(false)
  const [sobreMi, setMi] = useState(false)
  const [yo, setYo] = useState(false)
  const [preparacion, setPre] = useState(false)
  const [certificados, setCer] = useState(false)
  const [draw, setDraw] = useState({
    ayuda: false,
    hacemos: false,
    encuentra: false
  })
  const handleClick = (seleccionado) => {
    alert(seleccionado)
    setDraw({
      ayuda: seleccionado == 'ayuda' ? true : false,
      hacemos: seleccionado == 'hacemos' ? true : false,
      encuentra: seleccionado == 'encuentra' ? true : false
    });
  };
  const handleClose = () => {
    setDraw({
      ayuda: false,
      hacemos: false,
      encuentra: false
    });
  };
  return <>
    <div className="w-full container mx-auto text-center p-4">
      <div>
        <div className='text-4xl font-bold'>Sobre Nosotros</div>
        <div className="p-4 font-[cursive]">
          <p className="text-xl text-justify p-2">¿Quién <b>quiere</b> ser <b>millonario</b>? Esta pregunta retumba en la mente de muchas personas. ¿Cómo lo logramos y como lo mantenemos por el resto de nuestras vidas? Es lo que me llevó a investigar, estudiar, aplicar en mi vida lo aprendido y divulgar mi experiencia.</p>
          <p className="text-xl text-justify p-2">¿Qué es la <b>Libertad Financiera</b>? Es ser el dueño del bien más preciado, el Tiempo. La libertad de tu tiempo y de tus finanzas es lo que hace la combinación perfecta de como volverte millonario.</p>
        </div>
        <button className="bg-blue-500 w-3/12 font-bold text-white rounded-md mx-auto p-4 text-xl" onClick={(e) => {
          e.preventDefault();
          setOpen(!Abrir)
        }}>
          Leer Mas
        </button>
      </div>
      <div className="w-full text-center p-4 bg-[#182d57] mt-2 rounded-md">
        <div className="text-4xl font-bold text-white">Mi Histora, Mi Pasado y Mi Presente</div>
        <div className="grid md:grid-cols-3 mb-4">
          <div className="mx-auto">
            <Image
              className="rounded-xl border-2 border-white"
              src={"/Marina2.jpg"}
              width={150}
              height={150}
            />

          </div>
          <div className="p-4 font-[cursive] text-white text-xl col-span-2 text-left">
            <p className="p-2">Hola, mi nombre es Mirta López, emprendedora, profesora de Economía y coach integral en PNL (Programación Neuro Lingüística).</p>
            <p className="p-2">He creado este espacio para brindar apoyo y acompañamiento a cualquier persona y emprendedor que desee crecer personal y financieramente con ayuda de la educación financiera.</p>
          </div>
        </div>
        <div className="flex justify-center">
          <ButtonGroup>
            <Button className="text-black bg-white" onClick={(e) => {
              e.preventDefault();
              setMi(!sobreMi)
            }}>
              Mas sobre mi
            </Button>
            <Button className="text-black bg-white" onClick={(e) => {
              e.preventDefault();
              setYo(!yo)
            }}>
              Simplemente Yo
            </Button>
            <Button className="text-black bg-white" onClick={(e) => {
              e.preventDefault();
              setPre(!preparacion)
            }}>
              Mi Preparación
            </Button>
            <Button className="text-black bg-white" onClick={(e) => {
              e.preventDefault();
              setCer(!certificados)
            }}>
              Certificados y Especialización
            </Button>
          </ButtonGroup>
        </div>
      </div>

    </div>
    {yo && <ModalInfo titulo={"Simplemente Yo"} setOpen={setYo} Open={yo} info={<>
      <p className="p-2">Soy creativa, proactiva, innovadora y me reinvento continuamente, me gusta el diseño, me encanta cocinar, la tecnología y disfruto mi tiempo con mi familia, soy una aprendiz constante con el objetivo de divulgar lo que aprendo para que otros mejoren su calidad de vida al igual que yo.  </p>
    </>} />}
    {preparacion && <ModalInfo titulo={"Mi Preparación"} setOpen={setPre} Open={preparacion} info={<>
      <p className="p-2">Soy Profesora de Economía en una escuela secundaria en Tucumán, Argentina, además soy empresaria y coach integral en PNL. Me he preparado para el mundo competitivo del emprendimiento de manera particular, ya que en la educación formal no nos educan para tal fin. Por ese motivo es que estoy promoviendo que la educación financiera es la base de todo crecimiento personal y financiero de la sociedad.</p>
      <p className="p-2">Nos educaron para ser empleados, ahora debemos educarnos para ser empresarios. Te acompaño en tu proceso de transformación para que sea más rápido y exitoso.</p>
    </>} />}
    {certificados && <ModalInfo titulo={"Certificados y Especialización"} setOpen={setCer} Open={certificados} info={<>
      <p className="p-2">Me he capacitado con Mauricio Benoist, Jurgen Klaric y Carlos Muñoz, para brindarte todo el conocimiento más actualizado del momento en el área de coaching y emprendimientos, además mantengo una capacitación continua con Alex Berezowsky en el área de emprendimientos digitales.</p>
      <p className="p-2">La capacitación continua es la base de todo éxito, para crecer debes transformarte interiormente y veras los resultados externamente.</p>
    </>} />}
    {sobreMi && <ModalInfo titulo={"Mi Histora, Mi Pasado y Mi Presente"} setOpen={setMi} Open={sobreMi} info={<>
      <p className="p-2">He creado este espacio para brindar apoyo y acompañamiento a cualquier persona y emprendedor que desee crecer personal y financieramente con ayuda de la educación financiera.</p>
      <p className="p-2">Creo firmemente que la educación financiera te abre puertas, ya que si conoces el correcto manejo del dinero, si modificas tus patrones y creencias limitantes sobre el mismo, vas poder evolucionar y pasar al siguiente nivel.</p>
      <p className="p-2">Debemos cambiar nuestro chip interior y educar a nuestros jóvenes para transformar y crecer como sociedad.</p>
      <p className="p-2">Creo en que la base de todo crecimiento de una sociedad es la educación financiera, el emprendedorismo y el desarrollo personal, aprender a conocernos y modificar nuestros patrones limitantes hará que sembremos semillas para un cambio de generaciones.</p>
      <p className="p-2">Nos educaron para ser empleados, ahora debemos educarnos para ser empresarios y personas de bien.</p>
      <p className="p-2">El ser empleado te brinda una sensación de seguridad, el ser emprendedor, en cambio, te brinda libertad. Pero para dejar de ser autoempleado dentro de tu emprendimiento y pasar a ser empresario, debes capacitarte y crecer.</p>
      {/* <p className="p-2"></p> */}
    </>} />}
    {Abrir && <ModalInfo titulo={"Sobre Nosotros"} Open={Abrir} setOpen={setOpen} info={<>
      <p className="p-2"><b>LEFTAP</b> es una empresa digital, destinada a <b>ayudar, guiar y orientar</b> a cualquier persona que aspire crecer y buscar su libertad financiera, enfocándonos en el emprendedorismo y la educación financiera como base de crecimiento.
      </p>

      <p className="p-2"><b>LEFTAP</b> es un espacio para acompañar y ayudar a crecer personal y financieramente a los jóvenes y emprendedores a través de educación financiera.</p>

      <p className="p-2">Somos el engranaje que te falta para poder avanzar, dejar de ser autoempleado y caminar hacia tu libertad financiera.</p>

      <p className="p-2"><b>Nuestro propósito</b> es que logres las metas de tu emprendimiento y de tu vida, que obtengas la seguridad para poder pasar al siguiente nivel, haciendo lo que más te gusta, disfrutando el camino y ganando dinero con ello. Te brindamos apoyo y acompañamiento continuo en el proceso.</p>

      <p className="p-2">Con charlas gratuitas en escuelas secundarias <b>buscamos sembrar semillas para las nuevas generaciones</b>. La base de todo crecimiento de una sociedad es la educación financiera, el emprendedorismo y el desarrollo personal, aprender a conocernos y modificar nuestros patrones limitantes hará que sembremos semillas para un cambio de generaciones.</p>

      <p className="p-2">A través de los cursos y capacitaciones obtendrás contenido de calidad, preciso y práctico, para aplicar inmediatamente, para que vos, querido/a emprendedor/a, avances en tu nuevo proyecto, con confianza y proyección a futuro.</p>

      <p className="p-2">Te <b>ayudaremos</b> a <b>organizar</b> tu empresa, mostrar los puntos clave para su éxito y expansión, desde sus finanzas hasta cómo crear un sistema de ventas eficiente y abundante. También te orientamos con las herramientas digitales necesarias para crear una página web, plantillas e-commers, estrategias de marketing y más… empoderarte y guiarte desde el inicio.</p>

      <p className="p-2">Culturalmente no estamos preparados para tener una relación sana con el dinero, por eso es importante desaprender, volver a aprender y capacitarse para crecer personal y financieramente.</p>
    </>} />}

  </>;
};

export default Nosotros;
