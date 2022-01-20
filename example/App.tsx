import React, { useState } from "react";
import "./App.css";

import Image from "../src";
import { Button } from "antd";

function App() {
  const [src,updateSrc] = useState('https://img11.360buyimg.com/imagetools/jfs/t1/159263/28/15023/416077/6065865bE478fb1dc/00e5797fba7243d3.png')
  const onClick = () => {
    updateSrc('https://img14.360buyimg.com/imagetools/jfs/t1/183379/3/15413/142565/60fa8591E25c929f2/142bc255bb132192.png')
  }
  return (
    <div className="App">
      <Button onClick={onClick}>替换</Button>
      <Image
        blob={src}
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
