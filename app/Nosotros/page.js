"use client"
import React, { useEffect, useState } from "react";
import ModalInfo from "./ModalInfo";
import Image from "next/image";

const Nosotros = () => {
  const [open, setOpen] = useState(false)
  const [sobreMi, setMi] = useState(false)
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
          setOpen(!open)
        }}>
          Leer Mas
        </button>
      </div>
      <div className="w-full text-center p-4 bg-[#182d57] mt-2 rounded-md">
        <div className="text-4xl font-bold text-white">Mi Histora, Mi Pasado y Mi Presente</div>
        <div className="flex justify-center mx-auto">
          <Image
            className="rounded-xl border-2 border-white"
            src={"https://leftap.org/wp-content/uploads/2022/05/mirta-lopez.webp"}
            width={150}
            height={150}
          />
        </div>
        <div className="p-4 font-[cursive] text-white text-xl">
          <p className="p-2">Hola, mi nombre es Mirta López, emprendedora, profesora de Economía y coach integral en PNL (Programación Neuro Lingüística).</p>
          <p className="p-2">He creado este espacio para brindar apoyo y acompañamiento a cualquier persona y emprendedor que desee crecer personal y financieramente con ayuda de la educación financiera.</p>
        </div>
        <button className="bg-white w-3/12 font-bold  rounded-md mx-auto p-4 text-xl" onClick={(e) => {
          e.preventDefault();
          setMi(!sobreMi)
        }}>
          Mas sobre mi
        </button>
      </div>
    </div>
    {sobreMi && <ModalInfo titulo={"Mi Histora, Mi Pasado y Mi Presente"} setOpen={setMi} Open={sobreMi} />}
    {open && <ModalInfo titulo={"Sobre Nosotros"} Open={open} setOpen={setOpen} info={<>
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
