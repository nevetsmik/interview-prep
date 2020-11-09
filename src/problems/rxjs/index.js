// import { Observable } from "rxjs";

// // Function every observer (subscriber) will run
// const subscribe = (subscriber) => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   setTimeout(() => {
//     subscriber.next(4);
//     subscriber.complete();
//   }, 1000);
// };

// // Create an observable where every observer runs the subscribe callback
// const observable = new Observable(subscribe);

// // Observer
// const observer = {
//   next: (x) => console.log(`Observer got a next value: ${x}`),
//   error: (err) => console.error(`Observer got an error: ${err}`),
//   complete: () => console.log("Observer got a complete notification"),
// };

// // Execute the observer
// const subscription = observable.subscribe(observer);
// subscription.unsubscribe();

// const observable = new Observable(function subscribe(subscriber) {
//   // Keep track of the interval resource
//   const intervalId = setInterval(() => {
//     subscriber.next("hi");
//   }, 1000);

//   // Provide a way of canceling and disposing the interval resource
//   return function unsubscribe() {
//     clearInterval(intervalId);
//   };
// });
// const subscription = observable.subscribe((x) => console.log(x));
// subscription.unsubscribe();
