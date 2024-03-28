function showConversion(conversionType) {
    document.getElementById("output").innerHTML = "";
    var inputElement = document.getElementById("inputNumber");
    inputElement.value = "";
    switch(conversionType) {
        case "decimalToBinary":
            inputElement.placeholder = "Enter Decimal Number";
            break;
        case "binaryToDecimal":
            inputElement.placeholder = "Enter Binary Number";
            break;
        case "decimalToOctal":
            inputElement.placeholder = "Enter Decimal Number";
            break;
        case "octalToDecimal":
            inputElement.placeholder = "Enter Octal Number";
            break;
        case "decimalToHex":
            inputElement.placeholder = "Enter Decimal Number";
            break;
        case "hexToDecimal":
            inputElement.placeholder = "Enter Hexadecimal Number";
            break;
    }
}

function resetInput() {
    // Clear the input field
    document.getElementById("inputNumber").value = "";
    // Clear the output space
    document.getElementById("outputSpace").innerHTML = "";
    // Clear the error message
    document.getElementById("output").innerHTML = "";
}

function convert() {
    var inputNumber = document.getElementById("inputNumber").value.trim();
    var outputElement = document.getElementById("output");
    var conversionType = document.getElementById("inputNumber").placeholder;
    var conversionResult = "";

    // Check if the input is empty
    if (inputNumber === "") {
        outputElement.innerHTML = "Please enter a number.";
        return;
    }

    switch(conversionType) {
        case "Enter Decimal Number":
            // Convert decimal to binary, octal, and hexadecimal
            if (!/^\d+$/.test(inputNumber)) {
                outputElement.innerHTML = "Please enter a valid decimal number.";
                return;
            }
            conversionResult += "Binary: " + (+inputNumber).toString(2) +
                "<br>Octal: " + (+inputNumber).toString(8) +
                "<br>Hexadecimal: " + (+inputNumber).toString(16).toUpperCase();
            break;

        case "Enter Binary Number":
            // Convert binary to decimal, octal, and hexadecimal
            if (!/^[01]+$/.test(inputNumber)) {
                outputElement.innerHTML = "Please enter a valid binary number.";
                return;
            }
            conversionResult += "Decimal: " + parseInt(inputNumber, 2) +
                "<br>Octal: " + parseInt(inputNumber, 2).toString(8) +
                "<br>Hexadecimal: " + parseInt(inputNumber, 2).toString(16).toUpperCase();
            break;

        case "Enter Octal Number":
            // Convert octal to decimal, binary, and hexadecimal
            if (!/^[0-7]+$/.test(inputNumber)) {
                outputElement.innerHTML = "Please enter a valid octal number.";
                return;
            }
            conversionResult += "Decimal: " + parseInt(inputNumber, 8) +
                "<br>Binary: " + parseInt(inputNumber, 8).toString(2) +
                "<br>Hexadecimal: " + parseInt(inputNumber, 8).toString(16).toUpperCase();
            break;
            
        case "Enter Hexadecimal Number":
            // Convert hexadecimal to decimal, binary, and octal
            if (!/^[0-9A-Fa-f]+$/.test(inputNumber)) {
                outputElement.innerHTML = "Please enter a valid hexadecimal number.";
                return;
            }
            conversionResult += "Decimal: " + parseInt(inputNumber, 16) +
                "<br>Binary: " + parseInt(inputNumber, 16).toString(2) +
                "<br>Octal: " + parseInt(inputNumber, 16).toString(8);
            break;
    }


    var outputSpaceElement = document.getElementById("outputSpace");
    outputSpaceElement.innerHTML = conversionResult;
}


/*Dark Mode Function*/

function toggleDarkMode() {
    var body = document.body;
    var darkModeToggle = document.getElementById("darkModeToggle");

    body.classList.toggle("dark-mode");
    
    // Change button text based on mode
    if (body.classList.contains("dark-mode")) {
        darkModeToggle.innerText = "Light Mode";
    } else {
        darkModeToggle.innerText = "Dark Mode";
    }
}