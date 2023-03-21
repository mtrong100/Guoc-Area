import React from "react";
import { about } from "../../Data";

const About = () => {
  const { img, smallTitle, title, caption, desc, btn1 } = about;
  return (
    <section className="overflow-x-hidden" id="about">
      <div className="wrapper my-20">
        <div className="grid lg:grid-cols-2 gap-10 place-items-center">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            className="w-full h-full bg-primary rounded-sm group"
          >
            <img
              src={img}
              alt="about-img"
              className="img-cover group-hover:-translate-y-0 group-hover:translate-x-0 transition-all duration-500 md:-translate-y-4 md:translate-x-4 group-hover:brightness-90"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            className="flex flex-col gap-5"
          >
            <span className="font-secondary text-primary text-xl">
              {smallTitle}
            </span>
            <h1 className="text-4xl lg:text-5xl">{title}</h1>
            <p>{caption}</p>
            <div className="flex flex-col gap-3">
              {desc.map(({ id, icon, text }) => {
                return (
                  <div className="flex items-center gap-3" key={id}>
                    <span className="text-3xl">{icon}</span>
                    <p className="text-sm md:text-base">{text}</p>
                  </div>
                );
              })}
            </div>
            <button className="btn-fill btn-shinny mt-3 w-max">{btn1}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
