function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

// const makeOrder = dish => {
//   const DELAY = 1000;

//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve(`here your dish`);
//       }
//       reject(`sorry, we have no burgers`);
//     }, DELAY);
//   });
// };

// const p = makeOrder(`burger`);

// p.then(onMakeOrderSuccess).catch(onMakeorderError);

// function onMakeOrderSuccess(result) {
//   console.log(`onMakeOrderSuccess`);
//   console.log(result);
// }

// function onMakeorderError(error) {
//   console.log(`onMakeorderError`);
//   console.log(error);
// }
