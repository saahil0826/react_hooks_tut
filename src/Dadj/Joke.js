import React  from "react";
import "./Joke.css";


export default function Joke(props) {
  function getColor() {
    if (this.props.votes >= 15) {
      return "rgb(37, 173, 88)";
    } else if (this.props.votes >= 12) {
      return "rgb(71, 204, 31)";
    } else if (this.props.votes >= 19) {
      return "rgb(134, 244, 37)";
    } else if (this.props.votes >= 6) {
      return "rgb(224, 217, 42)";
    } else if (this.props.votes >= 3) {
      return "rgb(213, 172, 50)";
    } else if (this.props.votes >= 0) {
      return "rgb(230, 151, 34)";
    } else {
      return "rgb(219, 31, 31)";
    }
  }

  function getEmoji() {
    if (this.props.votes >= 15) {
      return "em em-rolling_on_the_floor_laughing";
    } else if (this.props.votes >= 12) {
      return "em em-laughing";
    } else if (this.props.votes >= 19) {
      return "em em-smiley";
    } else if (this.props.votes >= 6) {
      return "em em-slightly_smiling_face";
    } else if (this.props.votes >= 3) {
      return "em em-neutral_face";
    } else if (this.props.votes >= 0) {
      return "em em-confused";
    } else {
      return "em em-angry";
    }
  }
  return (
    <div className="Joke">
      <div className="Joke-buttons">
      <i className="fas fa-arrow-up" onClick={props.upVote} />
        <span className="Joke-votes" >
          {props.votes}
        </span>
        <i className="fas fa-arrow-down" onClick={props.downVote} />
      </div>
      <div className="Joke-text"> {props.text}</div>
      <div className="Joke-smiley">

      </div>
    </div>
  );
}
