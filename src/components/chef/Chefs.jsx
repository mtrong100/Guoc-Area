import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { chef } from "../../Data";

const Chefs = () => {
  return (
    <section id="chefs">
      <div className="wrapper my-32">
        <div className="text-center">
          <h1 className="text-2xl text-primary">Chefs</h1>
          <h2 className="text-4xl mt-2">Meet Our Chefs</h2>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
          {chef.map(({ img, name, chef, id }) => {
            return (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="bg-secondary border-primary border-b-2"
                key={id}
              >
                <div className="group overflow-hidden rounded-md relative">
                  <img
                    src={img}
                    alt="chefs"
                    className="img-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute overflow-hidden group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-10 opacity-0 bg-lightCoffee inset-0 rounded-md flex gap-5 pb-4">
                    <span className="absolute flex transition-all flex-col gap-3 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                      <BsFacebook className="text-2xl"></BsFacebook>
                      <BsInstagram className="text-2xl"></BsInstagram>
                      <BsTwitter className="text-2xl"></BsTwitter>
                      <BsLinkedin className="text-2xl"></BsLinkedin>
                    </span>
                  </div>
                </div>
                <div className="text-center py-5">
                  <h1 className="text-xl text-primary mb-2">{name}</h1>
                  <h3>{chef}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Chefs;
