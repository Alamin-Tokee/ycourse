import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/HomePage/Homepage";
import Coursespage from "./pages/Coursespage/Coursespage";
import Aboutpage from "./pages/Aboutpage/Aboutpage";
import Contactpage from "./pages/Contactpage/Contactpage";

function App() {
  //change nabavar style on scroolling
  window.addEventListener("scroll", () => {
    document
      .querySelector("nav")
      .classList.toggle("window-scroll", window.scrollY > 0);
  });

  return (
    <div className="app">
      <Homepage />
      {/* <Coursespage /> */}
      {/* <Aboutpage /> */}
      {/* <Contactpage /> */}
    </div>
  );
}

export default App;
