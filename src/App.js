import React from "react";
import "./css/index.css";
import Button from "./component/Button";

function App() {
  return (
    <div id="app">
      <div className="calculator">
        <h1 id="total">0</h1>
        <div className="digits flex">
          <Button className="digit" value="9" />
          <Button className="digit" value="8" />
          <Button className="digit" value="7" />
          <Button className="digit" value="6" />
          <Button className="digit" value="5" />
          <Button className="digit" value="4" />
          <Button className="digit" value="3" />
          <Button className="digit" value="2" />
          <Button className="digit" value="1" />
          <Button className="digit" value="0" />
        </div>
        <div className="modifiers subgrid">
          <Button className="modifier" value="AC" />
        </div>
        <div className="operations subgrid">
          <Button className="operation" value="/" />
          <Button className="operation" value="X" />
          <Button className="operation" value="-" />
          <Button className="operation" value="+" />
          <Button className="operation" value="=" />
        </div>
      </div>
    </div>
  );
}

export default App;
