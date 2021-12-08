import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Car from "./components/Car";
import List from "./components/List";
import Brand from "./components/UI";
import DataTable from "./components/Table";

/*const number = [5, 2];
const text = (
<>
  <h1 className = "red" id = "test">Hello World!!!</h1>
  <br>
  </br>
  {number[0] + number[1]}
</>);

class Car extends React.Component{
  render(){
    return text;
  }
}

function List() {
  return text;
}*/

ReactDOM.render(
  <>
    <DataTable />
    <Car age="21" eye="black" />
    <List />
    <Brand />
  </>,
  document.getElementById("root")
);