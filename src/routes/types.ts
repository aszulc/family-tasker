import { PathRouteProps } from 'react-router-dom';

export const Pages = {
  About: 'about',
  Contact: 'contact',
  Todos: 'todos',
  NotFound: 'notFound',
};

type PagesType = (typeof Pages)[keyof typeof Pages];

type RouteProps = {
  title?: string;
};

export type Routes = Record<PagesType, PathRouteProps & RouteProps>;
