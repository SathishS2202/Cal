let resultButton = document.querySelector('.Result');
let buttons = document.querySelectorAll('button');
let display = '';
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;
        if (value === 'C') {
            display = '';
        } else if (value === '=') {
            display = eval(display.replace('x', '*'));
        } else {
            display += value;
        }
        resultButton.textContent = display;
    });
});
