import { Typewriter } from 'react-simple-typewriter';
import BannerBg from '../assets/bannerImg.jpg';
import Profile from '../assets/profileImage.jpg';

const Banner = () => {
  return (
    <div
      className='h-[550px] flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-start lg:ml-4 gap-12 lg:px-24 text-gray-200 rounded-xl'
      style={{
        backgroundImage: `url(${BannerBg})`,
        backgroundPosition: 'center',
        backgroundBlendMode: 'darken',
      }}
    >
      <div
        data-aos='flip-left'
        data-aos-duration='2000'
        data-aos-delay='50'
        data-aos-easing='ease-in-out'
        data-aos-once='true'
        className='space-y-4 font-chakraPatch text-pure-white'
      >
        <h2 className='text-4xl font-semibold'>Hello there,</h2>
        <h2 className='text-4xl font-semibold'>
          This is{' '}
          <span className='text-green-lantern font-bold text-5xl'>
            Rashedin Islam
          </span>
        </h2>
        <div className='mt-4 text-2xl font-semibold text-yellow-sunshine'>
          <span className='text-xl text-gray-200 '>I am a junior </span>
          <Typewriter
            words={[
              'Frontend Developer',
              'MERN Stack Developer',
              'Full Stack Developer',
            ]}
            typeSpeed={100}
            deleteSpeed={80}
            loop={true}
            cursor={true}
            cursorBlinking
          />
        </div>
      </div>
      <div
        data-aos='zoom-in'
        data-aos-duration='2000'
        data-aos-easing='ease-in-out'
        data-aos-once='true'
      >
        <img
          src={Profile}
          className='w-48 h-48 lg:w-60 lg:h-60 rounded-full outline outline-4 object-cover p-2 outline-green-lantern'
          alt=''
        />
      </div>
    </div>
  );
};
export default Banner;
