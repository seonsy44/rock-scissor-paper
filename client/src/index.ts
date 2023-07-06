import { CircleArray } from "./CircleArray.js";
import { Button } from "./Button.js";

let timerId: number;

const computerEl = document.getElementById("computer") as HTMLDivElement;
const startEl = document.getElementById("start-button") as HTMLButtonElement;
const buttonContainerEl = document.getElementById("button-container") as HTMLDListElement;
const buttons: CircleArray<Button> = new CircleArray([
  new Button("가위", handleButtonClick),
  new Button("바위", handleButtonClick),
  new Button("보", handleButtonClick),
]);
let computer = buttons.getAll()[0];

buttons.forEach((button: Button) => {
  button.render(buttonContainerEl)
  button.disable(true);
});

function handleButtonClick(button: Button) {
  clearInterval(timerId);

  const next = buttons.getNext(computer);
  if (computer === button) alert("비김");
  else if (computer === next) alert("짐");
  else alert("이김");

  startEl.removeAttribute("disabled");
  buttons.forEach((button: Button) => {
    button.disable(true);
  });
}

function handleStartClick() {
  startEl.setAttribute("disabled", "true");
  buttons.forEach((button: Button) => {
    button.disable(false);
  });

  timerId = setInterval(() => {
    computer = buttons.getNext(computer);
    computerEl.textContent = computer.name;
  }, 100);
}
startEl.onclick = handleStartClick;