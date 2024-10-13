import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';

const Menu = ({items = []}) => { 
  
  console.log(items)
  

  return (
    <Fade cascade damping={0.3}>
      <ul className='xl:flex xl:items-center xl:gap-3 text-sm md:text-base space-y-4 xl:space-y-0 font-playWrite'>
        {items.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive
                  ? 'text-base lg:text-lg rounded-none hover:bg-transparent text-green-600 font-semibold italic'
                  : '  hover:transition-all hover:duration-300 hover:bg-transparent hover:rounded-none hover:underline'
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </Fade>
  );
};

Menu.propTypes = {
  items: PropTypes.array,
}

export default Menu;
