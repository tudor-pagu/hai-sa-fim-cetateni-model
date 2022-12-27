import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Category from './pages/Category';
import Article from './pages/Article';
import ScrollToTop from './components/ScrollToTop';
import DespreNoi from './pages/DespreNoi';
import Search from './pages/Search';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/articole' element={<Category />} />
          <Route path='/categorii/*' element={<Category />} />
          <Route path='/articole/*' element={<Article />} />
          <Route path="/despre-noi" element={<DespreNoi />} />
          <Route path="/cauta/*" element={<Search />} />
          <Route path='*' element={<h1>404 Pagina nu a fost gaista</h1>} />
        </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
