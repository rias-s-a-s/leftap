"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import Planes from './Planes';

function Desarrollo() {
    const [planes, setPlanes] = useState(false)
    return (
        <>
            {/* FIRST SECTION */}
            <div className='h-auto p-10 bg-[url("/reeduca.webp")] bg-cover'>
                <div className='container border-gray-300 border-2 mx-auto rounded-tl-[45vh] rounded-br-[45vh] p-4 shadow-lg'>
                    <div className='grid grid-cols-3'>
                        <div className='text-2xl col-span-2 rounded-tl-[40vh] text-center'>
                            <p className='font-serif font-bold italic'>TE SIENTES ESTANCADO EN TU VIDA?</p>
                            <p className='ml-[37%] font-serif italic font-bold'>¿SIENTES QUE YA INTENTASTE TODO, PERO TE SIENTES VACÍO?</p>
                            <div className='mt-80 ml-[37%] bg-gray-800 text-white rounded-tl-md rounded-bl-md p-4'>
                                <div className='font-bold'>
                                    <p>UN ENTRENAMIENTO PERSONAL DE 30 DIAS</p>
                                </div>
                                <div className='text-xl p-2'>
                                    <p>DESCUBRIR UN PATRÓN LIMITANTE ES EL QUE DESATARÁ EL OBILLO DE TU VIDA</p>
                                </div>
                                <button className='p-4 bg-[#ff4c00] text-white font-bold italic rounded-3xl' onClick={(e) => {
                                    e.preventDefault
                                    window.open("https://wa.link/23ic1o", "_blank");
                                }}>Contactame</button>
                            </div>
                        </div>
                        <div className='bg-gradient-to-tr from-gray-800 via-gray-600 to-gray-300 p-4 rounded-br-[40vh]'>
                            <hr className='bg-red-500 h-1 mt-12 w-5/12 ml-[60%] border-0' />
                            <h1 className=' text-white text-6xl font-[oswald] italic leading-snug drop-shadow-lg'>R E E D U C A TU INTERIOR CON EL DESARROLLO PERSONAL</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* SECOND SECTION */}
            <div className='container mx-auto'>
                <p className='text-9xl font-bold text-[#5656568c] font-[oswald] italic'>1 O  N 1</p>
                <p className='tracking-[7px] font-[oswald] p-2 text-xl font-bold italic'>ENTRENAMIENTO EN TU DESARROLLO PERSONAL Y PROFESIONAL
                </p>
                <hr className='h-1 bg-[#ff4c00] w-1/12' />
                <div className='grid grid-cols-3 mt-4'>
                    <div className='font-[oswald] italic font-bold text-2xl'>
                        <p className='p-2'>NUESTRA MENTE FUE PROGRAMADA EN LIMITACIONES Y FRUSTRACIONES.</p>
                        <p className='p-2'>LO QUE BUSCAMOS ES REPROGRAMAR TU MENTE MEDIANTE TÉCNICAS, SEGUIMIENTO CONTINUO Y  ACOMPAÑAMIENTO</p>
                        <p className='p-2'>ENCONTRAR ESE PATRÓN QUE TE LIMITA CRECER ES EL QUE DESATARÁ EL OBILLO DE TU VIDA LOGRANDO CUMPLIR CON TUS METAS</p>
                    </div>
                    <div className='font-[oswald] italic text-gray-700 leading-loose text-xl'>
                        <p className='p-2'>Si estas frustrado en tus sueños y no puedes avanzar con tu proyecto de vida. </p>
                        <p className='p-2'>Te sientes bloqueado y no puedes avanzar. </p>
                        <p className='p-2'>Quieres conquistar ese proyecto que te cambiará la vida pero tienes miedo a dar el siguiente paso.</p>
                        <p className='p-2'>Todo esos bloqueos están en tu mente, en tus creencias y patrones limitantes.</p>
                    </div>
                    <div className='font-[oswald] italic text-gray-700 leading-relaxed text-xl'>
                        <p className='p-2'>Con este programa construye tu propio mundo, buscamos reprogramar tu mente y modificar tus patrones y creencias limitantes, transformarlos en hábitos saludables para tu desarrollo personal y profesional.</p>
                        <p className='p-2'>Deseamos que puedas palpar tus éxitos, con disciplina y hábitos saludables para que consigas tus éxitos.</p>
                        <p className='p-2'>En treinta días de entrenamiento y seguimiento continuo, buscamos modificar un patrón o creencia que te limita para ser ese engranaje en tu vida que te permita avanzar por el puente de del éxito.</p>
                    </div>
                </div>
            </div>
            {/* THIRD SECTION */}
            <div className='container mx-auto bg-[#182d57] p-4 rounded-md mt-5'>
                <div className='grid md:grid-cols-3 gap-4 justify-items-center'>
                    <div className='flex flex-col items-center gap-y-4'>
                        <div className='p-2 bg-orange-900 rounded-full w-28'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#3F2212" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-24 h-24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                            </svg>
                        </div>
                        <div>
                            <h1 className='font-[oswald] italic text-white leading-relaxed text-4xl'>MATERIAL DESCARGABLE</h1>
                        </div>
                        <div>
                            <p className='text-white text-xl text-center font-[osawld] leading-relaxed'>Tendrás material descargable para trabajar diariamente en tu formación utilizando herramientas y técnicas para tu crecimiento. Semanalmente una sesión en vivo </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-y-4'>
                        <div>
                            <p className='text-white text-xl text-center font-[osawld] leading-relaxed'>Contarás con videos y tutoriales como realizar cada clase y como realizar las meditaciones para que puedas realizarlas en el tiempo que tu dispongas.</p>
                        </div>
                        <div>
                            <h1 className='font-[oswald] italic text-white leading-relaxed text-5xl'>TUTORIAL Y VIDEOS</h1>
                        </div>
                        <div className='p-2 bg-orange-900 rounded-full w-28'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-24 h-24">
                                <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-y-4'>
                        <div className='p-2 bg-orange-900 rounded-full w-28'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-24 h-24">
                                <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
                            </svg>

                        </div>
                        <div>
                            <h1 className='font-[oswald] italic text-white leading-relaxed text-4xl'>ASISTENCIA 24/7</h1>
                        </div>
                        <div>
                            <p className='text-white text-xl text-center font-[osawld] leading-relaxed'>Un proceso de transformación interna  es luchar con tu yo interno y externo, lo que te puede hacerte perder el control si no te sientes acompañado. Por ese motivo no tan solo encontrarás una entrenadora sino también una amiga para apoyarte en tu proceso y no te sientas solo.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* FOUR SECTION */}
            <div className='container mx-auto mt-2'>
                <p className='tracking-[7px] font-[oswald] p-2 text-base font-bold italic'>CONSTRUYE TU PROPIO MUNDO</p>
                <hr className='h-1 bg-[#ff4c00] w-1/12' />
                <div className='grid md:grid-cols-2'>
                    <div>
                        <p className='tracking-[7px] font-[oswald] p-2 text-6xl font-bold italic'>30 DÍAS DE</p>
                        <p className='tracking-[7px] font-[oswald] p-2 text-3xl font-bold italic mt-4'>TRANSFORMACIÓN</p>
                        <p className='font-[oswald] p-2 font-bold text-xl'>Un paso a la vez, como cuando un niño comienza a caminar, así debemos comenzar a reprogramar nuestra mente. Transformar un hábito a la vez hará que te enfoques y no abandones, evitando las frustraciones.</p>
                        <p className='font-[oswald] p-2 text-xl'>El objetivo principal de este entrenamiento es que te descubras y alcances tu propósito para que puedas disfrutar de lo que realmente te mereces. </p>
                        <p className='font-[oswald] p-2 text-xl'>Aquí encontrarás las herramientas adecuadas y el paso a paso definitivo para alcanzar un equilibrio en tu vida y conseguir que reconstruyas tu propia vida.</p>
                        <p className='font-[oswald] p-2 text-xl'>Este entrenamiento cuenta con 4 secciones en vivo, más un acompañamiento continuo de 30 días para profundizar en tu ser y no te sientas solo en el proceso.</p>
                        <div className='p-2 text-right'>
                            <button className='p-4 bg-[#ff4c00] text-white font-bold italic rounded-3xl' onClick={(e) => {
                                e.preventDefault
                                window.open("https://wa.link/23ic1o", "_blank");
                            }}>QUIERO EL ENTRENAMIENTO &rarr;</button>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4 items-center justify-center'>
                        {/* FIRST IMAGE */}
                        <div className='justify-self-end mr-4'>
                            <Image
                                className='rounded-tl-[50px]'
                                src={"/MOTIVACION.png"}
                                width={200}
                                height={200}
                                alt='motivación'
                            />

                        </div>
                        <div>
                            <p className='font-bold font-[oswald] text-2xl text-black tracking-[7px]'>
                                MOTIVACIÓN
                            </p>
                            <p className='font-[oswald] leading-loose text-xl'>Necesitamos motivación para no abandonar y sentirnos solo, con tutoriales y apoyo puedes encontrar ayuda para seguir con tu enfoque</p>
                        </div>
                        {/* SECOND IMAGE */}
                        <div className='justify-self-end mr-4'>
                            <Image
                                src={"/MEDITACION1.png"}
                                width={200}
                                height={200}
                                alt='meditacion'
                            />

                        </div>
                        <div>
                            <p className='font-bold font-[oswald] text-2xl text-black tracking-[7px]'>
                                MEDITACIÓN
                            </p>
                            <p className='font-[oswald] leading-loose text-xl'>Somos mente, cuerpo y espíritu necesitamos encontrarnos para florecer, la meditación nos ayuda a encontrarnos. Aprenderemos la importancia de la meditación y te acompañamos en el proceso</p>
                        </div>
                        {/* THIRD IMAGE */}
                        <div className='justify-self-end mr-4'>
                            <Image
                                className='rounded-br-[50px]'
                                src={"/PLAYA.png"}
                                width={200}
                                height={200}
                                alt='playa'
                            />

                        </div>
                        <div>
                            <p className='font-bold font-[oswald] text-2xl text-black tracking-[7px]'>
                                PROYECCIÓN
                            </p>
                            <p className='font-[oswald] leading-loose text-xl'>Fijar una meta es el primer paso para tu transformación, pero debemos ponerla en acción, una vez cumplida debemos proyectar y planificar la próxima. Encontrarás un apoyo para no sentir miedo en esta nueva etapa.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* FOUR SECTION */}
            <div className='container mx-auto bg-[#182d57] p-4 rounded-md mt-5'>
                <p className='tracking-[7px] text-white font-[oswald] p-2 text-sm font-bold italic'>TRANSFORMANDO VIDAS</p>
                <hr className='h-1 bg-[#ff4c00] w-1/12' />
                <p className='p-4 text-4xl text-white font-bold font-[oswal] italic tracking-[7px]'>TESTIMONIALES</p>
                <div className='grid md:grid-cols-3 gap-x-7'>
                    <div className='flex flex-col justify-items-center'>
                        <p className='px-2 text-xl text-white font-[oswal] font-bold'>Martin Robert</p>
                        <hr className='h-1 bg-[#ff4c00] w-4/12' />
                        <p className='p-2 text-base text-white leading-relaxed text-justify'>Muchisimas gracias, gracias a su apoyo y acompañamiento pude concretar mis proyectos. Con uds aprendí a valorarme y creer en mí. Cree mi propio negocio y hoy en día es mi fuente de ingresos. Con su acompañamiento aprendo y crezco todos los días, aun cuando el programa ya acabo.<br /><br />Muchas gracias Mir, una excelente mentora y amiga.</p>
                    </div>
                    <div className='flex flex-col justify-items-center'>
                        <p className='px-2 text-xl text-white font-[oswal] font-bold'>Kimberly Duran</p>
                        <hr className='h-1 bg-[#ff4c00] w-5/12' />
                        <p className='p-2 text-base text-white text-justify font-bold'>Increible este programa!</p>
                        <p className='p-2 text-base text-white leading-relaxed text-justify'>La verdad no lo creía hasta que comencé a aplicarlo en mi vida, fue un antes y despúes. El acompañamiento es constante, cuando sentís que estas por abandonar, ahí están para sostenerte y que sigas adelante.</p>
                        <p className='p-2 text-base text-white leading-relaxed text-justify'>Con este programa no tan solo encontrás una mentora sino también una amiga. Muchas gracias</p>
                    </div>
                    <div className='flex flex-col justify-items-center'>
                        <p className='p-2 text-xl text-white font-[oswal] font-bold'>Alondra Meza</p>
                        <p className='p-2 text-base text-white leading-relaxed text-justify'>Gran trabajo hicieste conmigo Mir! Gracias por hacerme confiar en mí. Recuperé la seguridad en mí y pude concretar mis metas, ahora me siento con más fuerza para afrontar las nuevas. </p>
                        <p className='p-2 text-base text-white leading-relaxed text-justify'>Lo mejor que encontré una amiga, ya que tengo tu apoyo cuando lo necesito. Gracias por todo eternamente.</p>
                    </div>
                </div>
                <div className='p-2 text-center'>
                    <button className='p-4 w-auto bg-[#ff4c00] text-white font-bold italic rounded-3xl' onClick={(e) => {
                        e.preventDefault
                        setPlanes(!planes)
                    }}>
                        <span className='flex text-xl gap-x-2'>
                            Tu Plan Perfecto
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            {planes && <Planes set={setPlanes} plan={planes} />}
        </>
    )
}

export default Desarrollo