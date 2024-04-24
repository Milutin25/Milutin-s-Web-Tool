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
            result = uppercase(input);
            break;
        case "loop":
            result = demoLoop(input);
            break;
        default:
            result = "Invalid function selection";
    }
    outputArea.innerHTML = result;
}

function factorial(num) {
    let input = document.getElementById("textField").value;
    let outputArea = document.getElementById("outputArea");

    if (isNaN(input) || input ==="") {
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
        let input = document.getElementById("textField").value;
        let outputArea = document.getElementById("outputArea");

        if (input === ""){
            document.getElementById("textField").classList.add("invalid-input");
            return outputArea.innerHTML = "Invalid input. Please enter a word or sentence.";
        }else{
            document.getElementById("textField").classList.remove("invalid-input");
            return str.split("").reverse().join("");
    }
}

function demoLoop(length) {
    let input = document.getElementById("textField").value;
    let outputArea = document.getElementById("outputArea");

    if (input === "") {
        document.getElementById("textField").classList.add("invalid-input");
        return outputArea.innerHTML = "Invalid input. Please enter a valid number or a word.";
    } else if(Number(input)){
    document.getElementById("textField").classList.remove("invalid-input");
    let list = "";
        for( i = 1; i <= length; i++){
            list += i + ", ";   
            }
            return list.slice(0,-2);
    }else{
        let loopedString;
        for (let i = 0; i < length.length; i++){
            loopedString = length.split(""); 
            loopedString = loopedString.filter(char => char !== ' '); //removing white space in sentence
        }
        return(loopedString);
    }
}






function uppercase(word){
    let input = document.getElementById("textField").value;
    let outputArea = document.getElementById("outputArea");

    if (Number(input) || input === ""){
        document.getElementById("textField").classList.add("invalid-input");
        return outputArea.innerHTML = "Invalid input. Please enter a word or sentence.";
        }else{
        document.getElementById("textField").classList.remove("invalid-input"); 
        return word.replace(/(^|\. *)([a-z])/g, function(match) {
            return match.toUpperCase();
            }); 
        }
    }
