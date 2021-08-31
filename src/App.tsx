import React, {useEffect, useState} from 'react';
import './App.css';

import Image from './AnnotateScreenshot/image/index'

function App() {

  const [blob,setBlob] = useState();

  useEffect(() =>{
    //getBlob('https://img11.360buyimg.com/imagetools/jfs/t1/159263/28/15023/416077/6065865bE478fb1dc/00e5797fba7243d3.png')
  },[])

  const getBlob = (url :string) => {
    if (!url) {
      return;
    }

    let contentType = "";
    fetch(url, {
      //@ts-ignore
      responseType: "arraybuffer",
    })
        .then((r) => {
          // @ts-ignore
          contentType = r.headers.get("content-type");
          return r.blob();
        })
        .then((blob) => {
          new Response(blob).arrayBuffer().then((buffer) => {
            let binary = "";
            const bytes = new window.Uint8Array(buffer);

            for (let i = 0; i < bytes.byteLength; i++) {
              binary += String.fromCharCode(bytes[i]);
            }
            // @ts-ignore
            setBlob("data:" + contentType + ";base64," + window.btoa(binary),)
          });
        });
  };

  return (
    <div className="App">
      <Image
          blob={'https://img11.360buyimg.com/imagetools/jfs/t1/159263/28/15023/416077/6065865bE478fb1dc/00e5797fba7243d3.png'}
          onSave={() => {}}
          onCancel={() => {}}
          toolsFixed
      />
    </div>
  );
}

export default App;
