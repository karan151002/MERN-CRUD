import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './pages/Create';
import Get from './pages/Get';
import GetId from './pages/GetId';
import Edit from './pages/Edit';
import Delete from './pages/Delete';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/get" element={<Get />} />
          <Route path="/get/:id" element={<GetId />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/delete/:id" element={<Delete />} />
        </Routes>
    </Router>
  );
};

export default App;
