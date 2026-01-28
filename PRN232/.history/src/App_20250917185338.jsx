import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/HomePage";
import About from "./pages/About";
import News from "./pages/News";
import Navbar from "./components/Narbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Nội dung page */}
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>

        {/* Footer (optional) */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
