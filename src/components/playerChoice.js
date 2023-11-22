const choiceBtns = document.querySelectorAll(".choiceBtns");

export default function playerChoice(callback) {
  choiceBtns.forEach((btn) =>
    btn.addEventListener("click", function () {
      const choice = btn.textContent;
      callback(choice);
    })
  );
}
