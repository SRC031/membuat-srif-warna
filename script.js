const colors = [
  "#FF5733",
  "#FF33A1",
  "#FF33F2",
  "#A833FF",
  "#3385FF",
  "#33D6FF",
  "#33FFA6",
  "#99FF33",
  "#FFDD33",
  "#8A2BE2",
  "#A52A2A",
  "#00008B",
  "#B8860B",
  "#FF00FF",
  "#c800ff",
  "#0ef",
];

let btn = document.getElementById("btn");
const colorDisplay = document.getElementById("color");

btn.addEventListener("click", () => {
  let randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  colorDisplay.textConten = `Selected Color: ${randomColor}`;
  colorDisplay.style.color = randomColor;
});

function getRandomColor() {
  let randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
