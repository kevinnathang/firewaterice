const choiceBtns = document.querySelectorAll(".choiceBtns");

let choice = ""; // Initialize choice as an empty string

export function playerChoice() {
  choiceBtns.forEach((btn) =>
    btn.addEventListener("click", function () {
      choice = btn.textContent.toLowerCase(); // Store the lowercase text content of the clicked button
    })
  );
}

export function getChoice() {
  return choice; // Return the current choice
}
