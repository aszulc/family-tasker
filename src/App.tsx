import { memo } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from '@/layout';
import Pages from '@/routes/Pages';
import '@/styles/index.css';

const App = memo(function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Pages />
      </Layout>
    </BrowserRouter>
  );
});

export default App;
