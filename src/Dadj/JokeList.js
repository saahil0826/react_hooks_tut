import React, { useState, useEffect } from "react";
import axios from "axios";
import "./JokeList.css";
import Joke from "./Joke.js";
const { v4: uuidv4 } = require("uuid");

function JokeList() {
  const number = 4;
  const saveditems = JSON.parse(window.localStorage.getItem("jokes"));
  const [joke, setJoke] = useState(saveditems || []);
  const [loading, setLoading] = useState(false);

  let seenJokes = new Set(joke.map(j => j.text));


  async function getData() {
    let jokes = [];
    while (jokes.length < number) {
      const response = await axios.get(`https://icanhazdadjoke.com/`, {
        headers: { Accept: "application/json" }
      });
      let newJoke = response.data.joke;
      if (!seenJokes.has(newJoke)) {
        jokes.push({ id: uuidv4(), text: newJoke, votes: 0 });
      }
      else {
        console.log("found a duplicate");
        console.log(newJoke);
      }
    }
    setJoke(abc => [...joke, ...jokes]);
    setLoading(false);
    window.localStorage.setItem("jokes", JSON.stringify(jokes));
  }

  useEffect(() => {
    window.localStorage.setItem("jokes", JSON.stringify(joke));
  }, [joke]);

  useEffect(() => {
    if (joke.length === 0) {
      getData();
    }
  }, []);

  const handleVote = (id, delta) => {
    setJoke(
      joke.map(j => (j.id === id ? { ...j, votes: j.votes + delta } : j))
    );
  };

  useEffect(() => {
    window.localStorage.setItem("jokes", JSON.stringify(joke));
  }, [joke]);

  const handleClick = () => {
    setLoading(true);
    getData();
  };
  let jokes = joke.sort((a,b) => b.votes - a.votes);
  return (
    <>
      {loading ? (
        <div className="JokeList-spinner">
          <i className="far fa-5x fa-laugh fa-spin" />
          <h1 className="JokeList-title">Loading...</h1>
        </div>
      ) : (


        <div className="JokeList">
          <div className="JokeList-sidebar">
            <h1 className="JokeList-title">
              <span>Dad</span> Jokes{" "}
            </h1>
            <img
              src="https://cdn4.iconfinder.com/data/icons/emoji-37/512/feeling-Emoji-face-emoticon-emotion-28-512.png"
              alt="smiley"
            />
            <button className="JokeList-getmore" onClick={handleClick}>
              New Jokes
            </button>
          </div>
          <div className="JokeList-joke">
            {jokes.map((j, index) => (
              <Joke
                index={index}
                key={j.id}
                text={j.text}
                votes={j.votes}
                upVote={() => handleVote(j.id, 1)}
                downVote={() => handleVote(j.id, -1)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default JokeList;
