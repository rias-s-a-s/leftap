import React from 'react'

function ModalInfo({ titulo, info, setOpen, Open }) {
    return (
        <>
            <div className='w-full fixed top-0 z-40 h-screen bg-black/20 text-center'>
                <div className='bg-white w-3/4 z-50 mx-auto mt-[35%] md:mt-[10%] h-3/4 text-center p-4 rounded-md '>
                    <div className='font-bold p-4 rounded-md text-4xl text-white bg-blue-700'>{titulo}</div>
                    <div className='p-2 h-3/4 text-xl md:text-2xl text-gray-800 font-serif text-justify overflow-y-scroll overflow-auto'>{info}</div>
                    <div className='text-center p-2'>
                        <button className='text-white font-bold bg-blue-700 rounded-md p-2 text-2xl' onClick={() => setOpen(!Open)}>Cerrar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalInfo