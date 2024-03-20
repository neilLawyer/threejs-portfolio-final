import React from 'react';

const VideoComponent = ({ videoId, title }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <h1 className="text-white text-3xl font-bold mb-4">{title}</h1>
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        title="YouTube Video Player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default VideoComponent;
