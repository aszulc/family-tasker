import About from '@/pages/About';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import Todos from '@/pages/Todos';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Todos]: {
    element: <Todos />,
    path: '/',
    title: 'Todos',
  },
  [Pages.About]: {
    element: <About />,
    path: '/about',
    title: 'About',
  },
  [Pages.Contact]: {
    element: <Contact />,
    path: '/contact',
    title: 'Contact',
  },
  [Pages.NotFound]: {
    element: <NotFound />,
    path: '*',
  },
};

export default routes;
