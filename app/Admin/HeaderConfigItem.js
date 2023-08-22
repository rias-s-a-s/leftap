import { useRouter } from "next/navigation";
import React from "react";

function HeaderConfigItem({ icono, title, ruta }) {
  const router = useRouter();

  return (
    <>
      <div
        className="cursor-pointer text-[1.06rem] h-12 font-bold flex bg-gray-300 p-3 rounded-md hover:bg-gray-400 place-items-center"
        onClick={() => router.push(`${ruta}`)}
      >
        <span className="mr-2 text-[1.9rem]">{icono}</span>
        {title}
      </div>
    </>
  );
}

export default HeaderConfigItem;
