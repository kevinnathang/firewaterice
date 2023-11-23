import waterImg from "../assets/water.jpg";
import fireImg from "../assets/fire.jpg";
import iceImg from "../assets/ice.jpg";

export default function playerChoices(callback) {
  const playerChoiceContainer = document.getElementById(
    "playerChoiceContainer"
  );

  const water = new Image();
  water.classList.add("choices");
  water.src = waterImg;
  water.id = "waterPlayer";
  water.addEventListener("click", function () {
    callback("water");
  });
  const waterDiv = document.createElement("div");
  waterDiv.appendChild(water);
  playerChoiceContainer.appendChild(waterDiv);

  const fire = new Image();
  fire.classList.add("choices");
  fire.src = fireImg;
  fire.id = "firePlayer";
  fire.addEventListener("click", function () {
    callback("fire");
  });
  const fireDiv = document.createElement("div");
  fireDiv.appendChild(fire);
  playerChoiceContainer.appendChild(fireDiv);

  const ice = new Image();
  ice.classList.add("choices");
  ice.src = iceImg;
  ice.id = "icePlayer";
  ice.addEventListener("click", function () {
    callback("ice");
  });
  const iceDiv = document.createElement("div");
  iceDiv.appendChild(ice);
  playerChoiceContainer.appendChild(iceDiv);
}
