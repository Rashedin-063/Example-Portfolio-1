import PropTypes from 'prop-types';
import codeLogo from '../assets/codeLogo.png';

const SectionTitle = ({ title }) => {
  return (
    <div className='flex items-center justify-center bg-gradient-to-br from-blue-800 to-blue-950 h-16 w-2/3 lg:w-1/3 mx-auto rounded-full mb-8 drop-shadow-xl'>
      <img className='w-10 h-10' src={codeLogo} alt='' />
      <h2 className='text-3xl tracking-wide mb-12 font-sevillana mt-12 text-green-lantern mx-2 font-semibold'>
        {title}
      </h2>
      <img className='w-10 h-10' src={codeLogo} alt='' />
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
