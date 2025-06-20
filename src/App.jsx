import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    // const inputVal = inputRef.current.value;
    // const newResult = result + Number(inputVal);
    // setResult(newResult);
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    const inputVal = inputRef.current.value;
    const newResult = result - Number(inputVal);
    setResult(newResult);
  }

  function times(e) {
    e.preventDefault();
    const inputVal = inputRef.current.value;
    const newResult = result * Number(inputVal);
    setResult(newResult);
  }

  function divide(e) {
    e.preventDefault();
    const inputVal = inputRef.current.value;
    const newResult = result / Number(inputVal);
    setResult(newResult);
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = 0;
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div>
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p
          className="alert alert-danger"
          style={{ maxWidth: "200px" }}
          ref={resultRef}
        >
          {result}
        </p>

        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button className="btn btn-outline-danger" onClick={plus}>
          add
        </button>
        <button className="btn btn-outline-danger" onClick={minus}>
          subtract
        </button>
        <button className="btn btn-outline-danger" onClick={times}>
          multiply
        </button>
        <button className="btn btn-outline-danger" onClick={divide}>
          divide
        </button>
        <button className="btn btn-danger" onClick={resetInput}>
          reset input
        </button>
        <button className="btn btn-danger" onClick={resetResult}>
          reset result
        </button>
      </form>
    </div>
  );
}

export default App;
