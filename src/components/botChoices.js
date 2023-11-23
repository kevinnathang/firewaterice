import waterImg from "../assets/water.jpg";
import fireImg from "../assets/fire.jpg";
import iceImg from "../assets/ice.jpg";

function genBotPics() {
  const botChoiceContainer = document.getElementById("botChoiceContainer");

  const water = new Image();
  water.classList.add("choices");
  water.src = waterImg;
  water.id = "water";
  const waterDiv = document.createElement("div");
  waterDiv.appendChild(water);
  botChoiceContainer.appendChild(waterDiv);

  const fire = new Image();
  fire.classList.add("choices");
  fire.src = fireImg;
  fire.id = "fire";
  const fireDiv = document.createElement("div");
  fireDiv.appendChild(fire);
  botChoiceContainer.appendChild(fireDiv);

  const ice = new Image();
  ice.classList.add("choices");
  ice.src = iceImg;
  ice.id = "ice";
  const iceDiv = document.createElement("div");
  iceDiv.appendChild(ice);
  botChoiceContainer.appendChild(iceDiv);
}
genBotPics();

export default function botChoices() {
  const fire = document.querySelector("#fire");
  const water = document.querySelector("#water");
  const ice = document.querySelector("#ice");
  const botChoiceDisplay = document.getElementById("botChoiceDisplay");
  const holder = document.createElement("div");
  botChoiceDisplay.appendChild(holder);

  fire.style.borderColor = "black";
  water.style.borderColor = "black";
  ice.style.borderColor = "black";

  let num = Math.trunc(Math.random() * 3) + 1;
  if (num === 1) {
    fire.style.borderColor = "red";
    return "fire";
  } else if (num === 2) {
    water.style.borderColor = "red";
    return "water";
  } else if (num === 3) {
    ice.style.borderColor = "red";
    return "ice";
  }
}
