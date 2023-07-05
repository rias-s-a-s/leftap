"use client"
import Image from 'next/image'
import React from 'react'

function Capacitaciones() {
    return (
        <>
            <div className='container mx-auto p-4'>
                <h6 className='font-[oswal] text-base drop-shadow-lg italic font-bold tracking-[3px]'>EL CONOCIMIENTO ES LA CLAVE PARA EL CRECIMIENTO PERSONAL Y PROFESIONAL</h6>
                <h2 className='text-orange-800 font-bold text-4xl py-2 italic font-serif drop-shadow-lg text-center'>Capacitaciones, Formación profesional y Desarrollo personal</h2>
                <div className='text-center w-full'>
                    <p className='py-2 text-lg'>Adquiere nuevas habilidades y herramientas necesarias para crear tu emprendimiento con nuestras capacitaciones online, sin que salgas de casa.</p>
                    <p className='py-2 text-lg'>Perfecciónate en tus áreas de conocimiento, para transfórmate en un experto y monetizar tus habilidades.</p>
                    <p className='py-2 text-lg'>Además en nuestro blog encontrarás artículos que te ayudarán a vender y conocer más a tu cliente.</p>
                </div>
                <div className='grid md:grid-cols-3 mt-4 p-4 bg-gradient-to-b from-[#e09900] to-[#f7e49f]'>
                    <div>
                        <div>
                            <Image
                                src={"/Capacitaciones/fabrica.png"}
                                height={200}
                                width={200}
                            />
                        </div>
                        <div className='flex justify-end'>
                            <Image
                                src={"/Capacitaciones/MockupFABRICA.png"}
                                height={250}
                                width={250}
                            />
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className='font-[oswald] italic text-4xl text-center drop-shadow-lg font-bold mx-auto w-2/4 mb-4'>
                            Aprende a fabricar sandalias desde tu hogar y hazlo un negocio rentable
                        </div>
                        <div className='text-2xl mx-auto text-center font-bold mb-4'>¿Quieres aprender a crear tus propias sandalias con estilo y calidad?
                        </div>
                        <div className='text-2xl mx-auto text-center font-bold mb-4'>Únete a nuestro curso de fabricación de sandalias y crea tus propias sandalias únicas. Sin experiencia previa, aprenderás técnicas innovadoras y seleccionarás materiales de alta calidad. Accede a recursos exclusivos y conviértete en el dueño de tu negocio de sandalias con estilo. No esperes más, ¡únete ahora!
                        </div>
                        <div className='flex gap-8 justify-center'>
                            <button className='py-3 px-7 font-bold drop-shadow-lg hover:shadow-green-900 hover:shadow-lg bg-blue-700 text-white rounded-lg' onClick={() => {
                                window.open("https://go.hotmart.com/B79204405L", "_blank")
                            }}>Saber mas</button>
                            <button className='py-3 px-7 font-bold drop-shadow-lg hover:shadow-green-900 hover:shadow-lg bg-blue-700 text-white rounded-lg' onClick={() => {
                                window.open("https://go.hotmart.com/B79204405L?ap=50c5", "_blank")
                            }}>Comprar</button>
                        </div>
                    </div>
                </div>
                <div className=' grid md:grid-cols-3 mt-4 p-4 bg-gradient-to-tr from-orange-600 via-orange-200 to-orange-50'>
                    <div className='h-full'>
                        <div>
                            <Image
                                src={"/Capacitaciones/barberia.jpg"}
                                height={250}
                                width={250}
                            />
                        </div>
                        <div className='flex justify-end'>
                            <Image
                                src={"/Capacitaciones/MockupBARBERIA.png"}
                                height={350}
                                width={350}
                            />
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className='font-[oswald] italic text-4xl text-center drop-shadow-lg font-bold mx-auto w-2/4 mb-4'>
                            Aprende Barbería y monta tu propio negocio
                        </div>
                        <div className='text-2xl mx-auto text-center font-bold mb-4'>¿Sueñas con convertirte en un barbero profesional y tener tu propio negocio?
                        </div>
                        <div className='text-2xl mx-auto text-center font-bold mb-4'>
                            Perfecciona tus habilidades con nuestro completo curso de barbería. Aprende desde cortes clásicos hasta técnicas avanzadas con nuestros expertos instructores. Obtén acceso a recursos exclusivos y destaca en el mercado como un barbero exitoso. ¡Haz realidad tu sueño, únete ahora!
                        </div>
                        <div className='text-2xl mx-auto text-center font-bold mb-4'>¡No esperes más para dar el salto a tu carrera de barbería!</div>
                        <div className='text-2xl mx-auto text-center font-bold mb-4'>Únete a nuestro curso y comienza a construir tu futuro hoy mismo</div>
                        <div className='flex gap-8 justify-center'>
                            <button className='py-3 px-7 font-bold drop-shadow-lg hover:shadow-green-900 hover:shadow-lg bg-blue-700 text-white rounded-lg' onClick={() => {
                                window.open("https://go.hotmart.com/F78768211L?ap=b854", "_blank")
                            }}>Saber mas</button>
                            <button className='py-3 px-7 font-bold drop-shadow-lg hover:shadow-green-900 hover:shadow-lg bg-blue-700 text-white rounded-lg' onClick={() => {
                                window.open("https://go.hotmart.com/F78768211L?ap=95e2", "_blank")
                            }}>Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Capacitaciones