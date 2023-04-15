import React, { useState } from "react";
import ReactDOM from "react-dom";

var count = 0;

function App() {
  const [state, setCount] = useState(44);

  function change() {
    setCount(12);
  }
  function increase() {
    count++;
    ReactDOM.render(<App />, document.getElementById("root"));
  }

  function decrease() {
    count--;
    ReactDOM.render(<App />, document.getElementById("root"));
  }

  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={change}> + </button>
      <button onClick={decrease}> - </button>
    </div>
  );
}

export default App;
