const refs = {
 inputBtn: document.querySelector('#name-input'),
 spanOutput : document.querySelector('#name-output'),
}
refs.inputBtn.addEventListener('input', onInputChange);
function onInputChange(event) {
    refs.spanOutput.textContent = event.currentTarget.value;   
}