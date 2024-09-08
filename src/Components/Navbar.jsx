import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router

const Navbar = () => {
  return (
    <div className="text-black text-3xl pt-4 flex justify-between pl-3 pr-3 sticky">
      <div className="flex items-center">
        {" "}
        <h1 className="font-extrabold">Num to Num</h1>
      </div>

      <div className="relative group">
        <button className="border text-gray-50 duration-300 relative cursor-pointer overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2 font-extrabold hover:bg-white hover:text-black">
          <div className="absolute group-hover:-top-1 group-hover:-left-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-700 left-12 top-12 bg-yellow-500"></div>
          <div className="absolute group-hover:-top-1 group-hover:-left-2 z-10 w-12 h-12 rounded-full group-hover:scale-150 duration-700 left-20 -top-6 bg-orange-500"></div>
          <div className="absolute group-hover:-top-1 group-hover:-left-2 z-10 w-8 h-8 rounded-full group-hover:scale-150 duration-700 left-32 top-6 bg-pink-500"></div>
          <div className="absolute group-hover:-top-1 group-hover:-left-2 z-10 w-4 h-4 rounded-full group-hover:scale-150 duration-700 left-2 top-12 bg-red-600"></div>
          <p className="z-10 absolute bottom-2 left-2">See All</p>
        </button>

        {/* Dropdown List */}
        <div className="absolute right-0 mt-2 w-72 bg-white border rounded-md shadow-md hidden group-hover:block z-20">
          <div className="grid grid-cols-2 gap-4 p-4 text-xl">
            <li className="text-gray-800 cursor-pointer hover:bg-black hover:text-white rounded p-2 list-none">
              <Link to="/Factorial">Factorial</Link>
            </li>
            <li className="text-gray-800 cursor-pointer hover:bg-black hover:text-white rounded p-2 list-none">
              <Link to="/EvenandOdd">Even and Odd</Link>
            </li>
            <li className="text-gray-800 cursor-pointer hover:bg-black hover:text-white rounded p-2 list-none">
              <Link to="/Strong">Strong</Link>
            </li>
            <li className="text-gray-800 cursor-pointer hover:bg-black hover:text-white rounded p-2 list-none">
              <Link to="/ArmStrong">ArmStrong</Link>
            </li>
            <li className="text-gray-800 cursor-pointer hover:bg-black hover:text-white rounded p-2 list-none">
              <Link to="/Happy">Happy</Link>
            </li>
            <li className="text-gray-800 cursor-pointer hover:bg-black hover:text-white rounded p-2 list-none">
              <Link to="/Perfect">Perfect</Link>
            </li>
            <li className="text-gray-800 cursor-pointer hover:bg-black hover:text-white rounded p-2 list-none">
              <Link to="/Prime">Prime</Link>
            </li>
            <li className="text-gray-800 cursor-pointer hover:bg-black hover:text-white rounded p-2 list-none">
              <Link to="/Reverse">Reverse</Link>
            </li>
            <li className="text-gray-800 cursor-pointer hover:bg-black hover:text-white rounded p-2 list-none">
              <Link to="/Palindrome">Palindrome</Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
