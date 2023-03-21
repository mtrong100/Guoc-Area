import React from "react";
import { stats } from "../../Data";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <section className="bg-secondary">
      <div className="wrapper py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-10">
          {stats.map(({ id, img, total, text }) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="400"
                className="flex flex-col items-center gap-6"
                key={id}
              >
                <div className="w-[80px] bg-lightPrimary rounded-full p-5">
                  <img src={img} alt="" className="img-cover" />
                </div>
                <CountUp
                  end={total}
                  duration={8}
                  className="text-4xl md:text-5xl"
                >
                  {total}
                </CountUp>
                <h3 className="text-primary">{text}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
