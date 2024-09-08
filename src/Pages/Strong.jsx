import React, { useState } from "react";

const Strong = () => {
  const [Num, setNum] = useState(null);
  const [Data, setData] = useState("");

  const checkStrong = () => {
    const factorial = (n) => {
      if (n === 0 || n === 1) return 1;
      return n * factorial(n - 1);
    };

    let num = Number(Num);
    let sum = 0;
    let temp = num;
    while (temp > 0) {
      const digit = temp % 10;
      sum += factorial(digit);
      temp = Math.floor(temp / 10);
    }
    if (sum === num) {
      setData(`${num} is a Strong Number`);
    } else {
      setData(`${num} is not a Strong Number`);
    }
  };

  return (
    <section className="p-10 bg-white text-black">
      <h1 className="text-5xl mb-4">Strong Number</h1>
      <hr className="border-black mb-5" />
      <p className="text-sm mb-6">
        A strong number is a number where the sum of the factorials of its
        digits equals the number itself. For example, 145 is a strong number
        because 1! + 4! + 5! = 145.
      </p>

      <div className="border border-l-8 border-black shadow-md rounded mb-8">
        <h5 className="text-3xl font-bold m-5">Examples</h5>
        <p className="text-black text-sm ml-5 mr-5 mb-8">
          145: 1! + 4! + 5! = 145 <br />
          2: 2! = 2 <br />
        </p>
      </div>

      <h5 className="text-3xl mb-6">Check if a Number is a Strong Number</h5>
      <div className="relative mb-4">
        <input
          onChange={(e) => setNum(e.target.value)}
          type="number"
          placeholder="Enter a number"
          className="block w-full rounded-xl border border-neutral-600 bg-transparent py-4 pl-6 pr-20 text-black ring-4 ring-transparent transition placeholder:text-neutral-400 focus:border-black focus:outline-none focus:ring-black/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            onClick={checkStrong}
            type="submit"
            className="flex h-full items-center justify-center rounded-xl bg-black text-white px-4 py-2 transition hover:bg-white hover:text-black hover:border-black hover:border-solid border-2 duration-300"
          >
            Check
          </button>
        </div>
      </div>
      <h5 className="text-3xl mt-4">Output: {Data}</h5>
    </section>
  );
};

export default Strong;
