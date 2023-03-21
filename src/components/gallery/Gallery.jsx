import React from "react";
import { gallery } from "../../Data";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="wrapper my-32">
        <div data-aos="fade-up" data-aos-duration="600" className="text-center">
          <h1 className="text-2xl text-primary">Gallery</h1>
          <h2 className="text-4xl mt-2">Our Photo Gallery</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {gallery.map(({ img, title, id }) => {
            return (
              <div
                data-aos="zoom-in"
                data-aos-duration="400"
                className="relative group"
                key={id}
              >
                <img src={img} alt="gallery-img" className="img-cover" />

                <div className="absolute overflow-hidden group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 translate-y-10 opacity-0 bg-lightCoffee inset-2 rounded-md flex items-center flex-col justify-end gap-5 pb-4">
                  <span className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                    <AiOutlinePlusCircle className="text-6xl"></AiOutlinePlusCircle>
                  </span>
                  <button className="py-4 px-20 bg-secondary rounded-md">
                    {title}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
