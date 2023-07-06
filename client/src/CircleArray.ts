interface ICircleArray<T> {
  getAll(): T[]
  forEach(callback: (value: T, index: number, array: T[]) => void): void
  getNext(current: T): T 
}

export class CircleArray<T> implements ICircleArray<T> {
  private _array: T[]

  constructor(array: T[]) {
    this._array = array
  }

  getAll() {
    return this._array
  }

  forEach(callback: (value: T, index: number, array: T[]) => void) {
    this._array.forEach(callback);
  }

  getNext(current: T) {
    var currentIndex = this._array.indexOf(current);
    var next = this._array[currentIndex + 1] || this._array[0];
    return next;
  }
}