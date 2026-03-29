// Master handler to coordinate inputs and displays
function handleCalc(operation) {
    const val1 = parseFloat(document.getElementById('num1').value);
    const val2 = parseFloat(document.getElementById('num2').value);
    let output = 0;

    // Logic to ensure numbers are entered [cite: 108]
    if (isNaN(val1)) {
        alert("Please enter at least the first number.");
        return;
    }

    // Call separate functions based on button clicked 
    switch (operation) {
        case 'add':  output = add(val1, val2); break;
        case 'sub':  output = subtract(val1, val2); break;
        case 'mul':  output = multiply(val1, val2); break;
        case 'div':  output = divide(val1, val2); break;
        case 'sqrt': output = squareRoot(val1); break;
        case 'cbrt': output = cubeRoot(val1); break;
        case 'pow':  output = power(val1, val2); break;
    }

    displayResult(output);
}

// 1. Basic Arithmetic Functions 
function add(a, b) { return a + (b || 0); }
function subtract(a, b) { return a - (b || 0); }
function multiply(a, b) { return a * (isNaN(b) ? 1 : b); }
function divide(a, b) { 
    if (b === 0) return "Error (Div/0)";
    return a / b; 
}

// 2. Advanced Operations Functions 
function squareRoot(x) { 
    return x < 0 ? "Invalid" : Math.sqrt(x).toFixed(4); 
}

function cubeRoot(x) { 
    return Math.cbrt(x).toFixed(4); 
}

function power(x, y) { 
    if (isNaN(y)) return "Need y";
    return Math.pow(x, y); 
}

// 3. UI Helper Functions
function displayResult(val) {
    document.getElementById('result').innerText = val;
}

function resetAll() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('result').innerText = "0";
}
