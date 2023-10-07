import { Link as RouterLink } from 'react-router-dom';

import styled from 'styled-components';

export const Link = styled(RouterLink)`
  text-decoration: none;
  white-space: nowrap;
  color: #4e4e4e;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #f9f9fb;
  border-bottom: 1px solid #cdcdcd;
  line-height: 20px;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  gap: 3rem;

  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;

  @media screen and (min-width: 769px) {
    background-color: transparent;
  }
`;

export const MinNav = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1;
  height: 3rem;
  justify-content: space-between;

  @media screen and (min-width: 992px) {
    flex: 0 1;
  }
`;

export const Line = styled.div`
  height: 0.12rem;
  width: 100%;
  background-color: red;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Logo = styled.div`
  padding: 0 10px;
  position: relative;
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
  justify-content: space-between;
  padding: 0;
  width: 100%;

  @media screen and (min-width: 992px) {
    align-items: center;
    display: flex;
    flex: 1 1;
    flex-direction: row;
    gap: 2rem;
    left: inherit;
    padding: 0;
    position: static;
    top: inherit;
    z-index: inherit;
  }
`;

export const Nav = styled.div`
  order: 2;

  @media screen and (min-width: 992px) {
    margin-right: auto;
    order: 0;
    width: -webkit-max-content;
    width: max-content;
  }
`;

export const Pages = styled.ul`
  box-sizing: border-box;
  list-style: none;
  margin-top: 1rem;
  padding: 0;
  width: 100%;

  @media screen and (min-width: 1200px) {
    gap: 2rem;
  }

  @media screen and (min-width: 992px) {
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin: 0 auto 0 0;
  }
`;

export const Page = styled.li``;

export const Settings = styled.div``;

export const Authorization = styled.div`
  display: flex;
  flex-flow: column-reverse;
  flex-shrink: 0;
  font-size: 0.833rem;
  font-weight: 600;
  gap: 0.5rem;
  list-style: none;
  margin-bottom: 0.5rem;
  padding: 0;
  text-align: center;

  order: 0;

  svg {
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 820px) {
    width: auto;
  }

  @media screen and (min-width: 992px) {
    order: 2;
    align-items: center;
    flex-flow: row;
    gap: 1rem;
    justify-content: flex-end;
    margin: 0;
    text-align: left;
    text-align: initial;
    width: -webkit-min-content;
    width: min-content;
  }
`;

export const AuthorizationButton = styled(Button)`
  background-color: #4e4e4e;
  a {
    color: #ffffff;
  }
`;
