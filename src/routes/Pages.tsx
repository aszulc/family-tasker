import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import routes from '.';

const Pages = memo(function Pages() {
  return (
    <Routes>
      {Object.values(routes).map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
});

export default Pages;
