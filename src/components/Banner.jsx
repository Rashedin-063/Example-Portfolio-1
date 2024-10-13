import { Typewriter } from 'react-simple-typewriter';
import BannerBg from '../assets/bannerImg.jpg'
import Profile from '../assets/profile.jpg'


const Banner = () => {
  return (
    <div
      className='h-[550px] flex flex-col-reverse lg:flex-row items-center lg:justify-between justify-center gap-12 lg:px-40'
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
        className='space-y-4'
      >
        <h2 className='text-4xl font-semibold'>Hello there,</h2>
        <h2 className='text-4xl font-semibold'>
          This is{' '}
          <span className='text-green-600 font-bold text-5xl'>
            Rashedin Islam
          </span>
        </h2>
        <div className='mt-4 text-2xl font-semibold font-sevillana'>
          <span className='text-xl'>I am a junior </span>
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
            className='text-3xl'
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
          className='w-48 h-48 lg:w-60 lg:h-60 rounded-full object-cover outline outline-4 p-2 outline-green-600'
          alt=''
        />
      </div>
    </div>
  );
}
export default Banner