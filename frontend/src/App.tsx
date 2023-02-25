import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import HistoryPage from './components/pages/HistoryPage';
import { ToastContainer } from 'react-toastify';
import DecorationPage from './components/chaewon/DecorationPage';
import CommunityPage from './components/chaewon/CommunityPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/main/:userId' element={<MainPage />} />
        <Route path='/history/:userId' element={<HistoryPage />}></Route>
        <Route path='/decoration/:userId' element={<DecorationPage />}></Route>
        <Route path='/community/:userId' element={<CommunityPage />}></Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
