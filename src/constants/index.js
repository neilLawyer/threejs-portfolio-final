import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    jobit,
    tripguide,
    threejs,
    childhood,
    backpack,
    book,
    medal,
    backpackbetter,
    bookbetter,
    arabicnumerals,
    fibsequence,
    math
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Mathematical Innovator",
      icon: web,
    },
    {
      title: "Algorithm Architect",
      icon: mobile,
    },
    {
      title: "Mathematical Engineer",
      icon: backend,
    },
    {
      title: "Educational Influencer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Childhood",
      company_name: "Childhood + Education",
      icon: childhood,
      iconBg: "#383E56",
      date: "1170s",
      points: [
        "Born in Italy",
        "Little known about early life but likely recieved education possibly from his fathers",
        "Father was a customs official"
      ],
    },
    {
      title: "Works",
      company_name: "What he did",
      icon: backpackbetter,
      iconBg: "#E6DEDD",
      date: "1202",
      points: [
        "Publishes 'Liber Abaci' (Book of calculation)",
        "Book introduces Hindu-Arabic numerals to Europe",
        "Popularizes the use of the decimal system and the concept of zero",
        "Essentially making arithmetic and algebra more accessible and understandable"
      ],
    },
    {
      title: "Traveling",
      company_name: "Interactions",
      icon: bookbetter,
      iconBg: "#383E56",
      date: "1228-1240s",
      points: [
        "Travels extensively, likely for commerical purposes",
        "During travels, he interacts with scholars and learns about other math concepts",
        "One of the most known concepts include the Fibonacci Sequence"
      ],
    },
    {
      title: "Achievements",
      company_name: "Final Stages",
      icon: medal,
      iconBg: "#E6DEDD",
      date: "1250s",
      points: [
        "Contributions to mathematics continue to gain recongition",
        "Remains a prominent figure in the history of math",
        "Known for introducing Arabic numerals to the Western's",
        "Exact date of death is unknown, but is believed to be around the mid-13th century"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "If by chance I have omitted anything more or less proper or necessary, I beg forgiveness, since there is no one who is without fault and circumspect in all matters.",
      name: "Fibonacci",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "The Fibonacci Sequence turns out to be the key to understanding how nature designs ... and is ... a part of the same ubiquitous music of the spheres that builds harmony into atoms, molecules, crystals, shells, suns and galaxies and makes the Universe Sing.",
      name: "Guy Murchie",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Zero is powerful because it is infinity's twin. They are equal and opposite, yin and yang.",
      name: "Charles Seife",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Introduction of Hindu-Arabic Numerals",
      description:
        "Fibonacci's most renowned achievement is his role in popularizing the Hindu-Arabic numeral system in Europe through his book 'Liber Abaci' (1202). This system, based on ten digits with the concept of zero, revolutionized arithmetic and algebra, replacing cumbersome Roman numerals and significantly simplifying mathematical calculations.",
      tags: [
        {
          name: "Numerals",
          color: "blue-text-gradient",
        },
        {
          name: "Europe",
          color: "green-text-gradient",
        },
        {
          name: "Revolutionary",
          color: "pink-text-gradient",
        },
      ],
      image: arabicnumerals,
      source_code_link: "https://github.com/",
    },
    {
      name: "Fibonacci Sequence",
      description:
        "Fibonacci is also credited with introducing the Fibonacci sequence to the Western world in 'Liber Abaci'. The sequence, where each number is the sum of the two preceding ones (0, 1, 1, 2, 3, 5, 8, 13, ...), has numerous applications in mathematics, nature, art, and technology. It appears in various natural phenomena, such as the arrangement of leaves on stems and the spiral patterns of shells and galaxies.",
      tags: [
        {
          name: "Numerals",
          color: "blue-text-gradient",
        },
        {
          name: "Pattern",
          color: "green-text-gradient",
        },
        {
          name: "Formula's",
          color: "pink-text-gradient",
        },
      ],
      image: fibsequence,
      source_code_link: "https://github.com/",
    },
    {
      name: "Advancement of Commercial Mathematics",
      description:
        "Fibonacci's travels to various Mediterranean countries exposed him to different mathematical techniques used in commerce. In 'Liber Abaci,' he incorporated methods of commercial arithmetic, including calculations of profit margins, currency exchange rates, and interest rates. His practical approach to mathematics helped lay the foundation for modern financial mathematics and commercial accounting practices.",
      tags: [
        {
          name: "Exploring",
          color: "blue-text-gradient",
        },
        {
          name: "Traveling",
          color: "green-text-gradient",
        },
        {
          name: "Teaching",
          color: "pink-text-gradient",
        },
      ],
      image: math,
      source_code_link: "https://github.com/",
    },
  ];
  
export { services, technologies, experiences, testimonials, projects };