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
  const hangmanPics = [
    hangmanPic0,
    hangmanPic1,
    hangmanPic2,
    hangmanPic3,
    hangmanPic4,
    hangmanPic5,
  ];

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

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const pickRandomWord = () => {
    let pick = Math.floor(Math.random() * 25);
    return words[pick];
  };

  const resetButtons = () => {
    alphabet.forEach((letter) => {
      document.querySelector(`#btn${letter}`).removeAttribute("disabled");
    });
  };

  const resetWords = () => {
    alphabet.forEach((letter) => {
      document.querySelectorAll(`#${letter}`).forEach((ele) => {
        ele.innerText = "_";
      });
    });
  };

  const resetGame = () => {
    setGuesses(0);
    setLost(false);
    resetButtons();
    resetWords();
  };

  const buttonClick = (letter) => {
    if (word.includes(letter)) {
      document.querySelectorAll(`#${letter}`).forEach((ele) => {
        ele.innerText = letter;
      });
      document.querySelector(`#btn${letter}`).setAttribute("disabled", true);
    } else {
      if (guesses > 4) {
        setLost(true);
      } else {
        setGuesses(guesses + 1);
        document.querySelector(`#btn${letter}`).setAttribute("disabled", true);
      }
    }
  };

  const [guesses, setGuesses] = useState(0);
  const [lost, setLost] = useState(false);
  const [word, setWord] = useState(pickRandomWord().split(""));
  const [showLostMessage, setShowLostMessage] = useState(false);
  const strWord = word.join("");

  useEffect(() => {
    let timer;
    if (!lost) {
      setWord(pickRandomWord().split(""));
    }
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
        <LostMessage word={strWord} />
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
