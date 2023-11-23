const outcomes = {
  water: { beats: "fire", losesTo: "ice" },
  ice: { beats: "water", losesTo: "fire" },
  fire: { beats: "ice", losesTo: "water" },
};

const results = document.querySelector(".results");

export default function checkWinner(playerChoice, cpuChoice) {
  if (playerChoice === cpuChoice) {
    showResult("It's a tie!");
  } else if (outcomes[playerChoice].beats === cpuChoice) {
    const capitalizedPlayerChoice =
      playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    showResult(`You win!\n ${capitalizedPlayerChoice} beats ${cpuChoice}!`);
  } else {
    const capitalizedCpuChoice =
      cpuChoice.charAt(0).toUpperCase() + cpuChoice.slice(1);
    showResult(`You lose! ${capitalizedCpuChoice} beats ${playerChoice}!`);
  }
}

function showResult(message) {
  results.style.opacity = "0";

  setTimeout(function () {
    results.textContent = message;
    results.style.opacity = "1";
  }, 300);
}
