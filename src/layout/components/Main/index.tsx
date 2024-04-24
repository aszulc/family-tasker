import { memo } from 'react';

import { PropsWithChildren } from '../../types';

const MainComponent = memo(function MainComponent({ children }: PropsWithChildren) {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
});

export default MainComponent;
