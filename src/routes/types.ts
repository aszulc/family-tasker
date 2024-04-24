import { PathRouteProps } from 'react-router-dom';

export const Pages = {
  Tasks: 'tasks',
  About: 'about',
  Contact: 'contact',
  NotFound: 'notFound',
};

type PagesType = (typeof Pages)[keyof typeof Pages];

type RouteProps = {
  title?: string;
};

export type Routes = Record<PagesType, PathRouteProps & RouteProps>;
