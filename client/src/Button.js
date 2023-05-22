export function Button(name, onClick) {
  this.name = name;

  this.buttonEl = document.createElement("button");
  this.buttonEl.textContent = name;

  var that = this;
  this.buttonEl.onclick = function () {
    onClick(that);
  };
}

Button.prototype.render = function (parentEl) {
  parentEl.append(this.buttonEl);
};

Button.prototype.disable = function (isDisable) {
  if (isDisable) {
    this.buttonEl.setAttribute("disabled", true);
  } else {
    this.buttonEl.removeAttribute("disabled");
  }
};
