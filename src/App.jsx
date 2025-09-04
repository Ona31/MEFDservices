import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/About"; // ta page About
import ContactPage from "./pages/Contact"; // si tu as une page Contact
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
