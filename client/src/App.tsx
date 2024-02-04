import React, { useEffect, useState } from 'react';
import { AppContainer } from './atoms/Layout.style';
import { useIsDarkStore } from './store/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResumeDetail from './pages/ResumeDetail';
import { GlobalStyle } from './styles/global';

function App() {
  const isDark = useIsDarkStore((state) => state.isDark);

  return (
    <>
      <GlobalStyle $isDark={isDark} />
      <AppContainer>
        <Router>
          <Routes>
            <Route path="/resume/:id" element={<ResumeDetail />} />
          </Routes>
        </Router>
      </AppContainer>
    </>
  );
}

export default App;
