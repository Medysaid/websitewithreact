import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
