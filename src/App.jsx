import { useState, useEffect } from "react";
import FilterComponent from "./components/filterComponent";
import NavComponent from "./components/NavComponent";
import "./App.css";
import cafeBackground from "./assets/cafe-background.png"

function App() {
  const [count, setCount] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Function to update scroll position
  const handleScroll = () => {
    setScrollY(window.scrollY);  // Capture the scroll position
  };

  // Add event listener on component mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Parallax effect: Adjust text position based on scrollY
  const parallaxTextStyle = {
    transform: `translate(-50%, ${-50 + scrollY * -0.7}%)`,  // Adjust the multiplier to control movement
  };

  function filterTask() {}

  return (
    <div>
      <header>
        <title>CoffeeFilter</title>
      </header>
      <NavComponent />
      <div id="mainBody">
        <p className="bodyMainText" style={parallaxTextStyle}>discover more about coffee below</p>
        <img id="cafeBackground"src={cafeBackground} alt="cafe-background" />
      </div>
      <div className="downArrow"></div>
      <div id="countries">
        <div className="countriesContainer">

        </div>
      </div>
      <div id="qualities">
        <div className="qualitiesContainer">
          
        </div>
      </div>
      <div>
        <h1>Title</h1>
        <FilterComponent onFilter={filterTask} />
      </div>
    </div>
  );
}

export default App;
