function processing() {
    let input = document.getElementById("textField").value;
    let outputArea = document.getElementById("outputArea");
    let selectedFunction = select.options[select.selectedIndex].value;


    let result;

    switch (selectedFunction) {
        case "factorial":
            result = factorial(parseInt(input));
            break;
        case "reverse":
            result = reverseString(input);
            break;
        case "uppercase":
            result = input.toUpperCase();
            break;
        case "loop":
            result = demoLoop(parseInt(input));
            break;
        default:
            result = "Invalid function selection";
    }
    outputArea.innerHTML = result;
}

function factorial(num) {
    let input = document.getElementById("textField").value;
    let outputArea = document.getElementById("outputArea");

    if (isNaN(input)) {
        document.getElementById("textField").classList.add("invalid-input");
    return outputArea.innerHTML = "Invalid input. Please enter a valid number.";
    } else {
        document.getElementById("textField").classList.remove("invalid-input");
        }
    let sum = 1;
    for(let i = 1; i <= num; i++) {
        sum = sum * i;          
    }return sum;
}  


function reverseString(str) {
        return str.split("").reverse().join("");
    }



function demoLoop(length) {
    let input = document.getElementById("textField").value;
    let outputArea = document.getElementById("outputArea");

    if (isNaN(input)) {
        document.getElementById("textField").classList.add("invalid-input");
        return outputArea.innerHTML = "Invalid input. Please enter a valid number.";
        } else {
        document.getElementById("textField").classList.remove("invalid-input");
        }
    let list = "";
    for( i = 1; i <= length; i++){
        list += i + ", ";   
    }return list.slice(0,-2);
    }

