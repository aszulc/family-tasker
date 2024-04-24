import About from '@/pages/About';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import Tasks from '@/pages/Tasks';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Tasks]: {
    element: <Tasks />,
    path: '/',
    title: 'Tasks',
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
