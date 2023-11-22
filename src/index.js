import botChoices from "./components/botChoices.js";
import playerChoices from "./components/playerChoices.js";
import checkWinner from "./components/checkWinner.js";
import "./styles/style.css";

function game(choice) {
  checkWinner(choice, botChoices());
}

playerChoices(game);
