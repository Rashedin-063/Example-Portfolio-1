import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div
      data-aos='fade-up'
      data-aos-duration='2000'
      data-aos-once='true'
      className='text-center font-josefin'
    >
      <SectionTitle title='About Me' />

      <div>
        <div>
          
        </div>
        <div className=' border border-yellow-sunshine shadow-2xl p-4 rounded-xl text-pure-white'>
          I am Rashedin Islam, a passionate junior MERN Stack developer with
          hands-on experience in building and maintaining full-stack web
          applications. With a strong foundation in React, Node.js, Express, and
          MongoDB, I thrive in creating efficient, user-centric solutions. I
          continuously aim to enhance my skills by working on real-world
          projects and exploring the latest technologies.
        </div>
      </div>
    </div>
  );
}
export default About