import React, { useState } from "react";

const Happy = () => {
  const [Num, setNum] = useState(null);
  const [Data, setData] = useState(""); // Correct initial state

  const checkHappy = () => {
    let num = Number(Num); // Convert Num to a number type
    const seen = new Set(); // To track numbers already seen

    // Helper function to calculate sum of squares of digits
    const sumOfSquares = (n) => {
      return String(n)
        .split("") // Split digits
        .reduce((sum, digit) => sum + Math.pow(Number(digit), 2), 0); // Calculate sum of squares
    };

    // Main logic to check for happy number
    while (num !== 1 && !seen.has(num)) {
      seen.add(num); // Add current number to the set
      num = sumOfSquares(num); // Update the number with the sum of squares
    }

    // Check the result and update the state
    if (num === 1) {
      setData(`This ${Num} is a Happy Number`);
    } else {
      setData(`This ${Num} is not a Happy Number`);
    }
  };

  return (
    <section className="p-10">
      <h1 className="text-5xl">What is a Happy Number</h1>
      <hr className="mb-5" />
      <p className="text-sm">
        A happy number is a number which eventually reaches 1 when replaced by
        the sum of the squares of its digits. If it loops endlessly and never
        reaches 1, it is an unhappy (or sad) number.
      </p>

      <div className="border border-l-8 border-black shadow rounded mt-8 mb-8">
        <h5 className="text-3xl font-bold m-5">Examples</h5>
        <p className="text-gray-700 text-sm ml-5 mr-5 mb-8">
          19 is a happy number because: <br />
          1² + 9² = 82 <br />
          8² + 2² = 68 <br />
          6² + 8² = 100 <br />
          1² + 0² + 0² = 1 <br />
          Since the sum of the squares reaches 1, 19 is a happy number.
        </p>
      </div>

      <h5 className="text-3xl">Check if a Number is Happy</h5>
      <div className="relative mt-6">
        <input
          onChange={(e) => setNum(e.target.value)} // Set the input value
          type="number"
          placeholder="Enter Here"
          autoComplete=""
          aria-label="number input"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            onClick={checkHappy} // Call checkHappy on click
            type="button"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-white hover:text-black hover:border-black hover:border-solid border-2 duration-300 px-8 py-6"
          >
            Check
          </button>
        </div>
      </div>
      <h5 className="text-3xl mt-4">Output: {Data}</h5>
    </section>
  );
};

export default Happy;
