import React, { useState } from "react";
import OpacityComp from "./components/OpacityComp";
import "./App.css";

const App = () => {
  const [opacityDivVisible, changeVisibility] = useState(false);
  return (
    <div className="App">
      <h1>Welcome to react pose animations</h1>
      <OpacityComp
        show={opacityDivVisible}
        initWidth="10px"
        initHeight="10px"
      />
      <button onClick={() => changeVisibility(!opacityDivVisible)}>
        {opacityDivVisible ? "Make it smaller" : "Make it bigger"}
      </button>
    </div>
  );
};

export default App;
