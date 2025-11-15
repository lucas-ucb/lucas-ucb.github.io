import coffeeMap from ".././assets/coffee-map.png"

function CountriesComponent() {
  return (
    <div id="countries">
      <div className="countriesContainer">
        <h1>Where Does Our Coffee Data Come From?</h1>
        <img id="coffeeMap" src={coffeeMap} alt="coffee-map" />
      </div>
      <div id="countriesRepresentedContainer">
        <h2>Countries Represented</h2>
        <ul>
          <li>
            <a href="https://en.wikipedia.org/wiki/Colombia">Colombia</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Taiwan">Taiwan</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Laos">Laos</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Costa_Rica">Costa Rica</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Guatemala">Guatemala</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Tanzania">Tanzania</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Ethiopia">Ethiopia</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Thailand">Thailand</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Brazil">Brazil</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/United_States">
              United States
            </a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Kenya">Kenya</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Uganda">Uganda</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Indonesia">Indonesia</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Peru">Peru</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Panama">Panama</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Nicaragua">Nicaragua</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Vietnam">Vietnam</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Honduras">Honduras</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/El_Salvador">El Salvador</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Madagascar">Madagascar</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Mexico">Mexico</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Myanmar">Myanmar</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CountriesComponent;
