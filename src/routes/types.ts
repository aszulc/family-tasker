import { PathRouteProps } from 'react-router-dom';

enum Pages {
  Todos,
  NotFound,
}

type RouteProps = {
  title?: string;
};

type Routes = Record<Pages, PathRouteProps & RouteProps>;

export type { Routes };
export { Pages };
