import React from 'react'

function Planes({ set, plan }) {
    return (
        <>
            <div className='w-full fixed top-0 z-40 h-screen bg-black/20 text-center'>
                <div className='text-white w-full font-bold font-[oswald] text-6xl drop-shadow-lg italic tracking-[7px] mt-24 fixed text-center z-10'>
                    TU PLAN PERFECTO
                </div>
                <div className='bg-white w-3/4 z-50 mx-auto mt-[35%] md:mt-[12%] h-[74%] text-center p-4 rounded-md '>
                    <div className='w-full flex justify-end mb-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer" onClick={() => {
                            set(!plan)
                        }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </div>

                    <div className='grid md:grid-cols-3 gap-x-4'>
                        <div className='rounded-xl bg-orange-700 p-4 '>
                            <div className='text-3xl tracking-[7px] font-[oswald] italic text-white'>STANDART</div>
                            <div className='p-2'>
                                <span className="text-white text-base align-top">$ </span>
                                <span className="text-3xl font-bold">49</span>
                                <span className="text-white text-base align-bottom">/dólares </span>
                            </div>
                            <div className='p-2 text-gray-200 font-bold italic'>2 Sesiones de Coaching personal</div>
                            <div className='p-2 text-gray-200 font-bold italic'>Material descargable</div>
                            <div className='p-2 text-gray-200 font-bold italic'>Manual de Trabajo diario</div>
                            <div className='p-2 text-gray-200 font-bold italic'>Videos tutoriales</div>
                            <div className='w-full text-center'>
                                <button className='p-4 mt-4 bg-gray-300 text-orange-900 font-bold italic rounded-3xl' onClick={(e) => {
                                    e.preventDefault
                                    window.open("https://wa.link/23ic1o", "_blank");
                                }}>Contactame &rarr;</button>
                            </div>
                        </div>
                        <div className='rounded-xl bg-gray-300 p-4'>
                            <div className='text-3xl tracking-[7px] font-[oswald] italic text-yellow-700'>GOLD</div>
                            <div className='p-2'>
                                <span className="text-gray-700 text-base align-top">$ </span>
                                <span className="text-3xl font-bold">99</span>
                                <span className="text-gray-700 text-base align-bottom">/dólares </span>
                            </div>
                            <div className='p-2 font-bold italic'>4 Sesiones de Coaching personal</div>
                            <div className='p-2 font-bold italic'>Material descargable</div>
                            <div className='p-2 font-bold italic'>Manual de Trabajo diario</div>
                            <div className='p-2 font-bold italic'>Videos tutoriales</div>
                            <div className='p-2 font-bold italic'>Seguimiento Diario</div>
                            <div className='p-2 font-bold italic'>Asistencia 24/7</div>
                            <div className='w-full text-center'>
                                <button className='p-4 mt-4 bg-[#ff4c00] text-white font-bold italic rounded-3xl' onClick={(e) => {
                                    e.preventDefault
                                    window.open("https://wa.link/23ic1o", "_blank");
                                }}>Contactame &rarr;</button>
                            </div>
                        </div>
                        <div className='rounded-xl bg-orange-700 p-4'>
                            <div className='text-3xl tracking-[7px] font-[oswald] italic text-white'>SPORT</div>
                            <div className='p-2'>
                                <span className="text-white text-base align-top">$ </span>
                                <span className="text-3xl font-bold">79</span>
                                <span className="text-white text-base align-bottom">/dólares </span>
                            </div>
                            <div className='p-2 text-gray-200 font-bold italic'>2 Sesiones de Coaching personal</div>
                            <div className='p-2 text-gray-200 font-bold italic'>Material descargable</div>
                            <div className='p-2 text-gray-200 font-bold italic'>Manual de Trabajo diario</div>
                            <div className='p-2 text-gray-200 font-bold italic'>Videos tutoriales</div>
                            <div className='p-2 text-gray-200 font-bold italic'>Seguimiento Semanal</div>
                            <div className='w-full text-center'>
                                <button className='p-4 mt-4 bg-gray-300 text-orange-900 font-bold italic rounded-3xl' onClick={(e) => {
                                    e.preventDefault
                                    window.open("https://wa.link/23ic1o", "_blank");
                                }}>Contactame &rarr;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Planes