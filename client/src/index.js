import { CircleArray } from "./CircleArray.js";
import { Button } from "./Button.js";

var timerId;

var computerEl = document.getElementById("computer");
var startEl = document.getElementById("start-button");
var buttonContainerEl = document.getElementById("button-container");
var buttons = new CircleArray([
  new Button("가위", handleButtonClick),
  new Button("바위", handleButtonClick),
  new Button("보", handleButtonClick),
]);
var computer = buttons.getAll()[0];

buttons.forEach(function (button) {
  button.render(buttonContainerEl);
  button.disable(true);
});

function handleButtonClick(button) {
  clearInterval(timerId);

  var next = buttons.getNext(computer);
  if (computer === button) alert("비김");
  else if (computer === next) alert("짐");
  else alert("이김");

  startEl.removeAttribute("disabled");
  buttons.forEach(function (button) {
    button.disable(true);
  });
}

function handleStartClick() {
  startEl.setAttribute("disabled", true);
  buttons.forEach(function (button) {
    button.disable(false);
  });

  timerId = setInterval(function () {
    computer = buttons.getNext(computer);
    computerEl.textContent = computer.name;
  }, 100);
}
startEl.onclick = handleStartClick;
