import waterImg from "../assets/water.jpg";
import fireImg from "../assets/fire.jpg";
import iceImg from "../assets/ice.jpg";

export default function playerChoices(callback) {
  const container = document.getElementById("container");

  const water = new Image();
  water.classList.add("choices");
  water.src = waterImg;
  water.id = "water";
  water.addEventListener("click", function () {
    callback("water");
  });

  const fire = new Image();
  fire.classList.add("choices");
  fire.src = fireImg;
  fire.id = "fire";
  fire.addEventListener("click", function () {
    callback("fire");
  });

  const ice = new Image();
  ice.classList.add("choices");
  ice.src = iceImg;
  ice.id = "ice";
  ice.addEventListener("click", function () {
    callback("ice");
  });

  container.appendChild(water);
  container.appendChild(fire);
  container.appendChild(ice);
}
