import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import HistoryPage from './components/pages/HistoryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/main' element={<MainPage />} />
        <Route path='/history' element={<HistoryPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
