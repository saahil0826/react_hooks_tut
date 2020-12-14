import React from "react";
import useInputState from "../hooks/useInputState.js";

export default function SimpleFormInputHook() {
  const [name, updateName, resetName] = useInputState("");
    const [age, updateAge, resetAge] = useInputState("");

  return (
    <div>
      <h1>Form example with imported Hook</h1>
      <p>your name is {name} and your are {age} yrs old!</p>
      <input
        type="text"
        id="name"
        onChange={updateName}
        name="name"
        value={name}
      />
        <button onClick={resetName}>Submit!</button>
      <input
        type="number"
        id="age"
        onChange={updateAge}
        name="name"
        value={age}
      />
      <button onClick={resetAge}>Submit!</button>
    </div>
  );
}
