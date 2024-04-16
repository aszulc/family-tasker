import { Link as RouterLink } from 'react-router-dom';

import styled from 'styled-components';

import { DESKTOP_WIDTH } from '@/hooks/useWindowWidth';

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

  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  @media screen and (min-width: ${DESKTOP_WIDTH}px) {
    gap: 3rem;
  }
`;

export const MinNav = styled.div`
  display: flex;
  flex: 1 1;
  align-items: center;
  justify-content: space-between;
  height: 3rem;

  @media screen and (min-width: ${DESKTOP_WIDTH}px) {
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
  background-color: #d2042d;
`;

export const Logo = styled.div`
  position: relative;
  padding: 0 0.5rem;
  font-size: 130%;
  font-weight: 600;

  &:hover {
    a {
      position: relative;
      z-index: 1;
      color: #1b1b1b;
    }
  }
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

  &:hover {
    svg {
      fill: #1b1b1b;
    }
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const MenuButton = styled(Button)`
  @media screen and (min-width: ${DESKTOP_WIDTH}px) {
    display: none;
  }
`;

export const MainNav = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  width: 100%;
  position: absolute;
  left: 0;
  top: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #f9f9fb;
  border-bottom: 1px solid #cdcdcd;

  nav {
    border-bottom: 1px solid #cdcdcd;
  }

  @media screen and (min-width: ${DESKTOP_WIDTH}px) {
    position: static;
    padding: 0;
    border: none;
    flex-direction: row;
    flex: 1 1;
    align-items: center;
    gap: 2rem;

    nav {
      margin-right: auto;
      border-bottom: none;
    }
  }
`;

export const PagesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;

  li {
    border-top: 1px solid #cdcdcd;
    height: 3rem;
    padding-left: 0.5rem;
    display: flex;
    align-items: center;
  }

  a:hover {
    color: #1b1b1b;
    text-decoration: underline solid #d2042d 0.12rem;
  }

  @media screen and (min-width: ${DESKTOP_WIDTH}px) {
    display: flex;
    margin: 0 auto 0 0;

    li {
      border-top: none;
      height: initial;
      padding-left: initial;
    }
  }
`;

export const Auth = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  padding-left: 0.5rem;

  @media screen and (min-width: ${DESKTOP_WIDTH}px) {
    padding-left: initial;
  }
`;

export const AuthButton = styled(Button)`
  font-size: 0.9rem;
  background-color: #4e4e4e;
  border-radius: 4px;
  border: none;
  padding: 7px 15px;

  &:hover {
    background-color: #1b1b1b;
  }

  a {
    color: #ffffff;
  }
`;

export const Settings = styled(Auth)`
  border-bottom: 1px solid #cdcdcd;

  @media screen and (min-width: ${DESKTOP_WIDTH}px) {
    border-bottom: none;
  }
`;
