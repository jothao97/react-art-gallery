/* import './App.css';
import React from 'react';
import { Router, Routes, Route} from 'react-router-dom';
import AddArtwork from './components/AddArtwork';
//import Artwork from './components/artwork';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={AddArtwork}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
*/

// App.js

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddArtwork from './components/AddArtwork';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Featured Artworks</h1>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/add-artwork" component={AddArtwork} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
