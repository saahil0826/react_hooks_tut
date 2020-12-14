import React, { useState } from "react";
import useToggle from './hooks/useToggle.js'

function Toggle() {
  const [food, setFood] = useState(true);
  const [drink, setDrink] = useState(true);
  const [isHappy, toggleIsHappy] = useToggle(true);


  const toggle = () => {
    setDrink(!drink);
  };

  return (
    <div>
      <h2>Hooks example 2</h2>
      <h3>What do you want to eat?</h3>
      <p> with () inline function </p>
      <h3>{food ? "🍔" : "🍕"}</h3>
      <button onClick={() => setFood(!food)}>
        Click here if you want {food ? "pizza" : "burger"}
      </button>

      <h3>What do you want to drink?</h3>
        <p> with a function call </p>
      <h3>{drink ? "🥤" : "🍺"}</h3>
      <button onClick={toggle}>
        Click here if you want {!drink ? "coke" : "beer"}
      </button>


      <h2>Hooks example 3</h2>
        <p> with a function call from outside</p>
     <h3>{isHappy ? "😀" : "😫"}</h3>
     <button onClick={toggleIsHappy}>click me to make me {isHappy ? "sad" : "happy"}</button>


    </div>
  );
}

export default Toggle;
