// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './componets/Navbar'; // Corrected import path
import Home from './componets/Home'; // Corrected import path and capitalized component name
import About from './componets/About'; // Corrected import path and capitalized component name
import Services from './componets/Services'; // Corrected import path and capitalized component name
import Contact from './componets/Contacts'; // Corrected import path and capitalized component name

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} /> {/* Updated to use 'element' prop */}
        <Route path="/about" element={<About />} /> {/* Updated to use 'element' prop */}
        <Route path="/services" element={<Services />} /> {/* Updated to use 'element' prop */}
        <Route path="/contacts" element={<Contact />} /> {/* Updated to use 'element' prop */}
      </Routes>
    </Router>
  );
}

export default App;
