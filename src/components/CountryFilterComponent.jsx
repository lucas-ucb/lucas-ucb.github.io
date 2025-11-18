import { useState } from "react";

const COUNTRIES = [
  "Brazil","Burundi","China","Colombia","Costa Rica","Ecuador","El Salvador",
  "Ethiopia","Guatemala","Haiti","Honduras","India","Indonesia","Ivory Coast",
  "Japan","Kenya","Laos","Malawi","Mexico","Mauritius","Myanmar","Nicaragua",
  "Panama","Papua New Guinea","Peru","Philippines","Rwanda","Taiwan","Tanzania",
  "Thailand","United States","Uganda","Vietnam","Zambia"
];

function CountryFilter({ label }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleCountry = (country) => {
    setSelected((prev) =>
      prev.includes(country)
        ? prev.filter((c) => c !== country)
        : [...prev, country]
    );
  };

  return (
    <div className="rangeSlider">
      <div className="labelRow">
        <p>{label}</p>
        <div className="toggleGroup">
          <input type="checkbox" checked={open} onChange={() => setOpen(!open)} />
        </div>
      </div>

      <div className={`sliderContent ${open ? "visible" : "hidden"}`}>
        <div className="countryScroll">
          {COUNTRIES.map((c) => (
            <label key={c} style={{ display: "block" }}>
              <input
                type="checkbox"
                checked={selected.includes(c)}
                onChange={() => toggleCountry(c)}
              />
              {" "}{c}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CountryFilter;
