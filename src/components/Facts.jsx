import React from "react";
import { motion } from "framer-motion";

const FunFacts = () => {
  const facts = [
    {
      text: "One of the most famous problems posed by Fibonacci involves the reproduction of rabbits. In Fibonacci's book 'Liber Abaci,' he describes a hypothetical scenario where a pair of rabbits reproduce every month, beginning with a single pair. The problem asks how many pairs of rabbits will be present after a certain number of months. This playful problem not only demonstrates the Fibonacci sequence but also showcases Fibonacci's ability to use storytelling to explain mathematical concepts.",
    },
    {
      text: "Math enthusiasts and fans of Fibonacci celebrate 'Fibonacci Day' on November 23rd (11/23) each year. This date is chosen because the first four numbers of the Fibonacci sequence are 1, 1, 2, and 3, coinciding with the month and day. It's a day to appreciate the beauty of mathematics and Fibonacci's contributions to the field.",
    },
    {
      text: "Fibonacci traveled extensively as a merchant's son, which exposed him to various mathematical concepts from different cultures.",
    },
    {
      text: "Legend has it that Fibonacci wrote a manuscript titled 'Flos,' which contained even more mathematical treasures beyond what was included in 'Liber Abaci.' However, this manuscript has never been found, leading to speculation and intrigue among mathematicians and historians. The mystery of the lost manuscript adds an element of adventure to Fibonacci's story, inspiring curiosity about what mathematical wonders it might have contained.",
    },
    {
      text: "Fibonacci is also known as Leonardo of Pisa, named after the city of his birthplace in Italy.",
    },
  ];

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className="bg-tertiary rounded-t-lg px-8 py-6 min-h-[300px]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <h2 className="text-white text-4xl font-bold">Fun Facts</h2>
        </motion.div>
      </div>
      <div className="-mt-20 pb-14 px-8 flex flex-wrap gap-7">
        {facts.map((fact, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
            <div className="bg-black-200 p-6 rounded-3xl w-full">
              <div className="mt-1">
                <p className="text-white tracking-wider text-[18px]">{fact.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FunFacts;
