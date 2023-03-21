import React from "react";
import { offer } from "../../Data";
import Video from "../../assets/images/coffee-video.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Offer = () => {
  return (
    <section>
      <div className="h-screen relative flex items-center justify-center">
        <video
          className="brightness-50 img-cover"
          autoPlay
          muted
          loop
          playsInline
          src={Video}
        ></video>
        <div className="absolute wrapper w-full">
          <div className="text-center">
            <h1 className="text-2xl text-primary">Offer</h1>
            <h2 className="text-4xl mt-2">Special Offer For You</h2>
          </div>
          <div className="mt-10">
            <Swiper
              slidesPerView={"auto"}
              loop={true}
              grabCursor={true}
              autoplay={{
                delay: 2000,
              }}
              modules={[Autoplay]}
            >
              {offer.map((item, id) => {
                const { img, title, discount, description } = item;
                return (
                  <SwiperSlide key={id}>
                    <div className=" grid lg:grid-cols-2 place-items-center">
                      <div className="group overflow-hidden rounded-md">
                        <img
                          src={img}
                          alt="photo-img"
                          className="img-cover group-hover:scale-105 transition-all duration-500"
                        />
                      </div>
                      <div className="p-10 h-full relative offer-cover bg-secondary flex flex-col justify-center items-start gap-3 md:gap-5">
                        <h1 className="text-3xl font-semibold">{title}</h1>
                        <h3>{discount}</h3>
                        <p className="text-start text-sm md:text-base">
                          {description}
                        </p>
                        <button className="btn-fill btn-shinny flex w-full justify-center md:w-fit">
                          Offer now
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
