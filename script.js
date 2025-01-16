const submitButton=document.getElementById("calculate")

function calculate(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operation").value;

    if (operator=="add"){
        return num1 + num2;
    }
    else if (operator=="sub"){
        return num1 - num2;
    }

}

submitButton.addEventListener("click",calculate())