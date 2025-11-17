import coffeeBeanIcon from '.././assets/coffee-bean-icon.png';
import coffeeCupIcon from '.././assets/coffee-cup-icon.png';

function FilterComponent() {
  return (
    <nav id="mainNav">
      <img id="coffeeBeanIcon" src={coffeeBeanIcon} alt="coffee-bean-icon" />
      <div className="navContainer">
        <h1>CoffeeFilter</h1>
        <ul className="navOptions">
          <li className="navOptionFilter">
            <a href="./">Filter</a>
          </li>
          <li className="navOptionCountries">
            <a href="./">Countries</a>
          </li>
          <li className="navOptionAttributes">
            <a href="./">Attributes</a>
          </li>
          <li className="navOptionMetadata">
            <a href="./">Metadata</a>
          </li>
        </ul>
      </div>
      <img id="coffeeCupIcon" src={coffeeCupIcon} alt="coffee-cup-icon" />
    </nav>
  );
}

export default FilterComponent;
