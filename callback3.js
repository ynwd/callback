function calculator(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);
}

calculator(5, 5, (some) => {
  console.log(`Hello ${some}`);
});
