"use client";
import React, { useEffect, useState } from "react";
import { Button, Card, Divider, Text, Title } from "@tremor/react";
import { PencilAltIcon, PlusIcon, TrashIcon } from "@heroicons/react/outline";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db, storage } from "@/app/firebase";

import ModalBlog from "./ModalBlog";
import "react-quill/dist/quill.snow.css"; // Para el tema 'snow'
import { ref } from "firebase/storage";

const Blog = () => {
  const [Modal, setModal] = useState({
    Visible: false,
    InfoEditar: {},
  });
  const [Blog, setBlog] = useState([]);

  useEffect(() => {
    onSnapshot(
      collection(db, `Blog`),
      // orderBy("email", "asc"),
      (snapshot) =>
        setBlog(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        )
    );
  }, []);

  return (
    <div className="space-y-4">
      {Modal.Visible && <ModalBlog Modal={Modal} setModal={setModal} />}
      <Card>
        <Title>
          ¡Bienvenido a la página de administración de Blog de tu página online!
        </Title>
        <Divider />
        <Text>
          Este es el lugar donde podrás tener el control total sobre los Blog
          que ofreces a tus clientes. Aquí puedes añadir nuevos Blog, actualizar
          los existentes y ajustar los precios como mejor te parezca. Este
          espacio está diseñado para que puedas mantener tu catálogo de Blog
          siempre actualizado y en línea con las demandas de tu mercado.
        </Text>
        <Divider />
        <Button
          onClick={(e) => {
            e.preventDefault();
            setModal({
              Visible: true,
              InfoEditar: {},
            });
          }}
          icon={PlusIcon}
        >
          Nuevo Blog
        </Button>
      </Card>

      <Card>
        <Title>Lista de Blog</Title>

        <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3  ">
          {Blog?.map((blog) => (
            <div key={blog.id} className="max-w-lg mx-auto cursor-pointer">
              <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                <img
                  className="rounded-t-lg"
                  src={blog?.Imagenes[0] || ""}
                  alt="imageBlog"
                />

                <div className="p-5">
                  <div>
                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                      {blog?.Titulo}
                    </h5>
                  </div>
                  <div
                    className="quill-content line-clamp-6 text-justify"
                    dangerouslySetInnerHTML={{ __html: blog?.Blog }}
                  />

                  {/* <a
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                    href="#"
                  >
                    Read more
                  </a> */}
                </div>

                <div className="flex items-center justify-center gap-x-2 pb-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setModal({
                        Visible: true,
                        InfoEditar: blog,
                      });
                    }}
                    className="bg-blue-500 space-x-1.5 rounded-lg  px-4 py-1.5 text-white duration-100 hover:bg-blue-600"
                  >
                    <PencilAltIcon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={async (e) => {
                      e.preventDefault();

                      const Confirm = confirm(
                        `Esta Seguro de eliminar el blog: ${blog.Titulo}`
                      );
                      if (Confirm) {
                        const ImgRef = ref(
                          storage,
                          `${blog?.Titulo?.replace(/\s+/g, "_")}/`
                        );

                        await deleteDoc(doc(db, "Blog", `${blog.id}`));

                        // Lista todos los objetos (archivos) en el directorio
                        listAll(ImgRef)
                          .then((res) => {
                            res.items.forEach((itemRef) => {
                              // Ahora debes borrar cada objeto (archivo)
                              deleteObject(itemRef).catch((error) => {
                                // Maneja cualquier error
                                alert(` Error al eliminar ${itemRef.fullPath}`);
                                console.log(
                                  `Error al eliminar ${itemRef.fullPath}`,
                                  error
                                );
                              });
                            });
                          })
                          .catch((error) => {
                            // Maneja cualquier error
                            console.error("Error al listar los objetos", error);
                          });
                      }
                    }}
                    className="bg-red-500 space-x-1.5 rounded-lg  px-4 py-1.5 text-white duration-100 hover:bg-red-600"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Blog;
