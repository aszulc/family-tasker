import { memo } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import { PropsWithChildren } from './types';

const Layout = memo(function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
});

export default Layout;
