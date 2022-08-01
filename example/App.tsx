import React, { useState } from "react";
import "./App.css";

import Image from "../src";
import { Button } from "antd";

function App() {
  const [src, updateSrc] = useState(
    "https://img14.360buyimg.com/imagetools/jfs/t1/96510/13/24764/13705/62e76ef9E8c687f12/aa02d547d3f179cd.png"
  );
  const onClick = () => {
    updateSrc(
      "https://img14.360buyimg.com/imagetools/jfs/t1/183379/3/15413/142565/60fa8591E25c929f2/142bc255bb132192.png"
    );
  };
  return (
    <div className="App">
      <Button onClick={onClick}>替换</Button>
      <Image
        blob={src}
        onSave={(data) => {
          console.log(data);
        }}
        onCancel={() => {}}
        toolsFixed
        container={() => document.body}
        ratio={window.devicePixelRatio}
      />
    </div>
  );
}

export default App;
