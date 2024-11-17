import { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const phrases = ['Hardworking & Dedicated', 'Passionate & Enthusiast', 'Relaxed Problem Solver'];

const AnimatedText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => (index + 1) % phrases.length),
      3000
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <h1 className='text-green-lantern'>
      <TextTransition direction='down' springConfig={presets.slow}>
        {phrases[index]}
      </TextTransition>
    </h1>
  );
};

export default AnimatedText;
