import React from "react";

const Reservation = () => {
  return (
    <section className="bg-reservationBg bg-cover min-h-screen flex items-center bg-center bg-no-repeat">
      <div className="wrapper py-10 w-full">
        <div className="text-center">
          <h1 className="text-2xl text-primary">Reservation</h1>
          <h2 className="text-4xl mt-2">Book A Table</h2>
        </div>
        {/* booking section */}
        <div className="mt-10 grid md:grid-cols-2 gap-3 md:gap-5">
          <div className="border border-dashed border-primary rounded-md">
            <input
              type="text"
              className="bg-third p-4 rounded-md w-full"
              placeholder="Enter your name"
            />
          </div>
          <div className="border border-dashed border-primary rounded-md">
            <input
              type="email"
              className="bg-third p-4 rounded-md w-full"
              placeholder="Enter your email"
            />
          </div>
          <div className="border border-dashed border-primary rounded-md">
            <input
              type="date"
              className="bg-third p-4 rounded-md w-full"
              placeholder="Enter your name"
            />
          </div>
          <div className="border border-dashed border-primary rounded-md">
            <input
              type="time"
              className="bg-third p-4 rounded-md w-full"
              placeholder="Enter your name"
            />
          </div>
        </div>
        <textarea
          className="resize-none w-full p-3 bg-third outline-none mt-10 border border-dashed border-primary rounded-md min-h-[150px]"
          placeholder="Write something..."
        ></textarea>
        <button className="btn-fill btn-shinny w-full md:w-fit md:flex mx-auto mt-10">
          Book a table
        </button>
      </div>
    </section>
  );
};

export default Reservation;
