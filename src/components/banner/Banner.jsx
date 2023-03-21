import React from "react";
import { banner } from "../../Data";

const Banner = () => {
  const { smallTitle, title, caption, button1, button2 } = banner;
  return (
    <section
      id="home"
      className="flex bg-homeBg bg-center bg-cover bg-no-repeat items-center min-h-screen"
    >
      <div className="wrapper w-full">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="max-w-2xl flex flex-col gap-4 md:gap-6 justify-start"
        >
          <span className="font-secondary text-primary text-xl">
            {smallTitle}
          </span>
          <h1 className="text-4xl md:text-6xl">{title}</h1>
          <p>{caption}</p>
          <div className="flex items-center gap-5">
            <button className="btn-fill btn-shinny">{button1}</button>
            <button className="btn-border">{button2}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
