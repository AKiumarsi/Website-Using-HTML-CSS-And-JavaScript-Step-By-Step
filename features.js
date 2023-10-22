"strict mode";
const circle = document.querySelector("#circle");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");
console.log(circle);
const rotateValue = circle.style.transform;
let rotateSum = 0;

upBtn.addEventListener("click", function () {
  rotateSum += -90;
  circle.style.transform = `rotate(${rotateSum}deg)`;
});

downBtn.addEventListener("click", function () {
  rotateSum += 90;
  circle.style.transform = `rotate(${rotateSum}deg)`;
});
