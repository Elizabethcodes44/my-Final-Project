import { useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
function Imageslider({ IMAGES }) {
  const [current, setCurrent] = useState(0);
  const previousSlide = () => {
    if (current === 0) setCurrent(IMAGES.length - 1);
    else setCurrent(current - 1);
  };
  const nextSlide = () => {
    if (current === IMAGES.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <>
      <div className="overflow-hidden relative">
        <div>
          <h1 className="galleryh1">OUR GALLERY</h1>
        </div>
        <div
          className={`flex transition ease-out duration-400`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {IMAGES.map((s, index) => {
            return <img key={index} src={s} alt={`image-${index}`} />;
          })}
        </div>
        <div
          className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl"
          style={{ zIndex: "999" }}
        >
          <button>
            <FaArrowCircleLeft onClick={previousSlide} />
          </button>
          <button>
            <FaArrowCircleRight onClick={nextSlide} />
          </button>
        </div>
       
      </div>
    </>
  );
}

export default Imageslider;
