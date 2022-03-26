const _ = require('lodash');

function forEach(array1, callbackFn) {
  array1.forEach(callbackFn);
  return;
}

function map(array1, callbackFn) {
  return array1.map(callbackFn);;
}

function filter(array1, callbackFn) {
  return array1.filter(callbackFn);
}

function every(array1, callbackFn) {
  return array1.every(callbackFn);
}

function some(array1, callbackFn) {
  return array1.some(callbackFn);
}

function majority(array1, callbackFn) {
  const array2 = filter(array1, callbackFn);
  return array2.length > (array1.length / 2);
}

function once(callbackFn) {
  return _.once(callbackFn);
}

function groupBy(array1, callbackFn) {
  return _.groupBy(array1, callbackFn);
}

function arrayToObject(array1, callbackFn) {
  return _.invert(_.groupBy(array1, callbackFn));
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
