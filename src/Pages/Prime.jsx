import React, { useState } from "react";

const Prime = () => {
  const [Num, setNum] = useState(null);
  const [Data, setData] = useState("");

  let checkPrime = () => {
    let num = parseInt(Num);
    if (num <= 1) {
      setData(`${num} is not a Prime Number`);
      return;
    }
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      setData(`${num} is a Prime Number`);
    } else {
      setData(`${num} is not a Prime Number`);
    }
  };

  return (
    <section className="p-10">
      <h1 className="text-5xl">What is a Prime Number?</h1>
      <hr className="mb-5" />
      <p className="text-sm">
        A prime number is a natural number greater than 1 that cannot be formed
        by multiplying two smaller natural numbers. In other words, a prime
        number has no positive divisors other than 1 and itself.
      </p>

      <div className="border border-l-8 border-black shadow rounded mt-8 mb-8">
        <h5 className="text-3xl font-bold m-5">Characteristics</h5>
        <p className="text-gray-700 text-sm ml-5 mr-5 mb-8">
          A prime number has exactly two distinct positive divisors: 1 and the
          number itself. Numbers greater than 1 that are not prime are called
          composite numbers.
        </p>
        <h5 className="text-3xl font-bold m-5">Examples</h5>
        <p className="text-gray-700 text-sm ml-5 mr-5 mb-8">
          2: The smallest and only even prime number. <br />
          3: Divisors are 1 and 3. <br />
          5: Divisors are 1 and 5. <br />
          7: Divisors are 1 and 7. <br />
          Subsequent prime numbers: 11, 13, 17, 19, 23, 29, ...
        </p>
      </div>

      <h5 className="text-3xl mb-6">Check if a Number is Prime</h5>
      <div className="relative mb-4">
        <input
          onChange={(e) => setNum(e.target.value)}
          type="number"
          placeholder="Enter a number"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-black ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-black focus:outline-none focus:ring-black/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            onClick={checkPrime}
            type="submit"
            aria-label="Check"
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

export default Prime;
