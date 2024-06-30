import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { AppContainer } from 'atoms/Layout.style';
import { GlobalStyle } from 'styles/global';

import ErrorPage from 'pages/error_page/ErrorPage';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import queryClient from 'queries/queryClient';

import { isDarkStore } from 'store/isDarkStore';
import ResumeDetail from 'pages/resume_detail/ResumeDetail';

function App() {
  const isDark = isDarkStore((state) => state.isDark);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <GlobalStyle $isDark={isDark} />
      <AppContainer>
        <Router>
          <ErrorBoundary fallback={<ErrorPage />}>
            <Routes>
              <Route index path="/resume/:id" element={<ResumeDetail />} />
            </Routes>
          </ErrorBoundary>
        </Router>
      </AppContainer>
    </QueryClientProvider>
  );
}

export default App;
