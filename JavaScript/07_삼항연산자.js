const isEven = (num) => {
  return num == "0" ? 0 : num % 2 == 0 ? "짝수" : "홀수";
};

console.log(isEven(4));
console.log(isEven(0));
console.log(isEven(3));
