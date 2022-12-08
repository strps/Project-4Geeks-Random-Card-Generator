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
  let suits = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-spade-fill" viewBox="0 0 16 16">
    <path d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907z"/>
  </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-club-fill" viewBox="0 0 16 16">
    <path d="M11.5 12.5a3.493 3.493 0 0 1-2.684-1.254 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907 3.5 3.5 0 1 1-2.538-5.743 3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5z"/>
  </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
  </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
    <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z"/>
  </svg>`
  ];

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
