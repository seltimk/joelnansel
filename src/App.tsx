import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Speaking from "./pages/Speaking";
import Projects from "./pages/Projects";
import Books from "./pages/Books";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/speaking" element={<Speaking />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/books" element={<Books />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-center" />
      </div>
    </Router>
  );
}

export default App;