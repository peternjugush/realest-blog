import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Login from "./components/Login";
import Determinance from "./components/Determinance";
import Footer from "./components/Footer";
import Loose from "./components/Loose";
import SearchBar from "./components/searchbar";
const App = () => {

    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/determinance" element={<Determinance />} />
          <Route path="/loose" element={<Loose/>} />
          <Route path="/searchbar" element={<SearchBar/>} />

        </Routes>
        <Footer />
      </Router>
      
    )
  }


export default App