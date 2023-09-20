import NotFound from '@/pages/NotFound';
import Todos from '@/pages/Todos';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Todos]: {
    element: <Todos />,
    path: '/',
    title: 'Todos',
  },
  [Pages.NotFound]: {
    element: <NotFound />,
    path: '*',
  },
};

export default routes;
