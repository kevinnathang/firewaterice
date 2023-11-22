import rng from "./components/rng.js";
import botChoice from "./components/botChoice.js";
import playerChoice from "./components/playerChoice.js";

// Define a callback function to handle the player's choice
function handlePlayerChoice(choice) {
  const cpuChoice = botChoice(rng());
  console.log("CPU Choice:", cpuChoice);
  console.log("Human Choice:", choice);
}

// Pass the callback function to playerChoice
playerChoice(handlePlayerChoice);
