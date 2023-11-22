export default function botChoices() {
  let num = Math.trunc(Math.random() * 3) + 1;
  if (num === 1) {
    return "fire";
  } else if (num === 2) {
    return "water";
  } else if (num === 3) {
    return "ice";
  }
}
