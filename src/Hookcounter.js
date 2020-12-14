import React, { useState } from "react";

function Hookcounter() {
  const [count, setCount] = useState(110);


  return (
    <div>
      <h2>Hooks example 1</h2>
      <h2>Current Number:{count}</h2>
      <button onClick={() => setCount(count - 1)}> Subtract </button>
      <button onClick={()=> setCount(count+10)}>Add +10</button>
      <button onClick={() => setCount(count + 1)}> Add </button>
      <button onClick={() => setCount(count - 10)}> Subtract -10</button>


    </div>
  );
}

export default Hookcounter;
