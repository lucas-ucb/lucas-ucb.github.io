import { useState, useEffect } from "react";
import coffeeFilter from ".././assets/coffee-filter.png";

function AttributesComponent() {
  const [tooltip, setTooltip] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  const descriptions = {
    Aroma: "Aroma (Out of 10) refers to the scent or fragrance of the coffee.",
    Flavor: "Flavor (Out of 10) of coffee is evaluated based on the taste, including any sweetness, bitterness, acidity, and other flavor notes.",
    Aftertaste: "Aftertaste (Out of 10) refers to the lingering taste that remains in the mouth after swallowing the coffee.",
    Acidity: "Acidity (Out of 10) in coffee refers to the brightness or liveliness of the taste.",
    Body: "Body (Out of 10) refers to the thickness or viscosity of the coffee in the mouth.",
    Balance: "Balance (Out of 10) refers to how well the different flavor components of the coffee work together.",
    Uniformity: "Uniformity (Out of 10) refers to the consistency of the coffee from cup to cup.",
    CleanCup: "CleanCup (Out of 10) refers to a coffee that is free of any off-flavors or defects, such as sourness, mustiness, or staleness.",
    Sweetness: "Sweetness (Out of 10) can be described as caramel-like, fruity, or floral, and is a desirable quality in coffee.",
    CupperPoints: "CupperPoints (Out of 10) are assigned by professionals who score coffee based on several attributes collectively.",
    TotalCupPoints: "TotalCupPoints (Out of 100) is the overall score of the coffee, aggregating all previous scoring factors.",
    Color: "Color refers to the visual appearance of the coffee beans, which can indicate how they were roasted.",
    Country: "The country of origin can greatly influence the flavor profile of coffee, as different regions produce different coffee types.",
    Altitude: "The altitude at which the coffee is grown. There are minimum, maximum, and mean measurements for this attribute.",
  };

  const handleClick = (item) => {
    setTooltip(descriptions[item]);
    setShowTooltip(true);
  };

  useEffect(() => {
    const closeTooltipOnClickOutside = (e) => {
      if (!e.target.closest(".tooltip") && !e.target.closest("button")) {
        setShowTooltip(false);
      }
    };
    window.addEventListener("click", closeTooltipOnClickOutside);
    return () => {
      window.removeEventListener("click", closeTooltipOnClickOutside);
    };
  }, []);

  return (
    <div id="attributes">
      <div className="attributesContainer">
        <h1>What Attributes Can You Filter By?</h1>
        <p>
          Great question! CoffeeFilter supports filtering using <b>any</b> of
          the attributes below. Have fun exploring!
        </p>
        <div className="attributesTextContainer">
          <ul>
            {Object.keys(descriptions).map((item) => (
              <li key={item}>
                <button
                  className="attributesBtn"
                  onClick={() => handleClick(item)} // Show the tooltip
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {showTooltip && tooltip && (
          <div className="tooltip" style={{ top: `2100px`, left: `1100px` }}>
            <p>{tooltip}</p>
          </div>
        )}
        <img id="coffeeFilter" src={coffeeFilter} alt="coffee-filter" />
        <a href="https://www.freepik.com/icon/coffee-filter_8507801#fromView=keyword&page=1&position=51&uuid=f25f1bd8-8601-4fb4-a7b0-eea7b4a9ca7e">
          Icon by Daniel Ceha
        </a>
      </div>
    </div>
  );
}

export default AttributesComponent;
