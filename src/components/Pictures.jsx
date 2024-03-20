import React from 'react';
import fibonacci from "../assets/fibonacci.jpeg";

const Pictures = () => {
  return (
    <img 
        src={fibonacci} 
        alt="Leonardo of Pisa" 
        className="ml-[560px] rounded-[25px]"
    />
  )
}

export default Pictures;