import React from 'react';
import tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from 'react-tilt';
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-20px font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] ml-4"
      >
        Leonardo of Pisa, commonly known as Fibonacci, was a renowned Italian mathematician of the Middle Ages, born around 1170. His seminal work "Liber Abaci" (Book of Calculation) introduced Europe to the Hindu-Arabic numeral system and its arithmetic operations, revolutionizing mathematical computation in the Western world. Fibonacci is best remembered for his eponymous sequence, where each number is the sum of the two preceding ones (0, 1, 1, 2, 3, 5, 8, 13, and so forth), which surprisingly appears in various natural phenomena, artistic designs, and financial markets, illustrating its wide-ranging applications in diverse fields of study.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");