import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/HomePage/Homepage";
import Coursespage from "./pages/Coursespage/Coursespage";
import Aboutpage from "./pages/Aboutpage/Aboutpage";
import Contactpage from "./pages/Contactpage/Contactpage";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  //change nabavar style on scroolling
  window.addEventListener("scroll", () => {
    document
      .querySelector("nav")
      .classList.toggle("window-scroll", window.scrollY > 0);
  });

  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<Aboutpage />} />
        <Route path="courses" element={<Coursespage />} />
        <Route path="contact" element={<Contactpage />} />
      </Routes>
      <Footer />
      {/* <Homepage /> */}
      {/* <Coursespage /> */}
      {/* <Aboutpage /> */}
      {/* <Contactpage /> */}
    </div>
  );
}

export default App;
