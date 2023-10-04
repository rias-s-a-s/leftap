"use client";
import { Button, Divider, Title } from "@tremor/react";
import React, { useRef, useState } from "react";

import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db, storage } from "@/app/firebase";
import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";
import { BiCategory } from "react-icons/bi";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { formats, modules } from "@/lib/QuillConfig";
import FileUploader from "./FileUploader";
const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
const ModalServicios = ({ Modal, setModal }) => {
  const [InputValues, setInputValues] = useState({});
  const [files, setFiles] = useState([]);
  const modalRef = useRef();
  const [Isloading, setIsloading] = useState(false);

  console.log("InputValues", InputValues);

  const handleClick = (event) => {
    if (!modalRef?.current?.contains(event?.target)) {
      // El clic se produjo fuera del área
      // Aquí puedes escribir tu código para manejar el evento
      setModal({
        visible: false,
        InfoEditar: {},
      });
    }
  };

  const HandlerChange = (e) => {
    setInputValues({
      ...InputValues,
      [e.target.name]: e.target.value,
    });
  };

  const uploadImages = async (images, name) => {
    const urlLinks = await Promise.all(
      images.map(async (image, index) => {
        const imageRef = ref(storage, `${name}/image-${index}.jpg`);
        await uploadBytes(imageRef, image);
        const url = await getDownloadURL(imageRef);
        return url;
      })
    );
    return urlLinks;
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsloading(true);
      if (Object.keys(Modal?.InfoEditar).length > 0) {
        if (Object.keys(InputValues).length > 0) {
          const UpdateRef = doc(db, "OperacionesServicios", `${Modal?.InfoEditar?.id}`);

          // Set the "capital" field of the city 'DC'
          await updateDoc(UpdateRef, {
            ...InputValues,
          });
        }
        if (files?.length > 0) {
          // Borrar las imágenes antiguas
          const ImgRef = ref(
            storage,
            `${Modal?.InfoEditar?.Titulo?.replace(/\s+/g, "_")}/`
          );
          listAll(ImgRef)
            .then((res) => {
              res.items.forEach((itemRef) => {
                // Ahora debes borrar cada objeto (archivo)
                deleteObject(itemRef).catch((error) => {
                  // Maneja cualquier error
                  alert(` Error al eliminar ${itemRef.fullPath}`);
                  console.log(`Error al eliminar ${itemRef.fullPath}`, error);
                });
              });
            })
            .catch((error) => {
              // Maneja cualquier error
              console.error("Error al listar los objetos", error);
            });

          const NombreCarpeta =
            InputValues?.Titulo?.replace(/\s+/g, "_") ||
            Modal?.InfoEditar?.Titulo?.replace(/\s+/g, "_");

          // toca modificar la funcion y enviarle el values para que funcione mejor
          const ImagesUrl = await uploadImages(files, NombreCarpeta);

          const UpdateRef = doc(db, "OperacionesServicios", `${Modal?.InfoEditar?.id}`);
          await updateDoc(UpdateRef, {
            Imagenes: ImagesUrl,
          });
        }
      } else {
        if (!files?.length > 0) {
          setIsloading(false);
          alert("Por favor seleccione una imágen");

          return;
        }

        const NombreCarpeta = InputValues?.Titulo?.replace(/\s+/g, "_");

        const ImagesUrl = await uploadImages(files, NombreCarpeta); // Asegúrate de que la promesa se haya resuelto

        const docRef = await addDoc(collection(db, "OperacionesServicios"), {
          ...InputValues,
          Imagenes: ImagesUrl, // Ahora ImagesUrl es una matriz de cadenas de texto
        });
      }
      setIsloading(false);

      setModal({
        Visible: false,
        InfoEditar: {},
      });
    } catch (error) {
      setIsloading(false);

      alert(
        "Ocurrió un error al intentar guardar, Por favor contacte con soporte"
      );
      console.log("err", error);
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center bg-blue-950/50 transform scale-0 transition-transform duration-300 ${
          Modal?.Visible ? "scale-100" : ""
        } `}
      >
        {/* Modal content */}
        <div
          ref={modalRef}
          className="overflow-auto bg-white w-[70%] max-h-[95%]   p-6"
        >
          <Title className="uppercase">Agregar una nuevo Servicio</Title>
          <Divider />
          <form onSubmit={handlerSubmit}>
            <div className=" grid sm:grid-cols-1  gap-2 ">
              <div>
                <label
                  htmlFor="Titulo"
                  className="block text-sm font-edium text-gray-900"
                >
                  Titulo del Servicio <span className="text-red-500"> (*)</span>
                </label>
                <input
                  name="Titulo"
                  id="Titulo"
                  onChange={HandlerChange}
                  autoComplete="off"
                  className="InputStyle2"
                  type="text"
                  required
                  defaultValue={Modal?.InfoEditar?.Titulo}
                />
              </div>

              <div>
                <label
                  htmlFor="Imagenes"
                  className="block text-sm font-edium text-gray-900"
                >
                  Imagen Principal <span className="text-red-500"> (*)</span>
                </label>
                <FileUploader setFiles={setFiles} files={files} Modal={Modal} />
              </div>
              <div>
                <label
                  htmlFor="Descripcion"
                  className="block text-sm font-edium text-gray-900"
                >
                  Operaciones de Servicios <span className="text-red-500"> (*)</span>
                </label>
                <QuillNoSSRWrapper
                  modules={modules}
                  formats={formats}
                  theme="snow"
                  placeholder="Escriba aqui..."
                  onChange={(e) => {
                    setInputValues({
                      ...InputValues,
                      Descripcion: e,
                    });
                  }}
                  defaultValue={Modal?.InfoEditar?.Descripcion}
                />
              </div>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-2 sm:gap-4 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed">
              <Button type="submit" disabled={Isloading}>
                Guardar
              </Button>
              <Button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setModal({
                    visible: false,
                    InfoEditar: {},
                  });
                }}
              >
                Cerrar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalServicios;
