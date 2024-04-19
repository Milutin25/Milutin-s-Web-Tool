function processing() {
    let input = document.getElementById("textField").value;
    let select = document.getElementById("select");
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
    if (num === 0 || num === 1)
        return 1;
    for (let i =1; i <= num; i++) {
        num *= i;
    }
    return num;
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function demoLoop(length) {
    let list = "";
    for( i = 1; i <= length; i++){
        list += i + ", ";
        
    }return list.slice(0,-2);
}
