import { getElementError } from '@testing-library/react';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Category from './pages/Category';

function RouteSwitch() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categorii/:id' element={<Category />} />
        </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
