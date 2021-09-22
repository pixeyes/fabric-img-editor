import React from "react";
import "./App.css";

import Image from "../src";

function App() {

  return (
    <div className="App">
      <Image
        blob={"https://img11.360buyimg.com/imagetools/jfs/t1/159263/28/15023/416077/6065865bE478fb1dc/00e5797fba7243d3.png"}
        onSave={() => {
        }}
        onCancel={() => {
        }}
        toolsFixed
        container={() => document.getElementById('pickerContainer')}
      />
    </div>
  );
}

export default App;