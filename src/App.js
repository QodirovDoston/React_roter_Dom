import React from 'react';
import '../src/conpenata/style.css'
import { Home } from './conpenata/Home';
import Navbar from './conpenata/Navbar';
import {Section} from './conpenata/Section';
import  {Footer}  from './conpenata/Footer';
import  Error  from './conpenata/Error';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/setion" element={<Section />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
