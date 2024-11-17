import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedText2 = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 2, repeat: -1, yoyo: true }
    );
  }, []);

  return <h1 ref={textRef}>Hello, GSAP World!</h1>;
};

export default AnimatedText2;
