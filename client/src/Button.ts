interface IButton {
  name: string;
  render(parentEl: HTMLElement): void;
  disable(isDisable: boolean): void;
}

export class Button implements IButton {
  name: string;
  private _buttonEl: HTMLButtonElement;

  constructor(name: string, onClick: (button: Button) => void) {
    this.name  = name;
    this._buttonEl.textContent = name;
    this._buttonEl.onclick = () => {
      onClick(this);
    }
  }

  render(parentEl: HTMLElement) {
    parentEl.append(this._buttonEl);
  }

  disable(isDisable: boolean) {
    if (isDisable) {
      this._buttonEl.setAttribute("disabled", "true");
    } else {
      this._buttonEl.removeAttribute("disabled");
    }
  }
}