import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Login from "./components/Login";
import Determinance from "./components/Determinance";
import Footer from "./components/Footer";
const App = () => {

    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/determinance" element={<Determinance />} />

        </Routes>
        <Footer />
      </Router>
      
    )
  }


export default App