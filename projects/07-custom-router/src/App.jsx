import { lazy, Suspense } from 'react';

import { Router } from './components/Router';
import { Route } from './components/Route';

const HomePage = lazy(() => import('./pages/Home.jsx'));
const AboutPage = lazy(() => import('./pages/About.jsx'));
const SearchPage = lazy(() => import('./pages/Search'));
const Page404 = lazy(() => import('./pages/404'));

const appRoutes = [
  {
    path: '/:lang/about',
    Component: AboutPage,
  },
  {
    path: '/search/:query',
    Component: SearchPage,
  },
];

function App() {
  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
