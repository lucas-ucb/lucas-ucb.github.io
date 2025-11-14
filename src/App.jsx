import { useState } from 'react'
import FilterComponent from './components/filterComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function filterTask() {

  }

  return (
    <div>
      <FilterComponent onFilter={filterTask} />
    </div>
  );
}

export default App;
