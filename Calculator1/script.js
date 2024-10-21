function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;

    try {
        // Use eval to calculate the result of the expression
        display.value = eval(expression);
    } catch {
        display.value = 'Error';
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
