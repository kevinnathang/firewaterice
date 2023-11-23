const outcomes = {
  water: { beats: "fire", losesTo: "ice" },
  ice: { beats: "water", losesTo: "fire" },
  fire: { beats: "ice", losesTo: "water" },
};

const results = document.querySelector(".results");

export default function checkWinner(playerChoice, cpuChoice) {
  if (playerChoice === cpuChoice) {
    results.textContent = "It's a tie!";
  } else if (outcomes[playerChoice].beats === cpuChoice) {
    results.textContent = `You win! ${playerChoice} beats ${cpuChoice}!`;
  } else {
    results.textContent = `You lose! ${cpuChoice} beats ${playerChoice}!`;
  }
}
