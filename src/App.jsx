import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/genesis-ui-2/" element={<Home />} />
        <Route path="/genesis-ui-2/services" element={<Services />} />
        <Route path="/genesis-ui-2/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;