"use client";
import { db } from "@/app/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css"; // Para el tema 'snow'

const ItemBlog = ({ params: { id } }) => {
  const [Blog, setBlog] = useState([]);
  const [SeeBlog, setSeeBlog] = useState({});

  console.log("SeeBlog", SeeBlog);
  useEffect(() => {
    onSnapshot(
      collection(db, `Blog`),
      // orderBy("email", "asc"),
      (snapshot) => {
        const DataNormalizada = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const ShowBlog = DataNormalizada.find((blo) => blo.id == id);
        setBlog(DataNormalizada);

        setSeeBlog(ShowBlog);
      }
    );
  }, []);

  return (
    <div>
      <section className="bg-gray-100 sm:max-h-[600px] lg:-mt-[104px] bg-center bg-no-repeat bg-[url('/BannerBlog.webp')] bg-black/60 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-lg text-start py-24 lg:py-56"></div>
      </section>
      <div className=" mx-auto">
        <main className="mt-12">
          {/* featured section */}
          <div className="grid sm:grid-cols-3 gap-4">
            {/* main post */}

            <div className="mb-4 lg:mb-0  p-4 block sm:col-span-2 text-justify   ">
              <div className="p-5 ">
                <div>
                  <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                    {SeeBlog?.Titulo}
                  </h5>

                  {SeeBlog?.Imagenes?.length > 0 && (
                    <img
                      className="rounded-t-lg"
                      src={SeeBlog?.Imagenes[0] || ""}
                      alt="imageBlog"
                    />
                  )}
                </div>
                <div
                  className="quill-content   text-justify"
                  dangerouslySetInnerHTML={{ __html: SeeBlog?.Blog }}
                />
              </div>
            </div>
            {/* sub-main posts */}
            <div className="px-2 sm:px-0 sm:w-full sm:py-10 sm:col-span-1">
              {Blog?.filter((item, index) => item.id != id)?.map(
                (blog, index) => (
                  <Link key={blog.id} href={`/Blog/${blog.id}`}>
                    <div className="rounded mx-auto max-w-sm sm:w-full flex flex-col md:flex-row mb-10">
                      <img
                        src={blog.Imagenes[0]}
                        className="block md:hidden lg:block rounded-md  w-[167px] h-28 m-4 md:m-0 object-contain"
                      />
                      <div className="bg-white rounded pl-3">
                        <div className=" text-gray-p00 font-semibold text-base mb-2">
                          {blog.Titulo}
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
        </main>
        {/* main ends here */}
        {/* footer */}
      </div>
    </div>
  );
};

export default ItemBlog;
