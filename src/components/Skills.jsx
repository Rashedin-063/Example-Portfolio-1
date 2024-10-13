
const marqueeStyle = {
  display: 'flex',
  animation: 'scroll 15s linear infinite',
  '@keyframes scroll': {
    '0%': { transform: 'translateX(100%)' },
    '100%': { transform: 'translateX(-100%)' },
  },
};

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
    <section className='py-12 bg-gray-100'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold text-center text-blue-900 mb-8'>
          Skills
        </h2>

        {/* Marquee Wrapper */}
        <div className='overflow-hidden'>
          <div className='flex gap-6 whitespace-nowrap' style={marqueeStyle}>
            {skills.map((skill) => (
              <SkillCard key={skill} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
