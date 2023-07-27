import React from "react";

function ModalInfo({ titulo, info, setOpen, Open }) {
  return (
    <>
      <div className='w-full fixed top-0 z-40 h-screen bg-black/20 text-center'>
        <div className='text-red-700 w-full mx-auto font-bold font-[oswald] text-6xl drop-shadow-lg italic tracking-[7px] mt-14 fixed justify-center z-50 flex uppercase'>
          {titulo}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 ml-6 cursor-pointer" onClick={() => {
            setOpen(!setOpen)
          }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div className='bg-white w-3/4 z-50 mx-auto mt-[35%] md:mt-[10%] h-3/4 text-center p-4 rounded-md '>
          <div className='p-2 h-5/6 text-xl md:text-2xl text-gray-800 font-serif text-justify overflow-auto'>{info}</div>
          <div className='text-center p-2'>
            <button className='text-white font-bold bg-blue-700 rounded-md p-2 text-2xl' onClick={() => setOpen(!Open)}>Cerrar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalInfo;
