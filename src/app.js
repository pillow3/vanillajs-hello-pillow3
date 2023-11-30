/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // FETCH HTML
  const refresh = document.querySelector("#generate");
  const number = document.querySelector(".number");
  const suits = document.querySelectorAll(".suit");

  const randomCard = () => {
    // DECK
    const cards = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    const suitCard = ["♥️", "♦️", "♠️", "♣️"];
    const arrColor = ["black", "rgb(204, 22, 22)"];

    // RANDOM
    const getRandomNumber = cards[Math.floor(Math.random() * cards.length)];
    const getRandomSuit = suitCard[Math.floor(Math.random() * suitCard.length)];
    const getRandomColor =
      arrColor[Math.floor(Math.random() * arrColor.length)];

    // SHOW NUMBER IN HMTL
    number.textContent = getRandomNumber;

    // SHOW SUIT IN HTML & CHANGE COLOR
    suits.forEach(suit => {
      suit.textContent = getRandomSuit;
      suit.style.color = getRandomColor;
    });
  };

  refresh.addEventListener("click", randomCard);
};
