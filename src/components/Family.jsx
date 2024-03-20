import React from 'react';

const Family = () => {
  const familyMembers = [
    {
      name: "Leonardo Fibonacci",
      role: "Father",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXgBZWDY2bqvvNL1fEe8ZlW634nfWYOKyMZOXtSrZ9VMwBUdni",
      description: "Leonardo Fibonacci, also known as Leonardo of Pisa, was an Italian mathematician who introduced the Fibonacci sequence to the Western world.",
      facts: [
        "Fibonacci was born around 1170 in Pisa, Italy.",
        "He is best known for his work Liber Abaci (Book of Calculation), which introduced the Fibonacci sequence to Western mathematics.",
        "Fibonacci's father was Guilielmo Bonacci, a wealthy Italian merchant.",
        "He traveled extensively with his father, which exposed him to different mathematical ideas from various cultures.",
        "Fibonacci married and had at least two children, although not much is known about his family life."
      ]
    },
    {
      name: "Marie Muntopoly",
      role: "Spouse",
      avatar: "data:image/jpeg;base64,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",
      description: "Not much is known about Fibonacci's wife, including her name or background.",
      facts: [
        "Fibonacci's wife played a supportive role in his life, although historical records provide limited information about her.",
        "She likely managed the household affairs while Fibonacci pursued his mathematical studies and travels.",
        "Her influence on Fibonacci's work is not well-documented, but she may have provided encouragement and support."
      ]
    },
    {
      name: "Fibonacci's Children",
      role: "Children",
      avatar: "https://www.springboardstories.co.uk/media/k2/items/cache/e9ade54bcd41c186f40b423e5c4dc324_L.jpg",
      description: "Fibonacci had at least two children, but details about them are scarce.",
      facts: [
        "Fibonacci's children likely grew up in a household filled with mathematical discussions and intellectual pursuits.",
        "It's unclear whether any of Fibonacci's children followed in his mathematical footsteps or made significant contributions to other fields.",
        "Like their mother, Fibonacci's children remain relatively unknown figures in history."
      ]
    },
    {
      name: "Guilielmo Bonacci",
      role: "Fibonacci's Father",
      avatar: "https://library.ethz.ch/en/locations-and-media/platforms/virtual-exhibitions/fibonacci-un-ponte-sul-mediterraneo/rediscovery-of-fibonacci-in-the-eighteenth-and-nineteenth-centuries/_jcr_content/par/accordion/accordionitem_1604034391/par/textimage/image.imageformat.textsingle.1072434257.jpg",
      description: "Guilielmo Bonacci was a Italian merchant and the father of Leonardo Fibonacci.",
      facts: [
        "Fibonacci's father played a significant role in his early education and exposure to mathematics.",
        "As a merchant, Guilielmo Bonacci traveled extensively, and Fibonacci accompanied him on many of his journeys.",
        "It is believed that Fibonacci's interest in mathematics was influenced by his father's business dealings, which involved various mathematical concepts.",
        "Guilielmo Bonacci's support and encouragement likely played a crucial role in shaping Fibonacci's mathematical career."
      ]
    },
    {
      name: "Unknown",
      role: "Fibonacci's Mother",
      avatar: "https://ih1.redbubble.net/image.4694430421.4315/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg",
      description: "Not much is known about Fibonacci's mother, including her name or background.",
      facts: [
        "Historical records provide limited information about Fibonacci's mother.",
        "While her specific contributions to Fibonacci's life and education are unknown, she likely played a role in his upbringing and early development.",
        "Like many women of her time, Fibonacci's mother's influence may have been overshadowed by that of her husband.",
        "Her name and details about her life remain a mystery in historical accounts."
      ]
    }
  ];

  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Fibonacci's Family</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {familyMembers.map((member, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md text-black">
            <img src={member.avatar} alt={member.name} className="w-40 h-40 object-cover rounded-full mb-2" />
            <div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-600 mb-4">{member.description}</p>
              <ul className="list-disc list-inside">
                {member.facts.map((fact, idx) => (
                  <li key={idx} className="mb-2">{fact}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Family;
