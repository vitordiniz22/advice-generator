import './style.css';

// Interfaces

interface Advice {
  slip: {
    id: number;
    advice: string;
  };
}

// Constants

const API_URL = 'https://api.adviceslip.com/advice';

// Dom

const updateBtn = document.querySelector(
  '[data-update-button]'
) as HTMLButtonElement | null;
const adviceEl = document.querySelector(
  '[data-advice]'
) as HTMLSpanElement | null;
const codeEl = document.querySelector('[data-code]') as HTMLSpanElement | null;

// Functions

function handleUpdate(e: MouseEvent): void {
  e.preventDefault();
  requestAdvice();
}

function requestAdvice(): void {
  if (updateBtn != null) updateBtn.disabled = true;

  fetch(API_URL)
    .then((res) => res.json())
    .then(requestAdviceSuccess)
    .catch(requestAdviceError);
}

function requestAdviceSuccess(json: Advice): void {
  if (adviceEl != null) adviceEl.textContent = json.slip.advice;
  if (codeEl != null) codeEl.textContent = json.slip.id.toString();
  if (updateBtn != null) updateBtn.disabled = false;
}

function requestAdviceError(err: any): void {
  console.error(err);
  if (updateBtn != null) updateBtn.disabled = false;
}

// Listeners

if (updateBtn != null) updateBtn.addEventListener('click', handleUpdate);
