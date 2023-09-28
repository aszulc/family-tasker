import { PathRouteProps } from 'react-router-dom';

enum Pages {
  About = 'about',
  Contact = 'contact',
  Todos = 'todos',
  NotFound = 'notFound',
}

type RouteProps = {
  title?: string;
};

type Routes = Record<Pages, PathRouteProps & RouteProps>;

export type { Routes };
export { Pages };
