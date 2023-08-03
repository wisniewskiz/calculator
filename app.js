const buttons = document.querySelectorAll('.inputs__row--button');
const display = document.querySelector('.calculator__display')
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const del = document.querySelector('#del');
const save = document.querySelector('#ms');
const recall = document.querySelector('#mr');
const operators = ['+', '-', '*', '/'];

let answer

const equals = () => {
    answer = eval(display.innerText);
}

const findLastInput = () => {
   return display.innerText[(display.innerText.length) - 1];
}

localStorage.clear();

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
    findLastInput();
});

clear.addEventListener('click', ()=> {
    display.innerText = '';
});

del.addEventListener('click', ()=> {
    display.innerText = String(display.innerText.slice(0, -1));
});

save.addEventListener('click', ()=> {
    for (let operator of operators) {
        if (findLastInput() == operator) {
        } else if (display.innerText.includes(operator)) {
            equals();
            display.innerText = answer;
            localStorage.setItem("memory", answer)
        } else {
            answer = display.innerText;
            localStorage.setItem("memory", answer)
        }
    };
});

recall.addEventListener('click', ()=> {
    if (localStorage.getItem("memory") ) {
        display.innerText = display.innerText.concat(localStorage.getItem("memory"));
    } else {
        console.log('no memory saved')
    };
});