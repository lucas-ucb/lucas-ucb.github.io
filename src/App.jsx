import { useState, useEffect } from "react";
import FilterComponent from "./components/filterComponent";
import NavComponent from "./components/NavComponent";
import MainBodyComponent from "./components/MainBodyComponent";
import CountriesComponent from "./components/CountriesComponent";
import AttributesComponent from "./components/AttributesComponent";
import "./App.css";


function App() {
  const [text, setText] = useState("");

  function filterTask() {}

  function handleSearchBtn() {}

  function handleTextChange() {}

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
      <div id="filters">
        <div className="filtersContainer">
          <div className="filterContainer">
            <h1>Filters</h1>

          </div>
          <div className="searchContainer">
            <form onSubmit={handleSearchBtn}>
              <input
                id="add-task-textbox"
                type="text"
                value={text}
                onChange={handleTextChange}
                placeholder="Search by ID"
              />
              <button>Add Task</button>
            </form>
          </div>
          <div className="searchItemsContainer">

          </div>
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
