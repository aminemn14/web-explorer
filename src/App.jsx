import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { motion } from "framer-motion";

const App = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [showModal, setShowModal] = useState(false);

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

  const handleStopSpinning = () => {
    setMustSpin(false);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        spinDuration={0.15}
        onStopSpinning={handleStopSpinning}
        outerBorderWidth={5}
        radiusLineWidth={2}
        fontSize={24}
      />
      <button
        onClick={handleSpinClick}
        className="mt-5 px-4 py-2 text-lg font-medium text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
      >
        Tourner la roue
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="bg-white rounded-lg shadow-lg px-12 py-8 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800">
              Vous avez tiré le chiffre <br />
              <br />
              <span className="text-5xl font-semibold text-indigo-500">
                {data[prizeNumber].option}
              </span>
            </h2>

            <button
              onClick={closeModal}
              className="mt-12 px-4 py-2 text-white text-xl bg-indigo-500 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
            >
              Fermer
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default App;
