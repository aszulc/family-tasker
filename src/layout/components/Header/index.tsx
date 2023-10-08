import { memo } from 'react';

import { MoonIcon as DarkModeIcon, Bars3Icon as MenuIcon } from '@heroicons/react/24/solid';

import routes from '@/routes';
import { Pages as RoutingPages } from '@/routes/types';

import {
  Auth,
  AuthButton,
  Button,
  Container,
  CrossingLine,
  Header,
  Link,
  Logo,
  MainNav,
  MenuButton,
  MinNav,
  PagesList,
  Settings,
} from './styles';

const HeaderComponent = memo(function HeaderComponent() {
  return (
    <Header>
      <Container>
        <MinNav>
          <Logo>
            <Link to={routes[RoutingPages.Todos].path!}>cross off</Link>
            <CrossingLine />
          </Logo>
          <MenuButton>
            <MenuIcon />
          </MenuButton>
        </MinNav>
        <MainNav>
          <nav>
            <PagesList>
              <li>
                <Link to={routes[RoutingPages.About].path!}>About</Link>
              </li>
              <li>
                <Link to={routes[RoutingPages.Contact].path!}>Contact</Link>
              </li>
            </PagesList>
          </nav>
          <Settings>
            <Button>
              <DarkModeIcon />
            </Button>
          </Settings>
          <Auth>
            <AuthButton>
              <Link to={routes[RoutingPages.Contact].path!}>Log in / Sign up</Link>
            </AuthButton>
          </Auth>
        </MainNav>
      </Container>
    </Header>
  );
});

export default HeaderComponent;
