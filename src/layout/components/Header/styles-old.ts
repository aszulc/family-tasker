import { Link as RouterLink } from 'react-router-dom';

import styled from 'styled-components';

/* <StyledHeader>
      <Nav>
        <Pages>
          <Page>
            <Link to={routes[RoutingPages.About].path!}>About</Link>
          </Page>
          <Page>
            <Link to={routes[RoutingPages.Contact].path!}>Contact</Link>
          </Page>
          <Page>
            <UserIcon />
            <Link to={routes[RoutingPages.Contact].path!}>Log in / Create account</Link>
          </Page>
        </Pages>
      </Nav>
        <Logo>
          <Link to={routes[RoutingPages.Todos].path!}>cross-off</Link>
        </Logo>
        <Buttons>
          <Button>
            <DarkModeIcon />
          </Button>
          <Button>
            <MenuIcon />
          </Button>
        </Buttons>
    </StyledHeader> */

export const Header = styled.header`
  /* display: flex;
  justify-content: space-between;
  position: relative;
  background-color: #333;

  svg {
    width: 24px;
    height: 24px;
  }

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
  } */
`;

// export const Nav = styled.nav`
//   display: flex;
//   /* justify-content: space-between; */
//   /* background-color: #333; */
//   /* font-size: 17px; */
// `;

// export const Pages = styled.ul`
//   display: flex;
//   list-style-type: none;
//   padding: 0;
//   margin: 0;
//   background-color: red;

//   @media screen and (max-width: 600px) {
//     /* display: none; */
//     /* position: absolute; */
//     flex-direction: column;
//     width: 100%;
//     left: 0;
//   }
// `;

// export const Page = styled.li`
//   /* &:first-of-type {
//     background-color: #04aa6d;
//   }

//   @media screen and (max-width: 600px) {
//     &:not(:first-of-type) {
//       display: none;
//     }
//   }

//   a {
//     display: block;
//     text-decoration: none;
//     padding: 14px 16px;
//     color: #f2f2f2;

//     &:hover {
//       background-color: #ddd;
//       color: black;
//     }
//   } */
// `;

// export const Buttons = styled.div`
//   display: flex;
//   gap: 20px;
//   /* display: none;
//   align-items: center;
//   justify-content: center;
//   padding: 14px 16px;
//   font-size: 17px;
//   color: #f2f2f2;

//   &:hover {
//     background-color: #ddd;
//     color: black;
//   }

//   @media screen and (max-width: 600px) {
//     display: flex;
//   } */

//   button:last-child {
//     display: none;
//   }

//   @media screen and (max-width: 600px) {
//     button:last-child {
//       display: initial;
//     }
//   }
// `;
