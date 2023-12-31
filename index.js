// Task 1

Array.prototype.myFilter = function (callback, thisArg) {
  const filteredValues = [];

  for (let i = 0; i < this.length; i++) {
    const callbackResult = callback.call(thisArg, this[i], i, this);
    if (callbackResult) {
      filteredValues.push(this[i]);
    }
  }

  return filteredValues;
}

// Task 2

function createDebounceFunction(callback, ms) {
  let timeoutId;

  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, ms);
  }
}
