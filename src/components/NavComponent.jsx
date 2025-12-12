import coffeeBeanIcon from '.././assets/coffee-bean-icon.png';
import coffeeCupIcon from '.././assets/coffee-cup-icon.png';

function NavComponent() { 

  // handle scrolling to the section of choice
  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav id="mainNav">
      <img id="coffeeBeanIcon" src={coffeeBeanIcon} alt="coffee-bean-icon" />
      <div className="navContainer">
        <h1>CoffeeFilter</h1>
        <ul className="navOptions">
          <li className="navOptionFilter">
            <span 
              onClick={() => handleScrollTo('filter-area')} 
            >
              Filter
            </span>
          </li>
          <li className="navOptionCountries">
            <span 
              onClick={() => handleScrollTo('countries')} 
            >
              Countries
            </span>
          </li>
          <li className="navOptionAttributes">
            <span 
              onClick={() => handleScrollTo('attributes')} 
            >
              Attributes
            </span>
          </li>
          <li className="navOptionMetadata">
            <span 
              onClick={() => handleScrollTo('coffee-card-list-container')} 
            >
              Metadata
            </span>
          </li>
        </ul>
      </div>
      <img id="coffeeCupIcon" src={coffeeCupIcon} alt="coffee-cup-icon" />
    </nav>
  );
}

export default NavComponent;