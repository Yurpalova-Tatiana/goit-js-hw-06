const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
inputEl.addEventListener('input', onTextstyleInput)
function onTextstyleInput(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
}