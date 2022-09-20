import gsap from 'gsap';
import './style.css';

// Interfaces

interface Advice {
  slip: {
    id: number;
    advice: string;
  };
}

// Constants

const API_URL = 'https://api.adviceslip.com/advice' as string;
const API_DELAY = 2000 as number;

// Dom

const updateBtn = document.querySelector(
  '[data-update-button]'
) as HTMLButtonElement | null;
const adviceEl = document.querySelector(
  '[data-advice]'
) as HTMLSpanElement | null;
const quoteEl = document.querySelector('[data-quote]') as HTMLDivElement | null;
const codeEl = document.querySelector('[data-code]') as HTMLSpanElement | null;

// Functions

function handleUpdate(e: MouseEvent): void {
  e.preventDefault();
  requestAdvice();
}

function requestAdvice(): void {
  if (updateBtn != null) updateBtn.disabled = true;

  fetch(API_URL)
    .then((res: Response) => res.json())
    .then(requestAdviceSuccess)
    .catch(requestAdviceError);
}

function requestAdviceSuccess(json: Advice): void {
  gsap.to(quoteEl, {
    duration: 0.3,
    autoAlpha: 0,
    onComplete: (): void => {
      gsap.to(quoteEl, { duration: 0.3, autoAlpha: 1, delay: 0.1 });
      if (adviceEl != null) adviceEl.textContent = json.slip.advice;
      if (codeEl != null) codeEl.textContent = json.slip.id.toString();
    },
  });
  enableUpdateButton();
}

function requestAdviceError(err: any): void {
  console.error(err);
  enableUpdateButton();
}

function enableUpdateButton(): void {
  setTimeout((): void => {
    if (updateBtn != null) updateBtn.disabled = false;
  }, API_DELAY);
}

// Listeners

if (updateBtn != null) updateBtn.addEventListener('click', handleUpdate);
