import React, { useState } from "react";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from "./Components/Income/Income";
import Expenses from "./Components/Expenses/Expenses";
import { useGlobalContext } from "./context/globalContext";


function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  console.log(global);

  
  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };




  return (
    <div className="App">
      <div className="Container">
        <div className="header">Welcome to Your Dashboard</div>
        <div className="mainContainer">
          <Navigation active={active} setActive={setActive} />
          <div className="main"> {displayData()} </div>
        </div>
      </div>
    </div>
  );
}

export default App;
