import React from 'react';

const Future = () => {
  return (
    <div className="bg-black text-white py-12 px-6 sm:px-12 lg:px-24 flex items-center">
      <div className="max-w-3xl mr-12">
        <h2 className="text-4xl font-bold mb-8">Changing the Future</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Leonardo Fibonacci's contributions to mathematics have had a profound impact on shaping the future
          of various fields. Here are some key ways he changed the course of history:
        </p>
        <ul className="list-disc list-inside mb-8">
          <li className="text-lg">Introduction of the Fibonacci sequence, a fundamental mathematical concept, which has applications in numerous fields including mathematics, computer science, biology, and art.</li>
          <li className="text-lg">Popularization of the Hindu-Arabic numeral system in Europe through his book "Liber Abaci," which revolutionized arithmetic and laid the foundation for modern mathematics.</li>
          <li className="text-lg">Advancement of mathematical knowledge and techniques in Europe, contributing to the Renaissance and paving the way for further developments in science, technology, and commerce.</li>
          <li className="text-lg">Inspiration for future generations of mathematicians, scientists, and thinkers, who continue to build upon Fibonacci's work and push the boundaries of human knowledge.</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Leonardo Fibonacci's legacy continues to resonate in the present day, reminding us of the power of
          curiosity, innovation, and perseverance in shaping the future.
        </p>
      </div>
      <div className="flex-1">
        {/* Add your image component here */}
        <img src="https://images.immediate.co.uk/production/volatile/sites/7/2019/07/30-GettyImages-470534616-9da3b69.jpg" alt="leaning tower of pisa" />
      </div>
    </div>
  );
};

export default Future;
