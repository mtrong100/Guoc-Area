import React from "react";
import { why } from "../../Data";

const Choose = () => {
  const { img, smallTitle, title, caption, desc } = why;
  return (
    <section>
      <div className="wrapper my-32">
        <div className="grid lg:grid-cols-2 gap-5 place-items-center">
          <div className="flex flex-col gap-5">
            <span
              data-aos="fade-up"
              data-aos-duration="200"
              className="font-secondary text-primary"
            >
              {smallTitle}
            </span>
            <h1
              data-aos="fade-up"
              data-aos-duration="100"
              className="text-3xl md:text-4xl"
            >
              {title}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="200"
              className="text-grayColor"
            >
              {caption}
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="flex flex-col gap-4"
            >
              {desc.map(({ icon, text, id }) => {
                return (
                  <div className="flex gap-5 items-center" key={id}>
                    <div className="w-[100px] border-cover rounded-full p-3">
                      <img src={icon} alt="" className="img-cover" />
                    </div>
                    <span>
                      <h3 className="text-base md:text-lg text-primary">
                        {text}
                      </h3>
                      <p className="text-xs text-grayColor md:text-sm">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Soluta accusamus nihil repellendus voluptas earum
                      </p>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="400"
            className="border-cover rounded-md group overflow-hidden"
          >
            <img
              src={img}
              alt="why-img"
              className="img-cover group-hover:hover:scale-110 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
