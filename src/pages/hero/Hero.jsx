import React, { useState } from "react";
import img1 from "../../assets/img-1.webp";
import img2 from "../../assets/img-2.webp";
import img3 from "../../assets/img-3.webp";
import img4 from "../../assets/img-4.png";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Hero = () => {
  const images = [img1, img2, img3, img4];
  const [index, setIndex] = useState(0);

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const next = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="my-5 h-[500px] w-full rounded-xl overflow-hidden relative">
      <img src={images[index]} alt="#" className="w-full h-full" />

      <div className="absolute w-full h-full top-0.5 justify-between items-center px-6 flex">
        <button
          onClick={prev}
          className="w-13 h-13 text-3xl flex items-center justify-center rounded-full cursor-pointer bg-gray-300"
        >
          <GrPrevious />
        </button>
        <button
          onClick={next}
          className="w-13 h-13 text-3xl flex items-center justify-center rounded-full cursor-pointer bg-gray-300"
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default Hero;
