import { memo } from 'react';

import { PropsWithChildren } from '../../types';
import { Container } from './styles';

const Main = memo(function Main({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
});

export default Main;
