import React, { useState } from "react";
import "./Board.css";
import cellArr from "./data.js";
import Props from "./Props";

const Board = () => {
  let colorOdd = "pink";
  let colorEven = "orange";
  let snakeStart = [
    96, 84, 90, 78, 72, 66, 60, 54, 42, 48, 36, 24, 30, 18, 12, 6,
  ];
  let snakeEnd = [91, 79, 85, 73, 67, 61, 55, 49, 37, 43, 31, 19, 2, 13, 7, 1];
  let ladderStart = [95, 85, 75, 65, 55, 45, 35, 25, 15, 5];
  let ladderEnd = [100, 92, 82, 72, 62, 52, 42, 32, 22, 12];
  const [playturn, setPlayturn] = useState("P1");
  const [position1, setPosition1] = useState(1);
  const [position2, setPosition2] = useState(1);
  let Player1Img = "🔵";
  let Player2Img = "😈";

  let die = [1, 2, 3, 4, 5, 6];
  let dieSpin = die[Math.round(Math.random() * (die.length - 1))];

  function Game() {
    // refdice+=dieSpin
    console.log(dieSpin);
    if (playturn === "P1") {
      if (
        ladderStart.includes(dieSpin + position1) &&
        dieSpin + position1 <=100
      ) {
        setPosition1(ladderEnd[ladderStart.indexOf(dieSpin + position1)]);
        console.log("POS 1:", position1 + dieSpin);
      } else {
        setPosition1(
          dieSpin + position1 <= 100 && !snakeStart.includes(dieSpin + position1)
            ? dieSpin + position1
            : snakeEnd[snakeStart.indexOf(dieSpin + position1)]
        );
        console.log("POS 1:", position1 + dieSpin);
      }
      setPlayturn("P2");
    } else {
      if (
        ladderStart.includes(dieSpin + position2) &&
        dieSpin + position2 <= 100
      ) {
        setPosition2(ladderEnd[ladderStart.indexOf(dieSpin + position2)]);
        console.log("POS 2:", position2 + dieSpin);
      } else {
        setPosition2(
          dieSpin + position2 <= 100 && !snakeStart.includes(dieSpin + position2)
            ? dieSpin + position2
            : snakeEnd[snakeStart.indexOf(dieSpin + position2)]
        );
        console.log("POS 2:", position2 + dieSpin);
      }
      setPlayturn("P1");
    }
  }
  return (
    <div className="main">
      <div className="onbutton">
        <h1>SNAKE & LADDER GAME</h1>
      </div>
      <span>
        <div className="gridclass">
          {cellArr.map((obj) => (
            <div
              className="block"
              // id={obj}
              style={{
                backgroundColor: obj.id % 2 === 0 ? colorEven : colorOdd,
              }}
            >
              <div></div>
              <Props
                cellno={obj.id}
                snake={obj.snake === "🐍" ? obj.snake : ""}
                ladder={obj.ladder === "🚀" ? obj.ladder : ""}
                player1={`${position1}` === obj.id ? Player1Img : ""}
                // player1={`${position1}` === obj.id ? Player1Img : ""}
                player2={`${position2}` === obj.id ? Player2Img : ""}
              />
            </div>
          ))}
        </div>
      </span>
      <button id="btn" onClick={Game}>
        click here{" "}
        <span>
          {" "}
          <h1 id="score"> </h1>
        </span>
      </button>
      <div className="score"> 
        <h1>Player1:{position1 === 100 ? "player1 is a winner":position1}  </h1>
        <h1>Player2:{position2 === 100 ? "player2 is a winner":position2} </h1>
      </div>
    </div>
  );
};
export default Board;
