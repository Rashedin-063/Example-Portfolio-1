import { Link } from 'react-router-dom';
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const LeftSidebar = () => {
  return (
      <div className='flex flex-col items-center justify-center pb-6 gap-5 h-48 rounded-full pt-4 drop-shadow-2xl mt-24  border border-blue-800 px-2 fixed bg-blue-800 bg-opacity-45'>
        <Link>
          <FaLinkedin className='text-2xl text-white' />
        </Link>
        <Link>
          <FaGithub className='text-2xl text-white' />
        </Link>
        <Link>
          <FaFacebook className='text-2xl text-white' />
        </Link>
        <Link>
          <FaDownload className='text-2xl text-white' />
        </Link>
      </div>
   
  );
};
export default LeftSidebar;
