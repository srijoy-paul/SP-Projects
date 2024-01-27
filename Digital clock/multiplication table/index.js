const num1= Math.ceil(Math.random()*10);
const num2= Math.ceil(Math.random()*10);


let questionEl=document.getElementById("question");
// Set a value if questionEl is null
// if (questionEl === null) {
//   questionEl = 'New Value';
// }


questionEl.innerText=`What is ${num1} multiplying by ${num2}?`;





