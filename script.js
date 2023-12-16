let display = document.getElementById("display");
let expression = "";

function appendToDisplay(value) {
   
    if (expression === "Error" || (typeof expression === 'number' && !Number.isNaN(expression))) {
        expression = "";
    }
    
    expression += value;
    display.value = expression;
}

function calculateResult() {
    try {
        expression = eval(expression);
        display.value = expression;
    } catch (error) {
        display.value = "Error";
    }
}
