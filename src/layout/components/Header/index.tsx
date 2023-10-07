import { memo } from 'react';

import { MoonIcon as DarkModeIcon, Bars3Icon as MenuIcon } from '@heroicons/react/24/solid';

import routes from '@/routes';
import { Pages as RoutingPages } from '@/routes/types';

import {
  Authorization,
  AuthorizationButton,
  Button,
  Container,
  Header,
  Line,
  Link,
  Logo,
  MainNav,
  MenuButton,
  MinNav,
  Nav,
  Page,
  Pages,
  Settings,
} from './styles';

const HeaderComponent = memo(function HeaderComponent() {
  return (
    <Header>
      <Container>
        <MinNav>
          <Logo>
            <Link to={routes[RoutingPages.Todos].path!}>cross off</Link>
            <Line />
          </Logo>
          <MenuButton>
            <MenuIcon />
          </MenuButton>
        </MinNav>
        <MainNav>
          <Nav>
            <Pages>
              <Page>
                <Link to={routes[RoutingPages.About].path!}>About</Link>
              </Page>
              <Page>
                <Link to={routes[RoutingPages.Contact].path!}>Contact</Link>
              </Page>
            </Pages>
          </Nav>
          <Settings>
            <Button>
              <DarkModeIcon />
            </Button>
          </Settings>
          <Authorization>
            <AuthorizationButton>
              <Link to={routes[RoutingPages.Contact].path!}>Log in / Sign up</Link>
            </AuthorizationButton>
          </Authorization>
        </MainNav>
      </Container>
    </Header>
  );
});

export default HeaderComponent;
