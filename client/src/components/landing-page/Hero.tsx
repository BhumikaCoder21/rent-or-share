"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
const thoughts = [
  "Thinking of going to college?",

  "Why ride alone?",

  "Split rides. Split costs.",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % thoughts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-[60vh] md:h-[70vh] min-h-[500px] flex items-center justify-center px-6 text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/banner.png')" }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-3xl">
        <div className="h-[60px] overflow-hidden flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg"
            >
              {thoughts[index]}
            </motion.h2>
          </AnimatePresence>
        </div>

        <p className="mt-6 text-lg md:text-xl text-gray-200 font-medium leading-relaxed drop-shadow-md">
          A trusted ride sharing & scooty rental platform exclusively for your
          college.
        </p>
      </div>
    </section>
  );
}
