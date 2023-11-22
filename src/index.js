import rng from "./components/rng.js";
import botChoice from "./components/botChoice.js";
import { playerChoice, getChoice } from "./components/playerChoice.js";
import checkWinner from "./components/checkWinner.js";

// Set up the event listeners for player's choice
playerChoice();

// Retrieve the player's choice after they've made a selection
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("choiceBtns")) {
    const cpuChoice = botChoice(rng());
    const humanChoice = getChoice();

    console.log("CPU Choice:", cpuChoice);
    console.log("Human Choice:", humanChoice);

    // Call checkWinner function here with cpuChoice and humanChoice to determine the winner
    checkWinner(humanChoice, cpuChoice);
  }
});
