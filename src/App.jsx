import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Hydrogen from "./Pages/Hydrogen";
import CNG from "./Pages/CNG";
import EV from "./Pages/EV";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/genesis-ui-2/" element={<Home />} />
        <Route path="/genesis-ui-2/services" element={<Services />} />
        <Route path="/genesis-ui-2/services/hydrogen" element={<Hydrogen />} />
        <Route path="/genesis-ui-2/services/cng" element={<CNG />} />
        <Route path="/genesis-ui-2/services/ev" element={<EV />} />
        <Route path="/genesis-ui-2/about" element={<About />} />
        <Route path="/genesis-ui-2/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;