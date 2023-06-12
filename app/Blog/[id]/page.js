import React from "react";

const Blog = () => {
  return (
    <div>
      <main className="flex-grow">
        <div className="relative px-8">
          <div className="max-w-screen-xl mx-auto">
            <div className="h-64 md:h-96 relative">
              <img
                alt="Virtual Tour"
                sizes="100vw"
                srcSet="https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=640&format=auto 640w, https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=750&format=auto 750w, https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=828&format=auto 828w, https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=1080&format=auto 1080w, https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=1200&format=auto 1200w, https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=1920&format=auto 1920w, https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=2048&format=auto 2048w, https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=3840&format=auto 3840w"
                src="https://cdn.aglty.io/blog-starter-2021-template/posts/virtual-tour_20210331171226_0.jpg?q=60&w=3840&format=auto"
                decoding="async"
                data-nimg="fill"
                className="object-cover object-center rounded-lg"
                loading="lazy"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent",
                }}
              />
            </div>
            <div className="max-w-2xl mx-auto mt-4">
              <div className="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose">
                Travel Guide
              </div>
              <div className="border-b-2 border-primary-500 w-8" />
              <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
                Mar. 31, 2021
              </div>
              <h1 className="font-display text-4xl font-bold my-6 text-secondary-500">
                Virtual Tours - Ways to Travel From Home
              </h1>
              <div className="prose max-w-full mb-20">
                <p>
                  Virtual tours can open up amazing and awe-inspiring locations
                  around the world that may otherwise be inaccessible to you.
                  You can experience the majesty of the Sistine Chapel, the
                  wonder of the Great Wall of China, or the beauty of Hawaii
                  from the comfort of your own home.
                </p>
                <h2>Picking the Right Virtual Tour for You</h2>
                <p>
                  As you consider which virtual tour you want to take, try
                  finding one that not only helps you explore a new place, but
                  consider a place tied to your heritage. Learning more about
                  your cultural heritage can help you become more resilient as
                  you develop a deeper understanding of your story.
                </p>
                <h2>1. Vatican Museums</h2>
                <p>
                  <img
                    src="https://cdn.aglty.io/gixkprai/posts/vatican-museum.jpg"
                    alt="Vatican Museum"
                  />
                </p>
                <p>
                  This collection of virtual tours lets you see some of the
                  masterpieces of the Renaissance, including the Sistine Chapel,
                  Niccoline Chapel, Raphael’s Room, and more.
                </p>
                <p>
                  <a
                    href="http://www.museivaticani.va/content/museivaticani/en/collezioni/musei/tour-virtuali-elenco.html"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=" (opens in a new tab)"
                  >
                    <em>Start the Tour</em>
                  </a>
                  <em />
                </p>
                <h2>2. Great Wall of China</h2>
                <p>
                  <img
                    src="https://cdn.aglty.io/gixkprai/posts/great-wall-of-china.jpg"
                    alt="Great Wall of China"
                  />
                </p>
                <p>
                  The Great Wall is often regarded as a wonder of the world,
                  making it a prime tourist attraction. By taking the tour
                  online, you can skip the crowds and still experience the
                  incredible view and Chinese history.
                </p>
                <p>
                  <a
                    href="https://www.thechinaguide.com/destination/great-wall-of-china"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=" (opens in a new tab)"
                  >
                    <em>Start the Tour</em>
                  </a>
                </p>
                <h2>3. Louvre</h2>
                <p>
                  <img
                    src="https://cdn.aglty.io/gixkprai/posts/louvre.jpg"
                    alt="Louvre"
                  />
                </p>
                <p>
                  The Louvre, located in Paris, is the largest art museum in the
                  world. Three of the museum’s top exhibits are available
                  online.
                </p>
                <p>
                  <a
                    href="https://www.louvre.fr/en/visites-en-ligne#tabs"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=" (opens in a new tab)"
                  >
                    <em>Start the Tour</em>
                  </a>
                </p>
                <h2>4. Taj Mahal</h2>
                <p>
                  <img
                    src="https://cdn.aglty.io/gixkprai/posts/taj-mahal.jpg"
                    alt="Taj Mahal"
                  />
                </p>
                <p>
                  This ivory marble mausoleum in India is one of the most famous
                  buildings in the world. Emperor Shah Jahan had it built in
                  1632 for his wife Mumtaz Mahal.
                </p>
                <p>
                  <a
                    href="https://www.airpano.com/360photo/Taj-Mahal-India/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=" (opens in a new tab)"
                  >
                    <em>Start the Tour</em>
                  </a>
                </p>
                <h2>5. Create Your Own Virtual Tour</h2>
                <p>
                  <span>With the help of&nbsp;</span>
                  <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener"
                  >
                    Google Maps
                  </a>
                  <span>&nbsp;or&nbsp;</span>
                  <a
                    href="https://www.google.com/earth/"
                    target="_blank"
                    rel="noopener"
                  >
                    Google Earth
                  </a>
                  <span>
                    , you can explore almost any location in the world. If you
                    need ideas of places to visit, use the opportunity to
                    virtually&nbsp;
                  </span>
                  <a
                    href="https://www.familysearch.org/blog/en/heritage-tourism/"
                    target="_blank"
                    rel="noopener"
                  >
                    explore the places of your heritage
                  </a>
                  <span>
                    . Traveling to understand the past and particularly your
                    ancestors will help you gain a connection to your&nbsp;
                  </span>
                  <a
                    href="https://www.familysearch.org/blog/en/what-is-heritage/"
                    target="_blank"
                    rel="noopener"
                  >
                    heritage
                  </a>
                  <span>&nbsp;and a sense of your roots.</span>
                </p>
                <p>
                  <span>
                    <a
                      href="https://www.familysearch.org/blog/en/virtual-tours-travel-from-home/"
                      target="_blank"
                      rel="noopener"
                    >
                      Article Source
                    </a>
                  </span>
                </p>
                <p />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
