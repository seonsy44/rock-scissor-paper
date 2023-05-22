export function CircleArray(array) {
  this.array = array;
}

CircleArray.prototype.getAll = function () {
  return this.array;
};

CircleArray.prototype.forEach = function (callback) {
  this.array.forEach(callback);
};

CircleArray.prototype.getNext = function (current) {
  var currentIndex = this.array.indexOf(current);
  var next = this.array[currentIndex + 1] || this.array[0];
  return next;
};
