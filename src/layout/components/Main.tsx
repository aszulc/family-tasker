import { memo } from 'react';

import { PropsWithChildren } from '../types';

const Main = memo(function Main({ children }: PropsWithChildren) {
  return <>{children}</>;
});

export default Main;
