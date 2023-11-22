const outcomes = {
  water: { beats: "fire", losesTo: "ice" },
  ice: { beats: "water", losesTo: "fire" },
  fire: { beats: "ice", losesTo: "water" },
};

export default function checkWinner(playerChoice, cpuChoice) {
  if (playerChoice === cpuChoice) {
    console.log("It's a tie!");
  } else if (outcomes[playerChoice].beats === cpuChoice) {
    console.log("You win!");
  } else {
    console.log("You lose!");
  }
}
