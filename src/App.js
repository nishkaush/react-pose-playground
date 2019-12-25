import React, { useState } from "react";
import OpacityComp from "./components/OpacityComp";
import SideMenu from "./components/SideMenu";
import "./App.css";

const App = () => {
  const [opacityDivVisible, changeVisibility] = useState(false);
  const [sideMenu, changeSideMenu] = useState(false);

  return (
    <div className="App">
      <SideMenu show={sideMenu} />
      <h1>Welcome to react pose animations</h1>

      <OpacityComp
        show={opacityDivVisible}
        initWidth="10px"
        initHeight="10px"
      />
      <button onClick={() => changeVisibility(!opacityDivVisible)}>
        {opacityDivVisible ? "Make div smaller" : "Make div bigger"}
      </button>
      <br />
      <button onClick={() => changeSideMenu(!sideMenu)}>Open Side Menu</button>
      <br />
      <br />
    </div>
  );
};

export default App;
