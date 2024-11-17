import Typical from 'react-typical';

const AnimatedText = () => (
  <h1>
    <Typical
      loop={Infinity}
      steps={[
        'Hello!',
        1000,
        'Welcome to my page!',
        1000,
        'Enjoy your visit!',
        1000,
      ]}
    />
  </h1>
);

export default AnimatedText;
