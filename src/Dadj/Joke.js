import React from "react";
import "./Joke.css";

export default function Joke({ text, votes, upVote, downVote, index }) {
  function getColor() {
    if (votes >= 15) {
      return "rgb(37, 173, 88)";
    } else if (votes >= 12) {
      return "rgb(71, 204, 31)";
    } else if (votes >= 19) {
      return "rgb(134, 244, 37)";
    } else if (votes >= 6) {
      return "rgb(224, 217, 42)";
    } else if (votes >= 3) {
      return "rgb(213, 172, 50)";
    } else if (votes >= 0) {
      return "rgb(230, 151, 34)";
    } else {
      return "rgb(219, 31, 31)";
    }
  }

  function getEmoji() {
    if (votes >= 15) {
      return "em em-rolling_on_the_floor_laughing";
    } else if (votes >= 12) {
      return "em em-laughing";
    } else if (votes >= 19) {
      return "em em-smiley";
    } else if (votes >= 6) {
      return "em em-slightly_smiling_face";
    } else if (votes >= 3) {
      return "em em-neutral_face";
    } else if (votes >= 0) {
      return "em em-confused";
    } else {
      return "em em-angry";
    }
  }

  return (
    <div className="Joke">
      <div className="Joke-buttons">
        <i className="fas fa-arrow-up" onClick={upVote} />
        <span className="Joke-votes" style={{ borderColor: getColor() }}>
          {votes}
        </span>
        <i className="fas fa-arrow-down" onClick={downVote} />
      </div>
      <div className="Joke-text"> {text}</div>
      <div className="Joke-smiley">
        <i className={getEmoji()} />
      </div>
    </div>
  );
}
