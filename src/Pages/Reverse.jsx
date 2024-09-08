import React, { useState } from "react";

const Reverse = () => {
  const [Num, setNum] = useState(null);
  const [Data, setData] = useState("");

  let reverseNumber = () => {
    let num2 = Num;
    let rev = 0;
    while (num2 !== 0) {
      let rem = num2 % 10;
      rev = rev * 10 + rem;
      num2 = Math.floor(num2 / 10);
    }
    setData(`This is the reverse Number: ${rev}`);
  };

  return (
    <section className="p-10">
      <h1 className="text-5xl">What is Reverse Number</h1>
      <hr className="mb-5" />
      <p className="text-sm">
        A reverse number is formed by reversing the digits of a given number.
        For example, if you reverse the digits of 123, you get 321.
      </p>

      <div className="border border-l-8 border-black shadow rounded mt-8 mb-8">
        <h5 className="text-3xl font-bold m-5">Definition</h5>
        <p className="text-gray-700 text-sm ml-5 mr-5 mb-8">
          Reversing a number means rearranging the digits of the number in the
          reverse order.
        </p>
      </div>

      <h5 className="text-3xl">Enter here to Reverse the Number</h5>
      <div className="relative mt-6">
        <input
          type="number"
          onChange={(e) => setNum(e.target.value)}
          placeholder="Enter a number"
          autoComplete=""
          aria-label="number"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            onClick={reverseNumber}
            type="submit"
            aria-label="Reverse"
            className="flex h-full items-center justify-center rounded-xl bg-neutral-950 text-white px-4 py-2 transition hover:bg-white hover:text-black hover:border-black hover:border-solid border-2 duration-300"
          >
            Reverse
          </button>
        </div>
      </div>
      <h5 className="text-3xl mt-4">Output: {Data}</h5>
    </section>
  );
};

export default Reverse;
