import { Link } from "react-router-dom";
import Menu from "../../components/Menu"
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {

  const items = [
    { to: '/', label: 'Home' },
    { to: '/about-me', label: 'About Me' },
    { to: '/projects', label: 'Projects' },
    { to: '/blogs', label: 'Blogs' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <div className='bg-slate-950 text-white opacity-75 flex flex-col-reverse lg:flex-row lg:px-8 lg:justify-between mt-8 pt-12 pb-8'>
      <div className='lg:ml-20'>
        <ul className='flex items-center justify-center gap-6 text-xs md:text-sm font-playWrite italic'>
          {items.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className='hover:font-semibold '>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex items-center justify-center pb-6 gap-4'>
        <Link>
          <FaLinkedin className='text-2xl' />
        </Link>
        <Link>
          <FaGithub className='text-2xl' />
        </Link>
        <Link>
          <FaFacebook className='text-2xl' />
        </Link>
      </div>
    </div>
  );
}
export default Footer