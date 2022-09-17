// Constants 

const API_URL = "https://api.adviceslip.com/advice";

// Dom

const updateBtn = document.querySelector('[data-update-button]');
const adviceEl = document.querySelector('[data-advice]');
const codeEl = document.querySelector('[data-code]');

// Functions 

function handleUpdate (e) {
   e.preventDefault();
   requestAdvice();
}

function requestAdvice() {
   updateBtn.disabled = true;

   fetch(API_URL)
      .then((res) => res.json())
      .then(requestAdviceSuccess)
      .catch(requestAdviceError)
}

function requestAdviceSuccess (json) {
   adviceEl.textContent = json.slip.advice;
   codeEl.textContent = json.slip.id;
   updateBtn.disabled = false;
}

function requestAdviceError (err) {
   console.error(err);
   updateBtn.disabled = false;
}

// Listeners 

updateBtn.addEventListener('click', handleUpdate);