import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Homepage from "./pages/HomePage";
import About from "./pages/About";
import News from "./pages/News";

function App() {
  return (
    <Router>
      <div className="p-4">
        {/* Navigation */}
        <nav className="flex gap-4 mb-6 text-lg">
          <Link to="/" className="text-blue-500 hover:underline">Home</Link>
          <Link to="/about" className="text-green-500 hover:underline">About</Link>
          <Link to="/news" className="text-red-500 hover:underline">News</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
