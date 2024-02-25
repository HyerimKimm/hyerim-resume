import { AppContainer } from './atoms/Layout.style';
import { useIsDarkStore } from './store/isDarkStore';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResumeDetail from './pages/ResumeDetail';
import { GlobalStyle } from './styles/global';
import Login from './pages/Login';

function App() {
  const isDark = useIsDarkStore((state) => state.isDark);

  return (
    <>
      <GlobalStyle $isDark={isDark} />
      <AppContainer>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/resume/:id" element={<ResumeDetail />} />
          </Routes>
        </Router>
      </AppContainer>
    </>
  );
}

export default App;
