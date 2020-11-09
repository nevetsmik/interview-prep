import "./css/main.css";

import { curryMe, curry2 } from "./problems/curryFunction/curryFunc";
import addOperators from "./problems/expressionAddOperators/addOperators";
import ltrCombinations from "./scratch";

window.addOperators = addOperators;
window.curryMe = curryMe;
window.curry2 = curry2;
window.ltrCombinations = ltrCombinations;

import { Observable } from "rxjs";

// Function every observer (subscriber) will run
const subscribe = (subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
};

// Create an observable where every observer runs the subscribe callback
const observable = new Observable(subscribe);

// Observer
const observer = {
  next: (x) => console.log(`Observer got a next value: ${x}`),
  error: (err) => console.error(`Observer got an error: ${err}`),
  complete: () => console.log("Observer got a complete notification"),
};

// Execute the observer
const subscription = observable.subscribe(observer);
subscription.unsubscribe();

import {
  employeeTree,
  flattenEmployeeTreeRec,
  flattenEmployeeTreeItr,
} from "./problems/pendo/employeeTree";

console.log("employeeTree", employeeTree);
let flattenedEmployeeTree = flattenEmployeeTreeRec(employeeTree);
console.log("flattenedEmployeeTree", flattenedEmployeeTree);
flattenedEmployeeTree = flattenEmployeeTreeItr(employeeTree);
console.log("flattenedEmployeeTree", flattenedEmployeeTree);

import heightOfTree from "./problems/heightOfTree/heightOfTree";
const tree = [1, 2, 3, 4, -1, -1, -1];

console.log("heightOfTree", heightOfTree(tree));

import sortCharsByFreq from "./problems/sortCharactersByFreq/sortCharsByFreq";
window.sortCharsByFreq = sortCharsByFreq;
