import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Rota1 = () => <h1>Rota 1</h1>;
const Rota2 = () => <h1>Rota 2</h1>;


const App = () => (
  <BrowserRouter>
    <nav>
      <Link to="/">Rota 1</Link> | <Link to="about">Rota 1</Link> |{' '}
    </nav>
    <Routes>
      <Route path="/" element={<Rota1 />} />
      <Route path="about" element={<Rota2 />} />
    </Routes>
  </BrowserRouter>
);

export default App;
