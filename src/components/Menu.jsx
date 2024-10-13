import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';

const Menu = ({ items = [] }) => {
  console.log(items);

  return (
    <Fade cascade damping={0.3}>
      <ul className='lg:flex lg:items-center lg:gap-3 text-sm md:text-base space-y-4 lg:space-y-0 font-playWrite italic'>
        {items.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive
                  ? 'text-base lg:text-lg rounded-none hover:bg-transparent text-green-lantern font-semibold animate-pulse-3'
                  : 'hover:transition hover:duration-700   hover:bg-transparent hover:rounded-none hover:font-semibold hover:-translate-y-1'
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
};

export default Menu;
