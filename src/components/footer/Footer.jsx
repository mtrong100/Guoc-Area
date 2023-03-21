import React from "react";
import { footer } from "../../Data";

const Footer = () => {
  const { info, details } = footer;

  return (
    <section className="bg-secondary">
      <div className="wrapper mt-32 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5 place-items-center">
          <div
            data-aos="fade-up"
            data-aos-duration="300"
            className="text-white text-center md:text-start"
          >
            <a
              className="text-3xl text-primary lg:text-4xl font-secondary font-bold"
              href="#home"
            >
              GUOC AREA
            </a>
            <div className="mt-5">
              {info.map(({ icon, text, id }) => {
                return (
                  <div className="flex flex-col h-full gap-4" key={id}>
                    <span className="flex items-center gap-3">
                      {icon}
                      <p>{text}</p>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          {details.map(({ title, links, id }) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="400"
                className="text-white flex flex-col items-center lg:items-start gap-3"
                key={id}
              >
                <h2 className="uppercase text-primary font-semibold text-lg">
                  {title}
                </h2>
                {links.map((item, index) => {
                  return (
                    <ul key={index}>
                      <li>
                        <a
                          className="text-sm hover:text-primary capitalize md:text-base font-medium"
                          href="#"
                        >
                          {item}
                        </a>
                      </li>
                    </ul>
                  );
                })}
              </div>
            );
          })}
        </div>
        {/* footer bottoms */}
        <p className="text-sm md:text-base text-center font-medium mt-14 text-white">
          @Copyright 2023. All Right Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
