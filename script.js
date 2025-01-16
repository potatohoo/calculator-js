// const submitButton=document.getElementById("calculate")

// function calculate(){
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     let operator = document.getElementById("operation").value;

//     if (operator=="add"){
//         res= num1 + num2;
//         alert("the answer is " + res)
//     }
//     else if (operator=="sub"){
//         res= num1 - num2;
//         alert("the answer is " + res)
//     }
//     else if (operator=="mul"){
//         res= num1 * num2;
//         alert("the answer is " + res);
//     }
//     else if (operator=="div"){
//         if (num2==0){
//             alert("Error: Division by zero is not allowed");
//         }
//         else{
//             res= num1 / num2;
//             alert("the answer is " + res)
//         }
//     }
    
    
// }

submitButton.addEventListener("click",calculate())