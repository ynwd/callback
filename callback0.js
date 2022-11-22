function displayer(some) {
  console.log(`Hello ${some}`);
}

function calculator(num1, num2) {
  let sum = num1 + num2;
  displayer(sum);
}

calculator(5, 5);
