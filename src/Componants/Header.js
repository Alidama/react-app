import React from "react";
import { FilmIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <div className="border flex flex-grow flex-shrink justify-around items-center p-1  text-center mb-5 shadow-lg sm:text-lg  w-1/2  border-dashed hover:bg-gray-200 hover:border-gray-900 border-gray-900 bg-gray-100 font-bold md:font-extrabold sm:p-2 md:p-2 md:text-xl l:text-2xl xl:text-2xl xl:w-1/4  md:w-1/2 mx-auto mt-5 rounded-lg md:rounded-2lg lg:p-3 xl:p-5  uppercase ">
      <FilmIcon className="h-6 w-6 text-blue-500" />
      My movies
      <FilmIcon className="h-6 w-6 text-blue-500" />
    </div>
  );
}

export default Header;
