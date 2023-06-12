"use client";
import BlogComponent from "./Blog/BlogComponent";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      {/* slider */}
      <Carousel autoPlay={true} showArrows={true}>
        <div>
          <img src="/PortadaLEFTAP.png" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="/PortadaLEFTAP.png" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="/PortadaLEFTAP.png" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      {/* blog  */}
      <BlogComponent />
      <Footer />
    </>
  );
};

export default Home;
