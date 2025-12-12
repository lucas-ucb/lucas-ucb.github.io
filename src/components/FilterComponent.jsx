import { useState } from 'react';
import RangeSlider from "./RangeSliderComponent";

const ALL_COUNTRIES = [
  "Brazil", "Burundi", "China", "Colombia", "Costa Rica", "Ecuador", "El Salvador",
  "Ethiopia", "Guatemala", "Haiti", "Honduras", "India", "Indonesia", "Ivory Coast",
  "Japan", "Kenya", "Laos", "Malawi", "Mexico", "Mauritius", "Myanmar", "Nicaragua",
  "Panama", "Papua New Guinea", "Peru", "Philippines", "Rwanda", "Taiwan", "Tanzania",
  "Thailand", "United States", "Uganda", "Vietnam", "Zambia"
];

const COLOR_OPTIONS = ["Green", "Blue-Green", "Bluish-Green"];

const SCORE_ATTRIBUTES = [
  "Aroma", "Flavor", "Aftertaste", "Acidity", "Body",
  "Balance", "Uniformity", "CleanCup", "Sweetness", "CupperPoints"
];

function FilterComponent({ onFilter }) {
  // Initial state sets values to the maximum range for the slider default position (so we see all results without filters)
  const [filters, setFilters] = useState({
    countries: [],
    // Scoring attributes (0-10)
    AromaMin: '', AromaMax: '',
    FlavorMin: '', FlavorMax: '',
    AftertasteMin: '', AftertasteMax: '',
    AcidityMin: '', AcidityMax: '',
    BodyMin: '', BodyMax: '',
    BalanceMin: '', BalanceMax: '',
    UniformityMin: '', UniformityMax: '',
    CleanCupMin: '', CleanCupMax: '',
    SweetnessMin: '', SweetnessMax: '',
    CupperPointsMin: '', CupperPointsMax: '',
    // TotalCupPoints (0-100)
    TotalCupPointsMin: '', TotalCupPointsMax: '',
    // Color (checkboxes)
    colors: [],
    // Altitude (m) - mapping to data keys: Low, High, Mean (Range 0-10000 assumed for filter)
    AltitudeLowMetersMin: '', AltitudeLowMetersMax: '', 
    AltitudeHighMetersMin: '', AltitudeHighMetersMax: '', 
    AltitudeMeanMetersMin: '', AltitudeMeanMetersMax: '', 
  });

  // update the data on input change
  const handleInputChange = (e) => {
    const { name, value, checked } = e.target; 

    if (name === 'countries' || name === 'colors') {
      const attributeName = name; 
      let newValues = [...filters[attributeName]];
      
      if (checked) {
        newValues.push(value);
      } else {
        newValues = newValues.filter(val => val !== value);
      }
      setFilters(prev => ({ ...prev, [attributeName]: newValues }));
    } else {
      setFilters(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleApplyFilter = () => {
    if (onFilter) onFilter(filters);
  };

  // resets the current filter state
  const handleClearFilter = () => {
    const emptyFilters = {
      countries: [],
      AromaMin: '', AromaMax: '', FlavorMin: '', FlavorMax: '',
      AftertasteMin: '', AftertasteMax: '', AcidityMin: '', AcidityMax: '',
      BodyMin: '', BodyMax: '', BalanceMin: '', BalanceMax: '',
      UniformityMin: '', UniformityMax: '', CleanCupMin: '', CleanCupMax: '',
      SweetnessMin: '', SweetnessMax: '', CupperPointsMin: '', CupperPointsMax: '',
      TotalCupPointsMin: '', TotalCupPointsMax: '',
      colors: [],
      AltitudeLowMetersMin: '', AltitudeLowMetersMax: '',
      AltitudeHighMetersMin: '', AltitudeHighMetersMax: '',
      AltitudeMeanMetersMin: '', AltitudeMeanMetersMax: '',
    };
    setFilters(emptyFilters);
    if (onFilter) onFilter(emptyFilters);
  };

  return (
    <div id="filter-area">
      <div className="filter-container">
        <h1>Filter Coffee Data</h1>
        <p>Select attributes below to narrow down the results.</p>

        {/* 1. Country Filter (Checkbox structure remains the same) */}
        <section className="filter-section country-filter">
          <h2>Country</h2>
          <div className="filter-checkbox-group country-checkbox-grid">
            {ALL_COUNTRIES.map(country => (
              <div key={country} className="country-checkbox-item">
                <input
                  type="checkbox"
                  id={`country-${country}`}
                  name="countries" 
                  value={country}
                  checked={filters.countries.includes(country)}
                  onChange={handleInputChange}
                />
                <label htmlFor={`country-${country}`}>{country}</label>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Scoring Attributes Filter (0-10) - USING RANGE SLIDER */}
        <section className="filter-section score-filter">
          <h2>Scoring Attributes (Out of 10)</h2>
          <div className="filter-grid">
            {SCORE_ATTRIBUTES.map(attr => (
              <RangeSlider 
                key={attr}
                name={attr} 
                label={attr} 
                minRange={0} 
                maxRange={10} 
                step={"0.01"} 
                minVal={filters[`${attr}Min`]} 
                maxVal={filters[`${attr}Max`]} 
                onChange={handleInputChange} 
              />
            ))}
          </div>
        </section>

        {/* 3. Total Cup Points Filter (0-100) - USING RANGE SLIDER */}
        <section className="filter-section total-score-filter">
          <h2>Total Cup Points (Out of 100)</h2>
          <div className="filter-grid-single">
            <RangeSlider 
                name={'TotalCupPoints'} 
                label={'Total Cup Points'} 
                minRange={0} 
                maxRange={100} 
                step={"0.01"} 
                minVal={filters.TotalCupPointsMin} 
                maxVal={filters.TotalCupPointsMax} 
                onChange={handleInputChange} 
            />
          </div>
        </section>

        {/* 4. Color Filter (Checkbox structure remains the same) */}
        <section className="filter-section color-filter">
          <h2>Color</h2>
          <div className="filter-checkbox-group">
            {COLOR_OPTIONS.map(color => (
              <div key={color}>
                <input
                  type="checkbox"
                  id={`color-${color}`}
                  name="colors"
                  value={color}
                  checked={filters.colors.includes(color)}
                  onChange={handleInputChange}
                />
                <label htmlFor={`color-${color}`}>{color}</label>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Altitude Filter (m) - USING RANGE SLIDER */}
        <section className="filter-section altitude-filter">
          <h2>Altitude (m)</h2>
          <div className="filter-grid">
            <RangeSlider 
                name={'AltitudeLowMeters'} 
                label={'Min Altitude (m)'} 
                minRange={0} 
                maxRange={10000} 
                step={"1"} 
                minVal={filters.AltitudeLowMetersMin} 
                maxVal={filters.AltitudeLowMetersMax} 
                onChange={handleInputChange} 
            />
            <RangeSlider 
                name={'AltitudeHighMeters'} 
                label={'Max Altitude (m)'} 
                minRange={0} 
                maxRange={10000} 
                step={"1"} 
                minVal={filters.AltitudeHighMetersMin} 
                maxVal={filters.AltitudeHighMetersMax} 
                onChange={handleInputChange} 
            />
            <RangeSlider 
                name={'AltitudeMeanMeters'} 
                label={'Mean Altitude (m)'} 
                minRange={0} 
                maxRange={10000} 
                step={"1"} 
                minVal={filters.AltitudeMeanMetersMin} 
                maxVal={filters.AltitudeMeanMetersMax} 
                onChange={handleInputChange} 
            />
          </div>
          <p className="hint">Altitude ranges are for demonstration.</p>
        </section>
        
        <div className="filter-actions">
          <button onClick={handleApplyFilter} className="apply-btn">Apply Filters</button>
          <button onClick={handleClearFilter} className="clear-btn">Clear Filters</button>
        </div>

      </div>
    </div>
  );
}

export default FilterComponent;