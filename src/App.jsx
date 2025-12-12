import { useState, useEffect } from 'react';
import NavComponent from "./components/NavComponent";
import MainBodyComponent from "./components/MainBodyComponent";
import CountriesComponent from "./components/CountriesComponent";
import AttributesComponent from "./components/AttributesComponent";
import FilterComponent from "./components/FilterComponent"; 
import CoffeeCardComponent from "./components/CoffeeCardComponent";
import "./App.css";
import COFFEE_DATA from "./data/coffee_data.json";

// Helper function to handle the main filtering logic
// disclosure: this relates to filtering; AI was used
const applyFilters = (data, filters) => {
  return data.filter(item => {
    
    // 1. Country Filter
    if (filters.countries.length > 0 && !filters.countries.includes(item.Country)) {
      return false;
    }

    // 2. Score and Total Points Filters (Out of 10 and Out of 100)
    const SCORE_ATTRIBUTES = [
      "Aroma", "Flavor", "Aftertaste", "Acidity", "Body",
      "Balance", "Uniformity", "CleanCup", "Sweetness", "CupperPoints", "TotalCupPoints"
    ];

    for (const attr of SCORE_ATTRIBUTES) {
      const minKey = `${attr}Min`;
      const maxKey = `${attr}Max`;
      // Use the actual data key, which might be a string, so parseFloat is needed
      const itemValue = parseFloat(item[attr]);

      if (filters[minKey] !== '' && (isNaN(itemValue) || itemValue < parseFloat(filters[minKey]))) {
        return false;
      }
      if (filters[maxKey] !== '' && (isNaN(itemValue) || itemValue > parseFloat(filters[maxKey]))) {
        return false;
      }
    }
    
    // 3. Color Filter
    if (filters.colors.length > 0) {
      // Data color values need to match the Title Case used in the filter component
      const itemColor = item.Color ? item.Color.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('-') : '';
      if (!filters.colors.includes(itemColor)) {
          return false;
      }
    }

    // 4. Altitude Filters (Low, High, Mean)
    const ALTITUDE_ATTRIBUTES = ["AltitudeLowMeters", "AltitudeHighMeters", "AltitudeMeanMeters"];

    for (const altAttr of ALTITUDE_ATTRIBUTES) {
        const minKey = `${altAttr}Min`;
        const maxKey = `${altAttr}Max`;
        const itemValue = parseFloat(item[altAttr]);

        // Check Minimum filter
        if (filters[minKey] !== '' ) {
            if (isNaN(itemValue) || itemValue < parseFloat(filters[minKey])) {
                return false;
            }
        }
        // Check Maximum filter
        if (filters[maxKey] !== '' ) {
            if (isNaN(itemValue) || itemValue > parseFloat(filters[maxKey])) {
                return false;
            }
        }
    }

    return true;
  });
};


function App() {
  const [filteredData, setFilteredData] = useState(COFFEE_DATA); // keep state of COFFEE_DATA
  const [recordIds, setRecordIds] = useState(""); // keep state of IDs

  // disclosure: the following functions are associated with the filter, and were made using AI
  // effect to set initial IDs and console log
  useEffect(() => {
     console.log(`Initial data load: ${COFFEE_DATA.length} total items.`);
     setRecordIds(COFFEE_DATA.map(item => item.Id).join(', '));
  }, []);

  // this function handles when filters changes state
  const handleFilterChange = (filters) => {
    console.log("Applying Filters:", filters);
    const results = applyFilters(COFFEE_DATA, filters);
    setFilteredData(results);
    
    // Extract and format IDs for display
    const ids = results.map(item => item.Id).join(', ');
    setRecordIds(ids);

    console.log(`Filter results: ${results.length} items found.`);
  };
  
  return (
    <div>
      <header>
        <title>CoffeeFilter</title>
      </header>
      {/* the 4 following components were made by me */}
      <NavComponent />
      <MainBodyComponent />
      <div className="downArrow"></div>
      <CountriesComponent />
      <AttributesComponent />
      {/* FilterComponent was made with AI */}
      <FilterComponent onFilter={handleFilterChange} />
      {/* CoffeeCardComponent was made with AI */}
      <CoffeeCardComponent data={filteredData} />
    </div>
  );
}

export default App;