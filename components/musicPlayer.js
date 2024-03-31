// components/MusicPlayer.js

import React, { useRef } from 'react';
import cricket from '../public/cricket.mp3';

function MusicPlayer() {
  const audioRef = useRef(null);

  const playAudio = () => audioRef.current.play();
  const pauseAudio = () => audioRef.current.pause();

  return (
    <div>
      <audio controls>
        <source
          id="audio-player"
          name="audio-player"
          src={cricket}
          type="audio/mp3"
        />
        {/* Fallback content */}
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MusicPlayer;
