import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './components/gallery';
import Artwork from './components/artwork';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Featured Artworks</h1>
        <Routes>
          <Route path="/" exact element={<Gallery/>} />
          <Route path="/artwork/:artworkId" element={<Artwork/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
