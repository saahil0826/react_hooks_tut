import React from "react";
import Hookcounter from "./Hookcounter.js";
import Toggle from "./Toggle.js";
import SimpleFormInputHook from "./forms/SimpleFormInputHook.js";
import SimpleFormHooks from "./forms/SimpleFormHooks.js";
import SWMovies from "./movies/SWMovies.js";
import MoviesDB from "./movies/MoviesDB.js";
import JokeList from './Dadj/JokeList.js'

import "./App.css";

function App() {
  return (
    <div className="App">
      <MoviesDB />
    </div>
  );
}

export default App;
