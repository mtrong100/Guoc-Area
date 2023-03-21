import React from "react";
import { menu } from "../../Data";

const Menu = () => {
  return (
    <section
      className="bg-menuBg bg-cover min-h-screen flex items-center bg-center bg-no-repeat"
      id="menu"
    >
      <div className="wrapper w-full py-8">
        <div data-aos="fade-up" data-aos-duration="600" className="text-center">
          <h1 className="text-2xl text-primary">Our Menu</h1>
          <h2 className="text-4xl mt-2">Let's Check Our Menu</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-5 place-items-center">
          {menu.map((item, id) => {
            const { img, title, description, price } = item;
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
                className="w-full flex items-center justify-between bg-secondary rounded-md p-4 hover:bg-third bg-opacity-90"
                key={id}
              >
                <div className="flex items-center gap-4">
                  <div className="w-[50px]">
                    <img
                      src={img}
                      alt="menu-img"
                      className="img-cover rounded-full"
                    />
                  </div>
                  <span>
                    <h3 className="md:text-xl text-primary">{title}</h3>
                    <p className="text-sm pt-2 lg:text-base">{description}</p>
                  </span>
                </div>
                <span className="text-lg md:text-2xl border-l-2 border-dashed border-primary pl-5 text-primary">{`$${price}`}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
