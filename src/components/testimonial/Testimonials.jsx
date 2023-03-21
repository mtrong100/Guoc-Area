import React from "react";
import { testimonials } from "../../Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { RiStarSFill } from "react-icons/ri";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="wrapper mt-20">
        <div className="text-center">
          <h1 className="text-2xl text-primary">Testimonials</h1>
          <h2 className="text-4xl mt-2">Client's Reviews</h2>
        </div>
        <div className="mt-10">
          <Swiper
            slidesPerView={3}
            loop={true}
            spaceBetween={30}
            grabCursor={true}
            autoplay={{
              delay: 2000,
            }}
            modules={[Autoplay]}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
          >
            {testimonials.map(({ img, title, service, description, id }) => {
              return (
                <SwiperSlide key={id}>
                  <div className="bg-third">
                    <p className="text-sm md:text-base p-4 bg-lightPrimary relative arrow-down">
                      {description}
                    </p>
                    <div className="flex items-center gap-4 mt-5 p-4">
                      <img
                        className="rounded-full border-2 border-dashed border-primary"
                        src={img}
                        alt="client-img"
                      />
                      <span className="flex flex-col gap-2">
                        <h1 className="text-primary text-xl">{title}</h1>
                        <p>{service}</p>
                        <span className="flex items-center gap-1">
                          <RiStarSFill></RiStarSFill>
                          <RiStarSFill></RiStarSFill>
                          <RiStarSFill></RiStarSFill>
                          <RiStarSFill></RiStarSFill>
                          <RiStarSFill></RiStarSFill>
                        </span>
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
