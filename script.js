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

function convert() {
    var inputNumber = document.getElementById("inputNumber").value.trim();
    var outputElement = document.getElementById("output");

    if (inputNumber === "") {
        outputElement.innerHTML = "Please enter a number.";
        return;
    }

    var conversionType = document.getElementById("inputNumber").placeholder;
    var conversionResult = "";

    switch(conversionType) {
        case "Enter Decimal Number":
            conversionResult += "Binary: " + (+inputNumber).toString(2) +
                "<br>Octal: " + (+inputNumber).toString(8) +
                "<br>Hexadecimal: " + (+inputNumber).toString(16).toUpperCase();
            break;

        case "Enter Binary Number":
            conversionResult += "Decimal: " + parseInt(inputNumber, 2) +
                "<br>Octal: " + parseInt(inputNumber, 2).toString(8) +
                "<br>Hexadecimal: " + parseInt(inputNumber, 2).toString(16).toUpperCase();
            break;

        case "Enter Octal Number":
            conversionResult += "Decimal: " + parseInt(inputNumber, 8) +
                "<br>Binary: " + parseInt(inputNumber, 8).toString(2) +
                "<br>Hexadecimal: " + parseInt(inputNumber, 8).toString(16).toUpperCase();
            break;
            
        case "Enter Hexadecimal Number":
            conversionResult += "Decimal: " + parseInt(inputNumber, 16) +
                "<br>Binary: " + parseInt(inputNumber, 16).toString(2) +
                "<br>Octal: " + parseInt(inputNumber, 16).toString(8);
            break;
    }

    // Update output with conversion results
    outputElement.innerHTML = conversionResult;
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