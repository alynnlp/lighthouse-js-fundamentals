function isEven(num) {
  return num % 2 === 0;
};

var tenIsEven = isEven(10);
var elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

/** dont need to set them as variable, can print the function directly**/

console.log(isEven(10));
console.log(isEven(11));