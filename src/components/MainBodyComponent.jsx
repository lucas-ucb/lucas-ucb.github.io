import { useState, useEffect } from "react";
import cafeBackground from ".././assets/cafe-background.png"

function MainBodyComponent() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxTextStyle = {
    transform: `translate(-50%, ${-50 + scrollY * -0.7}%)`,
  };

  return (
    <div id="mainBody">
      <p className="bodyMainText" style={parallaxTextStyle}>
        discover more about coffee below
      </p>
      <img id="cafeBackground" src={cafeBackground} alt="cafe-background" />
    </div>
  );
}

export default MainBodyComponent;
