/* Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
Обновляй интерфейс новым значением переменной counterValue. */
const counterValue = document.querySelector('#value');
const buttonDecrementEl=document.querySelector('#counter button[data-action="decrement"]')
const buttonIncrtmentEl=document.querySelector('#counter button[data-action="increment"]' )
buttonDecrementEl.addEventListener('click', onDecrementClick);
buttonIncrtmentEl.addEventListener('click', onIncrementClick);
function onDecrementClick() {
    counterValue.textContent = Number(counterValue.textContent) - 1;
}
function onIncrementClick() {
    counterValue.textContent = Number(counterValue.textContent) + 1;
}

