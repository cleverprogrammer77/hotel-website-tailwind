import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* left side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=" "
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/1450372/pexels-photo-1450372.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=" "
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=" "
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/3426880/pexels-photo-3426880.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=" "
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=" "
        />
      </div>
      {/* right side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quam
          officiis iste.
        </p>
        <p className="pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit placeat,
          facere magnam nemo ducimus cum? Quidem qui quia magni obcaecati
          aliquid, cumque ad? Beatae, laudantium ut sit asperiores eos tenetur.
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn More
          </button>
          <button className="bg-black text-white border-black hover:shadow-xl">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
