import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="bg-white cs-font">
      <div id="wrapper" className="grid grid-cols-1 xl:grid-cols-2 xl:h-fit">
        <div
          id="col-1"
          className="bg-black px-12 pt-32 pb-40 md:px-32 xl:py-64 xl:px-32 rounded-r-3xl"
        >
          <h1 className="text-white font-extrabold text-3xl md:text-5xl">
            The <br />
            Num To <br />
            Num
          </h1>
          <p className="text-white text-normal md:text-3xl pt-3 md:pt-6 font-medium">
            The All types of numbers are Together
          </p>
        </div>
        <div id="col-2" className="px-3 md:px-20 xl:py-64 xl:px-12">
          <div
            id="cards"
            className="rounded-lg flex border py-5 px-6 md:py-8 md:px-16 -mt-6 bg-white xl:-ml-24 xl:pl-8 xl:rounded-xl"
          >
            <div
              id="circle"
              className="w-8 h-8 bg-black md:w-16 md:h-16 rounded-full"
            ></div>
            <p className="pl-4 md:pl-12 text-base pt-1 font-semibold md:text-2xl md:pt-4">
              Strong, ArmStrong, Palindrome, Happy
            </p>
          </div>
          <div
            id="cards"
            className="rounded-lg flex border py-5 px-6 md:py-8 md:px-16 mt-6 md:mt-12 bg-black xl:pl-8 xl:rounded-xl"
          >
            <div
              id="circle"
              className="w-8 h-8 bg-white md:w-16 md:h-16 rounded-full"
            ></div>
            <p className="pl-4 md:pl-12 text-base pt-1 font-semibold md:text-2xl md:pt-4 text-white">
              These are Numbers or not Let's Find ?
            </p>
          </div>
        </div>
      </div>
      <section className="container mx-auto px-6 p-10">
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2 pr-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Numbers</h4>
            <p className="text-black mb-8 text-justify">
              Numbers are fundamental elements in mathematics, essential for
              counting, measuring, and labeling. They form the basis of
              arithmetic and are used in various fields, from science and
              engineering to economics and everyday life. Numbers can be broadly
              categorized into different types, each with unique properties and
              characteristics. Understanding these different types can provide
              valuable insights into the diverse nature of numbers and their
              applications. <br />
              <b>Armstrong Numbers:</b> Also known as narcissistic numbers,
              these are numbers that are equal to the sum of their own digits
              each raised to the power of the number of digits. For example, 153
              is an Armstrong number because 1³ + 5³ + 3³ = 153. <br />
              <b>Palindrome Numbers:</b> These are numbers that remain the same
              when their digits are reversed. For example, 121 and 1331 are
              palindrome numbers. <br />
              <b>Strong Numbers:</b> A strong number is a special number whose
              sum of the factorial of digits is equal to the original number.
              For example, 145 is a strong number because 1! + 4! + 5! = 145.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="rounded-lg"
              src="https://img.freepik.com/free-vector/ink-number-collection_23-2147809298.jpg?size=626&ext=jpg&ga=GA1.1.514447686.1723003855&semt=ais_hybrid"
              alt="Number-png"
            />
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center gap-8 flex-wrap min-h-fit">
        <Link to="/Palindrome">
          <button className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
            Palindrome
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
              Explore!
            </span>
          </button>
        </Link>
        <Link to="/Prime">
          <button className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
            Prime
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
              Explore!
            </span>
          </button>
        </Link>
        <Link to="/ArmStrong">
          <button className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
            Armstrong
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
              Explore!
            </span>
          </button>
        </Link>
        <Link to="/Strong">
          <button className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
            Strong
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
              Explore!
            </span>
          </button>
        </Link>
        <Link to="/EvenandOdd">
          <button className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-[16px] font-bold cursor-pointer relative z-10 group">
            Even and Odd
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
              Explore!
            </span>
          </button>
        </Link>
        <Link to="/Factorial">
          <button className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
            Factorial
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
              Explore!
            </span>
          </button>
        </Link>
        <Link to="/Happy">
          <button className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
            Happy
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
              Explore!
            </span>
          </button>
        </Link>
        <Link to="/Perfect">
          <button className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
            Perfect
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
              Explore!
            </span>
          </button>
        </Link>
        <Link to="/Reverse">
          <button className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
            Reverse
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
              Explore!
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
