let buttons = document.querySelectorAll('.inputs__row--button');
let display = document.querySelector('.calculator__display')
let equal = document.querySelector('#equal');
let clear = document.querySelector('#clear');
let del = document.querySelector('#del');
let answer

for (let button of buttons) {
    button.addEventListener('click', ()=> {
        if (button.innerText != "=") {
            display.innerText = display.innerText + button.innerText;
        }
    });
};

equal.addEventListener('click', ()=> {
    answer = eval(display.innerText);
    display.innerText = answer;
});

clear.addEventListener('click', ()=> {
    display.innerText = '';
});

del.addEventListener('click', ()=> {
    display.innerText = String(display.innerText.slice(0, -1));
});