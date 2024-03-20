import React from 'react';
import VideoComponent from './VideoComponent';

const App = () => {
  const videoId = "wTlw7fNcO-0"; // Extracted from the YouTube URL
  return (
    <div>
      <VideoComponent videoId={videoId} title="My YouTube Video" />
    </div>
  );
};

export default App;