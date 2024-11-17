import { useSpring, animated } from '@react-spring/web';

const AnimatedText = () => {
  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, transform: 'translateX(0px)' },
      { opacity: 0, transform: 'translateX(-20px)' },
    ],
    from: { opacity: 0, transform: 'translateX(20px)' },
    config: { duration: 2000 },
  });

  return <animated.div style={styles}>Hello, Animated World!</animated.div>;
};

export default AnimatedText;
