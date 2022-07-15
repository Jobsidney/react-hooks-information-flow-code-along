import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  function handleCHangeColor(props){
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
    console.log(props);
    
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleCHangeColor}/>
      <Child onChangeColor={handleCHangeColor}/>
    </div>
  );
}

export default Parent;
