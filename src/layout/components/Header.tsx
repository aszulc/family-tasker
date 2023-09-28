import { memo } from 'react';
import { Link } from 'react-router-dom';

import routes from '@/routes';
import { Pages } from '@/routes/types';

const Header = memo(function Header() {
  console.log(routes);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={routes[Pages.Todos].path!}>cross-off</Link>
          </li>
          <li>
            <Link to={routes[Pages.About].path!}>About</Link>
          </li>
          <li>
            <Link to={routes[Pages.Contact].path!}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});

export default Header;
