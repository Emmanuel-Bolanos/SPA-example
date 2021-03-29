import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://picsum.photos/id/1/300/300" title="Lorem Picsum" alt="Lorem Picsum" />
        <p> Hello, my name is Emmanuel! </p>
        <p>{count}</p>
        <button onClick={handleIncrease}> + </button>
        <button onClick={handleDecrease}> - </button>
        <p> Testing CI/CD Pipeline </p>
      </header>
    </div>
  );
}

export default App;
