import Link from "next/link";

const BlogComponent = () => {
  return (
    <main className="flex-grow">
      <div className="relative px-8">
        <div className="max-w-screen-xl mx-auto my-12 md:mt-18 lg:mt-20">
          <h1 className="font-display text-secondary-500 text-4xl font-black tracking-wide">
            Blog Posts
          </h1>
        </div>
      </div>
      <div className="relative px-8 mb-8">
        <div className="flex flex-col sm:flex-row max-w-screen-xl mx-auto pt-8 group">
          <div className="sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg relative">
            <Link className="cursor-pointer" href="/Blog/12">
              <div className="h-64 sm:h-96 relative" style={{ width: "100%" }}>
                <img
                  alt="Virtual Tour"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  srcSet="https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=384&format=auto 384w, https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=640&format=auto 640w, https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=750&format=auto 750w, https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=828&format=auto 828w, https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=1080&format=auto 1080w, https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=1200&format=auto 1200w, https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=1920&format=auto 1920w, https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=2048&format=auto 2048w, https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=3840&format=auto 3840w"
                  src="https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=3840&format=auto"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover object-center rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    color: "transparent",
                  }}
                />
              </div>
            </Link>
          </div>
          <div className="sm:w-1/2 lg:w-1/3 bg-gray-100 p-8 border-2 border-t-0 rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0 relative">
            <Link className="cursor-pointer" href="/Blog/12">
              <div className="font-display uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content">
                Travel Guide
              </div>
              <div className="border-b-2 border-primary-500 w-8" />
              <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
                Mar. 31, 2021
              </div>
              <h2 className="font-display text-secondary-500 mt-1 font-black text-2xl group-hover:text-primary-500 transition duration-300">
                Virtual Tours - Ways to Travel From Home
              </h2>
              <p className="text-sm mt-3 leading-loose text-gray-600 font-medium line-clamp-4">
                Virtual tours can open up amazing and awe-inspiring locations
                around the world that may otherwise be inaccessible to you. You
                can experience the majesty of the Sistine Chapel, the wonder of
                the Great ...
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative px-8 mb-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Link className="cursor-pointer" href="/Blog/12">
              <div className="flex-col group mb-8 md:mb-0">
                <div className="relative h-64">
                  <img
                    alt="Virtual Tour"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    srcSet="https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=256&format=auto 256w, https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=384&format=auto 384w, https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=640&format=auto 640w, https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=750&format=auto 750w, https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=828&format=auto 828w, https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=1080&format=auto 1080w, https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=1200&format=auto 1200w, https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=1920&format=auto 1920w, https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=2048&format=auto 2048w, https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=3840&format=auto 3840w"
                    src="https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=3840&format=auto"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover object-center rounded-t-lg"
                    loading="lazy"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                  />
                </div>
                <div className="bg-gray-100 p-8 border-2 border-t-0 rounded-b-lg">
                  <div className="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose">
                    Travel Guide
                  </div>
                  <div className="border-b-2 border-primary-500 w-8" />
                  <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
                    Mar. 31, 2021
                  </div>
                  <h2 className="text-secondary-500 mt-1 font-black text-2xl group-hover:text-primary-500 transition duration-300">
                    Virtual Tours - Ways to Travel From Home
                  </h2>
                </div>
              </div>
            </Link>
            <a href="/blog/am-eh-zing-places-to-visit-in-canada">
              <div className="flex-col group mb-8 md:mb-0">
                <div className="relative h-64">
                  <img
                    alt="Visit the beautiful Alps in Switzerland"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    srcSet="https://cdn.aglty.io/blog-starter-2021-template/posts/canadian.jpg?q=60&w=256&format=auto 256w, https://cdn.aglty.io/blog-starter-2021-template/posts/canadian.jpg?q=60&w=384&format=auto 384w, https://cdn.aglty.io/blog-starter-2021-template/posts/canadian.jpg?q=60&w=640&format=auto 640w, https://cdn.aglty.io/blog-starter-2021-template/posts/canadian.jpg?q=60&w=750&format=auto 750w, https://cdn.aglty.io/blog-starter-2021-template/posts/canadian.jpg?q=60&w=828&format=auto 828w, https://cdn.aglty.io/blog-starter-2021-template/posts/canadian.jpg?q=60&w=1080&format=auto 1080w, https://cdn.aglty.io/blog-starter-2021-template/posts/canadian.jpg?q=60&w=1200&format=auto 1200w, https://cdn.aglty.io/blog-starter-2021-template/posts/canadian.jpg?q=60&w=1920&format=auto 1920w, https://cdn.aglty.io/blog-starter-2021-template/posts/canadian.jpg?q=60&w=2048&format=auto 2048w, https://cdn.aglty.io/blog-starter-2021-template/posts/canadian.jpg?q=60&w=3840&format=auto 3840w"
                    src="https://cdn.aglty.io/blog-starter-2021-template/posts/canadian.jpg?q=60&w=3840&format=auto"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover object-center rounded-t-lg"
                    loading="lazy"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                  />
                </div>
                <div className="bg-gray-100 p-8 border-2 border-t-0 rounded-b-lg">
                  <div className="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose">
                    Travel Guide
                  </div>
                  <div className="border-b-2 border-primary-500 w-8" />
                  <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
                    Mar. 23, 2021
                  </div>
                  <h2 className="text-secondary-500 mt-1 font-black text-2xl group-hover:text-primary-500 transition duration-300">
                    Am-EH-zing Places to Visit in Canada!
                  </h2>
                </div>
              </div>
            </a>
            <Link className="cursor-pointer" href="/Blog/12">
              <div className="flex-col group mb-8 md:mb-0">
                <div className="relative h-64">
                  <img
                    alt="Travel Photography 101"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    srcSet="https://cdn.aglty.io/blog-starter-2021-template/posts/travel-photography_20210331143648_0.jpg?q=60&w=256&format=auto 256w, https://cdn.aglty.io/blog-starter-2021-template/posts/travel-photography_20210331143648_0.jpg?q=60&w=384&format=auto 384w, https://cdn.aglty.io/blog-starter-2021-template/posts/travel-photography_20210331143648_0.jpg?q=60&w=640&format=auto 640w, https://cdn.aglty.io/blog-starter-2021-template/posts/travel-photography_20210331143648_0.jpg?q=60&w=750&format=auto 750w, https://cdn.aglty.io/blog-starter-2021-template/posts/travel-photography_20210331143648_0.jpg?q=60&w=828&format=auto 828w, https://cdn.aglty.io/blog-starter-2021-template/posts/travel-photography_20210331143648_0.jpg?q=60&w=1080&format=auto 1080w, https://cdn.aglty.io/blog-starter-2021-template/posts/travel-photography_20210331143648_0.jpg?q=60&w=1200&format=auto 1200w, https://cdn.aglty.io/blog-starter-2021-template/posts/travel-photography_20210331143648_0.jpg?q=60&w=1920&format=auto 1920w, https://cdn.aglty.io/blog-starter-2021-template/posts/travel-photography_20210331143648_0.jpg?q=60&w=2048&format=auto 2048w, https://cdn.aglty.io/blog-starter-2021-template/posts/travel-photography_20210331143648_0.jpg?q=60&w=3840&format=auto 3840w"
                    src="https://cdn.aglty.io/blog-starter-2021-template/posts/travel-photography_20210331143648_0.jpg?q=60&w=3840&format=auto"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover object-center rounded-t-lg"
                    loading="lazy"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                  />
                </div>
                <div className="bg-gray-100 p-8 border-2 border-t-0 rounded-b-lg">
                  <div className="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose">
                    Travel Tips
                  </div>
                  <div className="border-b-2 border-primary-500 w-8" />
                  <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
                    Mar. 23, 2021
                  </div>
                  <h2 className="text-secondary-500 mt-1 font-black text-2xl group-hover:text-primary-500 transition duration-300">
                    Travel Photography Tips: 101
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogComponent;
