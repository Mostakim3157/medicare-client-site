const Banner = () => {
  return (
    <section className="mb-12 ">
      <div className="carousel w-full relative rounded-lg">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/k9qPT3B/national-cancer-institute-KMvo-Hc-B-w5g-unsplash.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/5xs8ywm/piron-guillaume-y5h-QCIn1c6o-unsplash.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/xm1CmJF/ousa-chea-g-KUC4-TMh-Oi-Y-unsplash.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/4JQvVJX/myriam-zilles-Klto-LK6-Mk-g-unsplash.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center">
        <div className="border h-[250px] top-[290px] w-[80%] flex justify-evenly absolute bg-white rounded-lg items-center">
          <div className="border-2 rounded-2xl h-[200px] w-[200px]  z-4 opacity-100 bg-white"></div>
          <div className="border-2 rounded-2xl h-[200px] w-[200px]  z-4 opacity-100 bg-white"></div>
          <div className="border-2 rounded-2xl h-[200px] w-[200px]  z-4 opacity-100 bg-white"></div>
        </div>
      </div> */}

      {/* https://b9-a12-server-lovat.vercel.app */}
    </section>
  );
};

export default Banner;
