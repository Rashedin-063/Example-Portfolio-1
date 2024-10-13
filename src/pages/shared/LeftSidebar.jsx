import { Link } from 'react-router-dom';
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const LeftSidebar = () => {
  return (
    <div className='w-16'>
      <div className='flex flex-col items-center justify-center pb-6 gap-5 h-48 rounded-full pt-4 drop-shadow-2xl my-48 fixed left-2 lg:left-[131px] border border-green-600 px-2'>
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
    </div>
  );
};
export default LeftSidebar;
