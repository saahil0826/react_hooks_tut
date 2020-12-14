import React, { useState, useEffect } from "react";
import axios from "axios";
import "./JokeList.css";
import Joke from "./Joke.js";
const { v4: uuidv4 } = require("uuid");

function JokeList() {


  const number = 10;
  const [joke, setJoke] = useState([]);
  const [n, setCount] = useState(0);


  async function getData() {
    let jokes = [];
    while (jokes.length < number) {
      const response = await axios.get(`https://icanhazdadjoke.com/`, {
        headers: { Accept: "application/json" }
      });
      let newJoke = response.data.joke;

      jokes.push({ id: uuidv4(), text: newJoke, votes: 0 });
    }
    setJoke(jokes);
    console.log(jokes);
  }
  useEffect(() => {
    getData();
  }, []);


  function increment(){
    setCount(n + 1)
  }

  return (
    <div className="JokeList">
      <div className="JokeList-sidebar">
        <h1 className="JokeList-title">
          <span>Dad</span> Jokes{" "}
        </h1>
        <img
          src="https://cdn4.iconfinder.com/data/icons/emoji-37/512/feeling-Emoji-face-emoticon-emotion-28-512.png"
          alt="smiley"
        />
        <button className="JokeList-getmore">New Jokes</button>
      </div>
      <div className="JokeList-joke">
        {joke.map(j => (
          <Joke
            key={j.id}
            text={j.text}
            votes={j.votes}
            upVote
          />
        ))}
      </div>
    </div>
  );
}

export default JokeList;
