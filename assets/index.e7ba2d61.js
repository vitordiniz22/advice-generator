(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const a="https://api.adviceslip.com/advice",o=document.querySelector("[data-update-button]"),l=document.querySelector("[data-advice]"),u=document.querySelector("[data-code]");function f(n){n.preventDefault(),p()}function p(){h(),fetch(a).then(n=>n.json()).then(m).catch(y)}function m(n){l!=null&&(l.textContent=n.slip.advice),u!=null&&(u.textContent=n.slip.id.toString()),s()}function y(n){console.error(n),s()}function h(){o!=null&&(o.disabled=!0)}function s(){setTimeout(()=>{o!=null&&(o.disabled=!1)},2e3)}o!=null&&o.addEventListener("click",f);