const _ = require('lodash');

/* function forEach(array1, callbackFn) {
  array1.forEach(callbackFn);
  return;
} */

function forEach(array1, callbackFn) {
  for (let i = 0; i < array1.length; i++) {
    callbackFn(array1[i], i, array1);
  }
}

/* function map(array1, callbackFn) {
  return array1.map(callbackFn);;
} */

function map(array1, callbackFn) {
  const array2 = [];
  for (const element of array1) {
    array2.push(callbackFn(element));
  }
  return array2;
}

/* function filter(array1, callbackFn) {
  return array1.filter(callbackFn);
} */

function filter(array1, callbackFn) {
  const array2 = [];
  for (const element of array1) {
    if (callbackFn(element) === true) {
      array2.push(element);
    }
  }
  return array2;
}

/* function every(array1, callbackFn) {
  return array1.every(callbackFn);
} */

function every(array1, callbackFn) {
  let result = true;
  for (const element of array1) {
    if (callbackFn(element) === false) {
      result = false;
    }
  }
  return result;
}

/* function some(array1, callbackFn) {
  return array1.some(callbackFn);
} */

function some(array1, callbackFn) {
  let result = false;
  for (const element of array1) {
    if (callbackFn(element) === true) {
      result = true;
    }
  }
  return result;
}

/* function majority(array1, callbackFn) {
  const array2 = filter(array1, callbackFn);
  return array2.length > (array1.length / 2);
} */

function majority(array1, callbackFn) {
  let counter = 0;
  for (const element of array1) {
    if (callbackFn(element) === true) {
      counter++;
    }
  }
  return counter > (array1.length / 2);
}

/* function once(callbackFn) {
  return _.once(callbackFn);
} */

function once(callbackFn) {
  let ran = false;
  let memo;
  return function () {
    if (ran) {
      return memo;
    } else {
    ran = true;
    memo = callbackFn.apply(this, arguments);
    callbackFn = null;
    return memo;
    }
  }
}

/* function groupBy(array1, callbackFn) {
  return _.groupBy(array1, callbackFn);
} */

function groupBy(array1, callbackFn) {
  const newObject = {};
  for (const element of array1) {
    if (newObject[callbackFn(element)]) {
      newObject[callbackFn(element)].push(element);
    } else {
      newObject[callbackFn(element)] = [element];
    }
  }
  return newObject;
}

/* function arrayToObject(array1, callbackFn) {
  return _.invert(_.groupBy(array1, callbackFn));
} */

function arrayToObject(array1, callbackFn) {
  const newObject = {};
  for (const element of array1) {
    newObject[element] = callbackFn(element);
  }
  return newObject;
}

module.exports = { 
  forEach, 
  map, 
  filter, 
  every, 
  some, 
  majority,
  once,
  groupBy,
  arrayToObject,
};
