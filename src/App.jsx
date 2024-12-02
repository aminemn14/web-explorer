import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

const App = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const data = [
    { option: "1", style: { backgroundColor: "#1D1B4B", textColor: "#fff" } },
    { option: "2", style: { backgroundColor: "#302E81", textColor: "#fff" } },
    { option: "3", style: { backgroundColor: "#3730A3", textColor: "#fff" } },
    { option: "4", style: { backgroundColor: "#4338CA", textColor: "#fff" } },
    { option: "5", style: { backgroundColor: "#5046E5", textColor: "#fff" } },
    { option: "6", style: { backgroundColor: "#6466F1", textColor: "#fff" } },
  ];

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="mb-5 text-2xl font-bold text-gray-800">Web Explorer</h1>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        spinDuration={0.15}
        onStopSpinning={() => setMustSpin(false)}
        outerBorderWidth={5}
        radiusLineWidth={2}
        fontSize={18}
      />
      <button
        onClick={handleSpinClick}
        className="mt-5 px-4 py-2 text-lg font-medium text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
      >
        Tourner la roue
      </button>
    </div>
  );
};

export default App;
