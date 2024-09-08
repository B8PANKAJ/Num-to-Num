import React, { useState } from "react";

const Perfect = () => {
  const [Num, setNum] = useState(null);
  const [Data, setData] = useState("");

  const checkPerfect = () => {
    let num = parseInt(Num);
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    if (num === sum) {
      setData(`${num} is a Perfect Number`);
    } else {
      setData(`${num} is not a Perfect Number`);
    }
  };

  return (
    <section className="p-10">
      <h1 className="text-5xl">What is a Perfect Number?</h1>
      <hr className="mb-5" />
      <p className="text-sm">
        A perfect number is a positive integer that is equal to the sum of its
        proper divisors (excluding the number itself). In other words, the
        number is perfect if the sum of its divisors equals the number.
      </p>

      <div className="border border-l-8 border-black shadow rounded mt-8 mb-8">
        <h5 className="text-3xl font-bold m-5">Characteristics</h5>
        <p className="text-gray-700 text-sm ml-5 mr-5 mb-8">
          For a number to be perfect, the sum of all its divisors (excluding the
          number itself) must be equal to the number. Examples: 6, 28, and 496
          are perfect numbers because:
          <br />
          - 6: 1 + 2 + 3 = 6
          <br />- 28: 1 + 2 + 4 + 7 + 14 = 28
        </p>
      </div>

      <h5 className="text-3xl">Check if a Number is Perfect</h5>
      <div className="relative mt-6">
        <input
          onChange={(e) => setNum(e.target.value)}
          type="number"
          placeholder="Enter a number"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            onClick={checkPerfect}
            type="submit"
            aria-label="Submit"
            className="flex h-full items-center justify-center rounded-xl bg-neutral-950 text-white px-4 py-2 transition hover:bg-white hover:text-black hover:border-black hover:border-solid border-2 duration-300"
          >
            Check
          </button>
        </div>
      </div>
      <h5 className="text-3xl mt-4">Output: {Data}</h5>
    </section>
  );
};

export default Perfect;
