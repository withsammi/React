import './App.css'
import { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {

    if(counter < 20){
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter -1);
    }
  };

  return (
    <>
      <h1>COUNTER</h1>
      <p>{counter}</p>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
