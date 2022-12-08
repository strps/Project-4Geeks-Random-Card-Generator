/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let intervalId = null;

window.onload = function() {
  newCard();

  let new_card_button = document.getElementById("new-card-button");
  new_card_button.addEventListener("click", newCard);

  let timerButton = document.getElementById("timer-button");
  timerButton.addEventListener("click", TimerHandler);
  let card = document.getElementsByClassName("card")[0];

  let width_input = document.getElementById("width-text-input");
  width_input.addEventListener("input", () => {
    card.style.width = width_input.value + "px";
  });

  let height_input = document.getElementById("height-text-input");
  height_input.addEventListener("input", () => {
    card.style.height = height_input.value + "px";
  });
};

function TimerHandler() {
  if (!intervalId) {
    intervalId = setInterval(() => newCard(), 10000);
    document
      .getElementById("timer-button")
      .classList.replace("btn-secondary", "btn-warning");
  } else {
    clearInterval(intervalId);
    intervalId = null;
    document
      .getElementById("timer-button")
      .classList.replace("btn-warning", "btn-secondary");
  }
}

function newCard(e) {
  let card = document.getElementsByClassName("card")[0];

  let number = Math.floor(Math.random() * 13 + 2);
  let suit = Math.floor(Math.random() * 4);

  if (suit < 2) {
    card.classList.replace("red", "black");
  } else {
    card.classList.replace("black", "red");
  }

  //Suit symbols as svg tags
  let suits = ["♠", "♣", "♥", "♦"];

  var card_elements = card.children;

  card_elements[0].innerHTML = suits[suit];
  card_elements[2].innerHTML = suits[suit];

  switch (number) {
    case 14:
      number = "A";
      break;
    case 13:
      number = "K";
      break;
    case 12:
      number = "Q";
      break;
    case 11:
      number = "J";
      break;
    default:
      number = number;
  }

  card_elements[1].innerHTML = number;
}
