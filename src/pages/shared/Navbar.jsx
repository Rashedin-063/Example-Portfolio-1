import Menu from "../../components/Menu";

const Navbar = () => {

  const items = [
    { to: '/', label: 'Home' },
    { to: '/about-me', label: 'About Me' },
    { to: '/projects', label: 'Projects' },
    { to: '/blogs', label: 'Blogs' },

    { to: '/achievements', label: 'Achievements' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <div className='text-center h-20 mr-8'>
      <div className='navbar'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content z-[1] mt-3 shadow border-2 w-40 rounded-xl bg-blue-800 bg-opacity-25'
            >
              <Menu items={items} />
            </ul>
          </div>
        </div>
        <div className='navbar-center '></div>
        <div className='navbar-end'>
          <ul className='menu menu-horizontal px-1 hidden lg:flex'>
            <Menu items={items} />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar