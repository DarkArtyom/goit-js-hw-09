import Notiflix from 'notiflix';

const form = document.forms[0];
const delayEl = form.elements.delay;
const stepEl = form.elements.step;
const amountEl = form.elements.amount;

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
  evt.preventDefault();
  const position = stepEl.value;
  const delay = delayEl.value;
  const amount = amountEl.value;

  console.log(`position ${position}, delay: ${delay}, amount ${amount}`);

  createPromise(position, delay);
}

function createPromise(position, delay) {
  return new Promise(resolve => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(console.log(`✅ Fulfilled`));
      } else {
        position;
      }
    }, delay);
  });
}

createPromise()
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

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
