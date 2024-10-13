import Marquee from 'react-fast-marquee';

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
    <div className='bg-blue-950 text-white py-4 px-6 rounded-lg shadow-lg mx-4 flex-shrink-0'>
      <p className='text-lg font-semibold'>{skill}</p>
    </div>
  );
};


const Skills = () => {
  return (
    <section className='py-12 bg-slate-950 mx-8 overflow-auto rounded-xl'>
      <div className='max-w-5xl mx-auto'>
        <h2 className='text-3xl font-bold text-center text-green-600 mb-8'>
          Skills
        </h2>

        {/* Marquee for skills */}
        <div className='mt-6 lg:mx-8'>
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
