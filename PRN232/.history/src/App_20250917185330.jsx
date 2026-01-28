import Footer from "./components/Footer";
import Navbar from "./components/Narbar";
import About from "./pages/About";
import Homepage from "./pages/HomePage";
import News from "./pages/News";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Nội dung page */}
        <main className="flex-grow p-6 pt-20">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>

        {/* Footer (optional) */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
