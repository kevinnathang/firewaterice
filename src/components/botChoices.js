import waterImg from "../assets/water.jpg";
import fireImg from "../assets/fire.jpg";
import iceImg from "../assets/ice.jpg";

function genBotPics() {
  const container = document.getElementById("container");
  const imgHolderBot = document.createElement("div");
  imgHolderBot.classList.add("imgHolderBot");
  container.appendChild(imgHolderBot);

  const water = new Image();
  water.classList.add("choices");
  water.src = waterImg;
  water.id = "water";

  const fire = new Image();
  fire.classList.add("choices");
  fire.src = fireImg;
  fire.id = "fire";

  const ice = new Image();
  ice.classList.add("choices");
  ice.src = iceImg;
  ice.id = "ice";

  imgHolderBot.appendChild(water);
  imgHolderBot.appendChild(fire);
  imgHolderBot.appendChild(ice);
}
genBotPics();

export default function botChoices() {
  const fire = document.querySelector("#fire");
  const water = document.querySelector("#water");
  const ice = document.querySelector("#ice");

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
