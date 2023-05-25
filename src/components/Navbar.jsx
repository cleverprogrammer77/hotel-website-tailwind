import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="absolute w-full justify-between flex p-4 items-center text-white ">
      <h1 className="text-white font-bold text-2xl z-20">Experiences</h1>
      <HiMenuAlt3
        size={25}
        className="z-20 text-white cursor-pointer "
        onClick={() => setNav(!nav)}
      />
      <div
        className={
          nav
            ? "ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          <li className="font-bold text-3xl p-8">Home</li>
          <li className="font-bold text-3xl p-8">Destinations</li>
          <li className="font-bold text-3xl p-8">Reservations</li>
          <li className="font-bold text-3xl p-8">Amenities</li>
          <li className="font-bold text-3xl p-8">Rooms</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;