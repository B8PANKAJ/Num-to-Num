import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "../src/Components/Loader.jsx";
import HomePage from "../src/Pages/HomePage.jsx";
import Error from "../src/Pages/Error.jsx";
import Factorial from "../src/Pages/Factorial.jsx";
import EvenandOdd from "../src/Pages/EvenandOdd.jsx";
import Strong from "../src/Pages/Strong.jsx";
import ArmStrong from "../src/Pages/ArmStrong.jsx";
import Happy from "../src/Pages/Happy.jsx";
import Prime from "../src/Pages/Prime.jsx";
import Reverse from "../src/Pages/Reverse.jsx";
import Palindrome from "../src/Pages/Palindrome.jsx";
import Perfect from "../src/Pages/Perfect.jsx";

function App() {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setisLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Error />} />
      <Route path="/Factorial" element={<Factorial />} />
      <Route path="/EvenandOdd" element={<EvenandOdd />} />
      <Route path="/Strong" element={<Strong />} />
      <Route path="/ArmStrong" element={<ArmStrong />} />
      <Route path="/Happy" element={<Happy />} />
      <Route path="/Prime" element={<Prime />} />
      <Route path="/Perfect" element={<Perfect />} />
      <Route path="/Reverse" element={<Reverse />} />
      <Route path="/Palindrome" element={<Palindrome />} />
    </Routes>
  );
}

export default App;
