import { memo } from 'react';

import { MoonIcon as DarkModeIcon, Bars3Icon as MenuIcon } from '@heroicons/react/24/solid';

import routes from '@/routes';
import { Pages as RoutingPages } from '@/routes/types';

import {
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
  Nav,
  PagesList,
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
          <Nav>
            <PagesList>
              <li>
                <Link to={routes[RoutingPages.About].path!}>About</Link>
              </li>
              <li>
                <Link to={routes[RoutingPages.Contact].path!}>Contact</Link>
              </li>
            </PagesList>
          </Nav>
          <Button>
            <DarkModeIcon />
          </Button>
          <AuthButton>
            <Link to={routes[RoutingPages.Contact].path!}>Log in / Sign up</Link>
          </AuthButton>
        </MainNav>
      </Container>
    </Header>
  );
});

export default HeaderComponent;
