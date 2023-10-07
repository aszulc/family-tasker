import { Link as RouterLink } from 'react-router-dom';

import styled from 'styled-components';

export const Link = styled(RouterLink)`
  text-decoration: none;
  white-space: nowrap;
  color: #4e4e4e;
`;

export const Header = styled.header`
  background-color: #f9f9fb;
  border-bottom: 1px solid #cdcdcd;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 3rem;

  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const MinNav = styled.div`
  display: flex;
  flex: 1 1;
  align-items: center;
  justify-content: space-between;
  height: 3rem;

  @media screen and (min-width: 992px) {
    flex: initial;
  }
`;

export const CrossingLine = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 0.12rem;
  width: 100%;
  background-color: red;
`;

export const Logo = styled.div`
  position: relative;
  padding: 0 10px;
  font-size: 130%;
  font-weight: 600;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #4e4e4e;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const MenuButton = styled(Button)`
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const MainNav = styled.div`
  display: none;
  width: 100%;

  @media screen and (min-width: 992px) {
    display: flex;
    flex: 1 1;
    align-items: center;
    gap: 2rem;
  }
`;

export const Nav = styled.nav`
  @media screen and (min-width: 992px) {
    margin-right: auto;
  }
`;

export const PagesList = styled.ul`
  list-style: none;
  padding: 0;
  gap: 2rem;

  @media screen and (min-width: 992px) {
    display: flex;
    margin: 0 auto 0 0;
  }
`;

export const AuthButton = styled.button`
  font-size: 0.9rem;
  background-color: #4e4e4e;
  border-radius: 4px;
  border: none;
  padding: 7px 15px;

  a {
    color: #ffffff;
  }
`;
