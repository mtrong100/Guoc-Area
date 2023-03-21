import React from "react";
import { features } from "../../Data";

const Features = () => {
  return (
    <section id="features">
      <div className="wrapper my-20">
        <div data-aos="fade-up" data-aos-duration="300" className="text-center">
          <h1 className="text-2xl text-primary">Features</h1>
          <h2 className="text-4xl mt-2">Our Best Features</h2>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
          {features.map((item, id) => {
            const { img, title, description } = item;
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="300"
                className="bg-secondary py-8 px-5 justify-center hover:-translate-y-2 transition-all duration-500  relative flex flex-col gap-4 feature-cover"
                key={id}
              >
                <div className="w-[50px]">
                  <img src={img} alt="features-img" className="img-cover" />
                </div>
                <h3 className="text-2xl">{title}</h3>
                <p className="text-grayColor text-sm">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
