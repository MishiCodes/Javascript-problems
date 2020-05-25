//solution1
/* function concat() {
  let result = "";
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
    if (i !== arguments.length - 1) {
      result += ", ";
    }
  }
  return result;
} */

//solution2
/*function concat() {
  const argument = Array.prototype.slice.call(arguments);
  return argument.join();
}*/
//solution3
function concat() {
  return Array.from(arguments).join();
}
//const concat = () => Array.from(arguments).join();
console.log(concat("a"));
console.log(concat("a", "b", "c"));
