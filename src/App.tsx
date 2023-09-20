import { memo } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Pages from '@/routes/Pages';
import '@/styles/index.css';

const App = memo(function App() {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
});

export default App;
