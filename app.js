const buttons = document.querySelectorAll('.inputs__row--button');
const display = document.querySelector('.calculator__display')
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const del = document.querySelector('#del');
const save = document.querySelector('#ms');
const recall = document.querySelector('#mr');
const operators = ['+', '-', '*', '/'];

let answer
let memory

const equals = () => {
    answer = eval(display.innerText);
}

for (let button of buttons) {
    button.addEventListener('click', ()=> {
        if (button.innerText != "=") {
            display.innerText = display.innerText + button.innerText;
        }
    });
};

equal.addEventListener('click', ()=> {
    equals();
    display.innerText = answer;
});

clear.addEventListener('click', ()=> {
    display.innerText = '';
});

del.addEventListener('click', ()=> {
    display.innerText = String(display.innerText.slice(0, -1));
});

save.addEventListener('click', ()=> {
    for (let operator of operators) {
        if (display.innerText.includes(operator)) {
            equals();
            memory = answer;
            localStorage.setItem("memory", memory)
        } else (answer = display.innerText)
    };
});

recall.addEventListener('click', ()=> {
    console.log(localStorage.getItem("memory"));
    display.innerText = display.innerText.concat(memory);
});