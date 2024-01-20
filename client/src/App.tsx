import React, { useEffect, useState } from 'react';
import { AppContainer } from './atoms/Layout.style';
import { useIsDarkStore } from './store/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResumeDetail from './pages/ResumeDetail';
import Header from './components/header/Header';

function App() {
  const isDark = useIsDarkStore((state) => state.isDark);

  return (
    <AppContainer isDark={isDark}>
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/resume/:id" element={<ResumeDetail />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
