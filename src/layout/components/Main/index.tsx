import { memo } from 'react';

import { PropsWithChildren } from '../../types';
import { Container, Main } from './styles';

const MainComponent = memo(function MainComponent({ children }: PropsWithChildren) {
  return (
    <Main>
      <Container>{children}</Container>
    </Main>
  );
});

export default MainComponent;
