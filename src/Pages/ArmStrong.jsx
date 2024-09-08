import React, { useState } from "react";

const ArmStrong = () => {
  const [Num, setNum] = useState("");
  const [Data, setData] = useState("");

  const checkArmstrong = () => {
    const num = Number(Num); // Convert the input number to an actual number type
    const numStr = String(num); // Convert the number to string to access individual digits
    const length = numStr.length; // Get the number of digits

    // Calculate the sum of each digit raised to the power of the length
    const sum = numStr
      .split("") // Split the digits
      .reduce((acc, digit) => acc + Math.pow(Number(digit), length), 0); // Calculate the Armstrong sum

    // Check if the sum is equal to the original number
    if (sum === num) {
      setData(`Yes! ${num} is an Armstrong Number.`);
    } else {
      setData(`No, ${num} is not an Armstrong Number.`);
    }
  };

  return (
    <section className="p-10 bg-white text-black">
      <h1 className="text-5xl font-bold mb-5">Armstrong Number Checker</h1>
      <p className="text-lg mb-6">
        An Armstrong number (also known as a Narcissistic number) is a number
        that equals the sum of its own digits, each raised to the power of the
        number of digits. Try out a number below to check if it's an Armstrong
        number.
      </p>

      <div className="border-l-8 border-black bg-white p-6 rounded mb-8 shadow-md">
        <h5 className="text-2xl font-bold mb-4">Armstrong Number Definition</h5>
        <p className="text-gray-700 text-lg">
          For a given number of digits, an Armstrong number is one that equals
          the sum of its own digits, each raised to the power of the number of
          digits.
        </p>
      </div>

      <div className="border-l-8 border-black bg-white p-6 rounded mb-8 shadow-md">
        <h5 className="text-2xl font-bold mb-4">Examples</h5>
        <p className="text-gray-700 text-lg mb-4">
          <b>Example 1:</b> Consider the number <b>153</b>. The number 153 has 3
          digits. If you take each digit and raise it to the power of 3 and then
          sum them up, you get:
          <br />
          <code>
            1<sup>3</sup> + 5<sup>3</sup> + 3<sup>3</sup> = 1 + 125 + 27 = 153
          </code>
        </p>
        <p className="text-gray-700 text-lg">
          <b>Example 2:</b> The number <b>9474</b> has 4 digits, and:
          <br />
          <code>
            9<sup>4</sup> + 4<sup>4</sup> + 7<sup>4</sup> + 4<sup>4</sup> = 6561
            + 256 + 2401 + 256 = 9474
          </code>
        </p>
      </div>

      <h5 className="text-2xl font-bold mb-4">
        Check if a Number is Armstrong
      </h5>
      <div className="relative mt-6">
        <input
          onChange={(e) => setNum(e.target.value)} // Set input value
          type="number"
          placeholder="Enter a number"
          aria-label="Number Input"
          className="block w-full rounded-xl border border-black bg-white py-3 px-4 text-lg text-black focus:outline-none focus:ring-2 focus:ring-black"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <button
            onClick={checkArmstrong} // Call checkArmstrong on button click
            type="button"
            className="rounded-xl bg-black text-white py-2 px-4 ml-2 hover:bg-gray-800 transition"
          >
            Check
          </button>
        </div>
      </div>

      <h5 className="text-3xl font-bold mt-6">Result:</h5>
      <p className="text-2xl mt-4 text-black">{Data}</p>
    </section>
  );
};

export default ArmStrong;
