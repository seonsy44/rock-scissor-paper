"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleArray = void 0;
var CircleArray = /** @class */ (function () {
    function CircleArray(array) {
        this._array = array;
    }
    CircleArray.prototype.getAll = function () {
        return this._array;
    };
    CircleArray.prototype.forEach = function (callback) {
        this._array.forEach(callback);
    };
    CircleArray.prototype.getNext = function (current) {
        var currentIndex = this._array.indexOf(current);
        var next = this._array[currentIndex + 1] || this._array[0];
        return next;
    };
    return CircleArray;
}());
exports.CircleArray = CircleArray;
