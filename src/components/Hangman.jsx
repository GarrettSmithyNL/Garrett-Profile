import { useEffect, useState } from "react";
import hangmanPic0 from "../photos/hangman0.svg";
import hangmanPic1 from "../photos/hangman1.svg";
import hangmanPic2 from "../photos/hangman2.svg";
import hangmanPic3 from "../photos/hangman3.svg";
import hangmanPic4 from "../photos/hangman4.svg";
import hangmanPic5 from "../photos/hangman5.svg";
import Keyborad from "./Keyborad";
import WordGuess from "./WordGuess";
import LostMessage from "./LostMessage";

const Hangman = () => {
  // Holds the picture of the hangman
  const hangmanPics = [
    hangmanPic0,
    hangmanPic1,
    hangmanPic2,
    hangmanPic3,
    hangmanPic4,
    hangmanPic5,
  ];

  // List of words use in the hangman game
  const words = [
    "PROBLEM",
    "SOLUTION",
    "PROGRAMMING",
    "DEVELOPMENT",
    "INNOVATION",
    "EXCELLENT",
    "STRATEGY",
    "OPTIMIZED",
    "EFFICIENT",
    "PRODUCTIVE",
    "PERFORMANCE",
    "SUCCESS",
    "CHALLENGE",
    "SPECIALIZED",
    "COMMUNICATION",
    "COLLABORATION",
    "LEADERSHIP",
    "KNOWLEDGE",
    "TECHNOLOGY",
    "MANAGEMENT",
    "QUALITY",
    "IMPROVEMENT",
    "SUPPORT",
    "EFFORT",
    "ACHIEVEMENT",
  ];

  // This an array of the alphabet
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // This pick and returns a random word from the list of words
  const pickRandomWord = () => {
    let pick = Math.floor(Math.random() * 25);
    return words[pick];
  };

  // This is used to remove the disabled attribute from the hangman keyboard
  const resetButtons = () => {
    alphabet.forEach((letter) => {
      document.querySelector(`#btn${letter}`).removeAttribute("disabled");
    });
  };

  // This resets the "blanks" to "_" from the letters
  const resetWords = () => {
    alphabet.forEach((letter) => {
      document.querySelectorAll(`#${letter}`).forEach((ele) => {
        ele.innerText = "_";
      });
    });
  };

  // This is used to reset the game when you loose
  const resetGame = () => {
    setGuesses(0);
    setLost(false);
    resetButtons();
    resetWords();
  };

  // This is the main function of the game that handles the clicks
  const buttonClick = (letter) => {
    // Checks  to see if the clicked letter is in the word.
    if (word.includes(letter)) {
      // If the letter is in the word, it changes all the appropriate "_" to the letter
      document.querySelectorAll(`#${letter}`).forEach((ele) => {
        ele.innerText = letter;
      });
      // This disables the clicked button so you cant click it again
      document.querySelector(`#btn${letter}`).setAttribute("disabled", true);
    } else {
      // If you loose the game it sets the Lost state to true which triggers the
      // game clean up function "resetGame" in the useEffect
      if (guesses > 4) {
        setLost(true);
      } else {
        // If the player still has guesses left this increases the amount of
        // failed guesses by one and set the button not to be clickable
        setGuesses(guesses + 1);
        document.querySelector(`#btn${letter}`).setAttribute("disabled", true);
      }
    }
  };

  // All the states that is used in the app
  const [guesses, setGuesses] = useState(0);
  const [lost, setLost] = useState(false);
  const [word, setWord] = useState(pickRandomWord().split(""));
  const [showLostMessage, setShowLostMessage] = useState(false);

  // This is the updater that checks the status of lost
  useEffect(() => {
    // This timer is used to only show the lost message for 5 seconds
    let timer;
    // This is used to set the word at the beginning of the game
    if (!lost) {
      setWord(pickRandomWord().split(""));
    }
    // This is used when the player looses the game, the game is reset,
    // sets showLostMessage to true in a timer
    if (lost) {
      resetGame();
      setShowLostMessage(true);
      timer = setTimeout(() => setShowLostMessage(false), 5000);
    }
  }, [lost]);

  return (
    <div className="hangmanHolder">
      <h3>Hangman Game</h3>
      {showLostMessage ? (
        <LostMessage word={word.join("")} />
      ) : (
        <>
          <img
            src={hangmanPics[guesses]}
            alt="Hangman Frame"
          />
          <WordGuess word={word} />
          <Keyborad
            alphabet={alphabet}
            onClick={buttonClick}
          />
        </>
      )}
    </div>
  );
};

export default Hangman;
