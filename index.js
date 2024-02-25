const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", handleButtonClick);
    });

    function handleButtonClick(event) {
        const buttonText = event.target.innerText;
        
        if (buttonText === "=") {
            calculateResult();
        } else if (buttonText === "C") {
            clearDisplay();
        } else {
            appendToDisplay(buttonText);
        }
    }

    function appendToDisplay(input) {
        display.value += input;
    }

    function calculateResult() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }

    function clearDisplay() {
        display.value = "";
    }