import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor }) {
  console.log(onChangeColor);
  return <div onClick={()=>onChangeColor('hello Jovan')} className="child" style={{ backgroundColor: "#FFF" }} />;
}

export default Child;
