import React from "react";
import { Barbell } from "@phosphor-icons/react";

function Header() {
  return (
    <div className="flex justify-between items-center flex-basis-4 fixed w-full z-20">
      {/* logo */}
      <div className="flex justify-center items-center font-bold ml-10 mt-10 ">
        <span className="mr-2 mt-.5">
          <Barbell size={32} color="white" />
        </span>
        <p className="text-lg text-gray-300">
          Jayam <span className="text-orange-600">gym</span>
        </p>
      </div>

      {/* contact now */}

      <button className="z-10 mr-10 mt-10 font-semibold p-2 border-solid  border-2 border-spacing-5 border-gray-300 hover:border-gray-900 text-gray-300 bg-gray-900 transition ease-in-out rounded-sm hover:shadow-md cursor-pointer">
        Contact now
      </button>
    </div>
  );
}

export default Header;

//
