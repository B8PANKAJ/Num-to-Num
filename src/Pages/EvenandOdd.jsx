import React, { useState } from "react";

const EvenAndOdd = () => {
  const [Num, setNum] = useState("");
  const [Data, setData] = useState("");

  const checkNum = () => {
    const num = Number(Num); // Convert Num to a number type
    if (isNaN(num)) {
      setData("Please enter a valid number.");
      return;
    }

    if (num % 2 === 0) {
      setData(`This number ${num} is Even.`);
    } else {
      setData(`This number ${num} is Odd.`);
    }
  };

  return (
    <section className="p-10">
      <h1 className="text-5xl">What are Even and Odd Numbers?</h1>
      <hr className="mb-5" />
      <p className="text-sm">
        In mathematics, numbers are categorized into even and odd. Even numbers
        are integers divisible by 2 without any remainder, while odd numbers
        have a remainder of 1 when divided by 2. This basic classification helps
        in understanding various mathematical operations and properties.
      </p>

      <div className="border border-l-8 border-black shadow rounded mt-8 mb-8">
        <h5 className="text-3xl font-bold m-5">Definition</h5>
        <p className="text-gray-700 text-sm ml-5 mr-5 mb-8">
          An even number is an integer that is exactly divisible by 2, i.e., it
          has no remainder when divided by 2. Examples include 0, 2, 4, 6, etc.
          <br />
          An odd number is an integer that is not divisible by 2, i.e., it has a
          remainder of 1 when divided by 2. Examples include 1, 3, 5, 7, etc.
        </p>
        <h5 className="text-3xl font-bold m-5">Examples</h5>
        <p className="text-gray-700 text-sm ml-5 mr-5 mb-8">
          - 8 is an even number because 8 % 2 = 0
          <br />- 15 is an odd number because 15 % 2 = 1
        </p>
      </div>

      <h5 className="text-3xl">Check if a Number is Even or Odd</h5>
      <div className="relative mt-6">
        <input
          type="number"
          placeholder="Enter Here"
          autoComplete=""
          aria-label="Number input"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
          onChange={(e) => setNum(e.target.value)}
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            onClick={checkNum}
            type="button"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-white hover:text-black hover:border-black hover:border-solid border-2 duration-300 px-8 py-3"
          >
            Check
          </button>
        </div>
      </div>
      <h5 className="text-3xl mt-4">Output: {Data}</h5>
    </section>
  );
};

export default EvenAndOdd;
