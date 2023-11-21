import rng from "./components/rng.js";
import botChoice from "./components/botChoice.js";
import playerChoice from "./components/playerChoice.js";

const cpuChoice = botChoice(rng());
const humanChoice = playerChoice();

console.log(cpuChoice, humanChoice);
