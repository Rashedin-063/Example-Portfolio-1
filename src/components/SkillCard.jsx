import Marquee from 'react-fast-marquee';
import { ImImage } from 'react-icons/im';

const skills = [
  'React.js',
  'Node.js',
  'MongoDB',
  'Express.js',
  'Tailwind CSS',
  'JavaScript',
  'Git & GitHub',
  'Responsive Design',
  'RESTful APIs',
  'Problem Solving',
];

// eslint-disable-next-line react/prop-types
const SkillCard = ({ skill }) => {

  return (
    <div>
      <div className='bg-indigo-950 text-white py-4 px-6 rounded-lg shadow-lg mx-4 flex-shrink-0'>
        <ImImage />
        <p className='text-lg font-semibold'>{skill}</p>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className='py-12 bg-slate-950 rounded-xl border-2 border-yellow-sunshine w-[75vw] max-w-6xl mx-auto shadow-2xl'>
      <div>
        <h2 className='text-3xl font-bold text-center text-green-lantern mb-8 font-sevillana'>
          My Skills
        </h2>

        {/* Marquee for skills */}
        <div className='mt-6 lg:mx-4'>
          <Marquee direction='right' speed={30}>
            {skills.map((skill) => (
              <SkillCard key={skill.title} skill={skill} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;
