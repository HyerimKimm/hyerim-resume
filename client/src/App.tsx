import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { AppContainer } from './atoms/Layout.style';
import { GlobalStyle } from './styles/global';

import ErrorPage from './pages/ErrorPage';
import ResumeDetail from './pages/ResumeDetail';
import Login from './pages/Login';

import { useIsDarkStore } from './store/isDarkStore';

function App() {
  const isDark = useIsDarkStore((state) => state.isDark);

  return (
    <>
      <GlobalStyle $isDark={isDark} />
      <AppContainer>
        <Router>
          <ErrorBoundary fallback={<ErrorPage />}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/resume/:id" element={<ResumeDetail />} />
            </Routes>
          </ErrorBoundary>
        </Router>
      </AppContainer>
    </>
  );
}

export default App;
