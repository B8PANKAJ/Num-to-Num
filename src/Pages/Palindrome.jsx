import React, { useState } from "react";

const Palindrome = () => {
  const [Num, setNum] = useState(null);
  const [Data, setData] = useState("");

  const checkPalindrome = () => {
    let num = Num;
    let rev = 0;
    let originalNum = num;

    while (num != 0) {
      let rem = num % 10;
      rev = rev * 10 + rem;
      num = Math.floor(num / 10);
    }

    if (rev == originalNum) {
      setData(`${originalNum} is a Palindrome Number`);
    } else {
      setData(`${originalNum} is not a Palindrome Number`);
    }
  };

  return (
    <section className="p-10">
      <h1 className="text-5xl">What is a Palindrome Number?</h1>
      <hr className="mb-5" />
      <p className="text-sm">
        A palindrome number is a number that remains the same when its digits
        are reversed. In other words, it reads the same backward as forward.
      </p>

      <div className="border border-l-8 border-black shadow rounded mt-8 mb-8">
        <h5 className="text-3xl font-bold m-5">Examples</h5>
        <p className="text-gray-700 text-sm ml-5 mr-5 mb-8">
          121: When reversed, it is still 121. <br />
          12321: When reversed, it is still 12321. <br />
          4554: When reversed, it is still 4554. <br />
        </p>
      </div>

      <h5 className="text-3xl">Check if a Number is Palindrome</h5>
      <div className="relative mt-6">
        <input
          onChange={(e) => setNum(e.target.value)}
          type="number"
          placeholder="Enter Number"
          autoComplete=""
          aria-label="Enter Number"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            onClick={checkPalindrome}
            type="submit"
            aria-label="Submit"
            className="px-4 py-2 rounded-xl bg-neutral-950 text-white transition hover:bg-white hover:text-black hover:border-black hover:border-solid border-2 duration-300"
          >
            Check
          </button>
        </div>
      </div>
      <h5 className="text-3xl mt-4">Output: {Data}</h5>
    </section>
  );
};

export default Palindrome;
