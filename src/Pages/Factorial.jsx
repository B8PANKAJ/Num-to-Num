import React, { useState } from "react";

const Factorial = () => {
  const [Num, setNum] = useState("");
  const [Data, setData] = useState("");

  const checkFactorial = () => {
    const num = Number(Num); // Convert Num to a number type
    if (isNaN(num) || num < 0) {
      setData("Please enter a non-negative integer.");
      return;
    }

    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }
    setData(`The factorial of ${num} is ${fact}.`);
  };

  return (
    <section className="p-10">
      <h1 className="text-5xl">What is a Factorial Number?</h1>
      <hr className="mb-5" />
      <p className="text-sm">
        The factorial of a non-negative integer n, denoted as n!, is the product
        of all positive integers less than or equal to n. Factorials are used in
        various areas of mathematics, including algebra, calculus, and
        combinatorics.
      </p>

      <div className="border border-l-8 border-black shadow rounded mt-8 mb-8">
        <h5 className="text-3xl font-bold m-5">Definition</h5>
        <p className="text-gray-700 text-sm ml-5 mr-5 mb-8">
          For a non-negative integer n, the factorial of n is defined as:
          <br />
          n! = n × (n - 1) × (n - 2) × ... × 3 × 2 × 1
        </p>
        <h5 className="text-3xl font-bold m-5">Special Cases</h5>
        <p className="text-gray-700 text-sm ml-5 mr-5 mb-8">
          By convention, 0! is defined to be 1. <br />
          1! is also 1.
        </p>
        <h5 className="text-3xl font-bold m-5">Examples</h5>
        <p className="text-gray-700 text-sm ml-5 mr-5 mb-8">
          5! (5 factorial) is calculated as: 5! = 5 × 4 × 3 × 2 × 1 = 120 <br />
          3! (3 factorial) is calculated as: 3! = 3 × 2 × 1 = 6
        </p>
        <div className="bg-gray-100 pt-5 pb-5 border">
          <h5 className="text-3xl font-bold m-5">Formula</h5>
          <p className="text-gray-700 font-bold text-sm ml-5 mr-5">
            The factorial function is often defined recursively:
            <br />
            n! = n × (n - 1)!
            <br />
            0! = 1
          </p>
        </div>
      </div>

      <h5 className="text-3xl">Check the Factorial of a Number</h5>
      <div className="relative mt-6">
        <input
          type="number"
          onChange={(e) => setNum(e.target.value)}
          placeholder="Enter Here"
          autoComplete=""
          aria-label="Number input"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            onClick={checkFactorial}
            type="button"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-white hover:text-black hover:border-black hover:border-solid border-2 duration-300 px-8 py-2"
          >
            Check
          </button>
        </div>
      </div>
      <h5 className="text-3xl mt-4">Output: {Data}</h5>
    </section>
  );
};

export default Factorial;
