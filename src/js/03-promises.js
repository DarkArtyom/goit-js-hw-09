import Notiflix from 'notiflix';

const form = document.forms[0];
const delayEl = form.elements.delay;
const stepEl = form.elements.step;
const amountEl = form.elements.amount;

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
  evt.preventDefault();
  let delayStepForm = Number(stepEl.value);
  let firstDelayForm = Number(delayEl.value);
  const amountForm = Number(amountEl.value);
  if (delayStepForm >= 0 && firstDelayForm >= 0 && amountForm >= 0) {
    setTimeout(() => {
      for (let i = 0; i < amountForm; i += 1) {
        console.log(`i ${i}, firstDelayForm: ${firstDelayForm} `);
        updatePromise(i + 1, firstDelayForm);
        firstDelayForm = firstDelayForm + delayStepForm;
      }
    }),
      firstDelayForm;
  } else {
    Notiflix.Notify.failure('Please fill numbers > 0 ');
  }
  form.reset();
}

function createPromise(i, delayStepForm) {
  const DELAY = delayStepForm;
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ i: i, delayStepForm: delayStepForm });
      } else {
        reject({ i: i, delayStepForm: delayStepForm });
      }
    }, DELAY);
  });
}

function updatePromise(x, y) {
  createPromise(x, y)
    .then(({ i, delayStepForm }) => {
      Notiflix.Notify.success(
        `✅ Fulfilled promise ${i} in ${delayStepForm}ms`
      );
    })
    .catch(({ i, delayStepForm }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${delayStepForm}ms`);
    });
}
//
