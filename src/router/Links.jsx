import { Link } from 'react-router-dom';
import './Links.css';

export const Links = () => {
  return (
    <ul >
      <li >
        <Link to={'/users'}>
          Users
        </Link>
      </li>
      <li >
        <Link to={'/counter'}>
          Counter
        </Link>
      </li>
      <li >
        <Link to={'/car'}>
          Car
        </Link>
      </li>
      <li>
        <a href={'*'}>
          NoMatch
        </a>
      </li>
    </ul>
  );
};
