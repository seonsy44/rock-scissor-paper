"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var Button = /** @class */ (function () {
    function Button(name, onClick) {
        var _this = this;
        this.name = name;
        this._buttonEl.textContent = name;
        this._buttonEl.onclick = function () {
            onClick(_this);
        };
    }
    Button.prototype.render = function (parentEl) {
        parentEl.append(this._buttonEl);
    };
    Button.prototype.disable = function (isDisable) {
        if (isDisable) {
            this._buttonEl.setAttribute("disabled", "true");
        }
        else {
            this._buttonEl.removeAttribute("disabled");
        }
    };
    return Button;
}());
exports.Button = Button;
