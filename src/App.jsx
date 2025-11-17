import { useState, useEffect } from "react";
import FilterComponent from "./components/filterComponent";
import NavComponent from "./components/NavComponent";
import MainBodyComponent from "./components/MainBodyComponent";
import CountriesComponent from "./components/CountriesComponent";
import AttributesComponent from "./components/AttributesComponent";
import "./App.css";


function App() {

  function filterTask() {}

  return (
    <div>
      <header>
        <title>CoffeeFilter</title>
      </header>
      <NavComponent />
      <MainBodyComponent />
      <div className="downArrow"></div>
      <CountriesComponent />
      <AttributesComponent />
      <div>
        <h1>Title</h1>
        <FilterComponent onFilter={filterTask} />
      </div>
    </div>
  );
}
export default App;
