import { memo } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@/components/theme/ThemeProvider';
import Layout from '@/layout';
import Pages from '@/routes/Pages';
import '@/styles/index.scss';

const App = memo(function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <Pages />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
});

export default App;
