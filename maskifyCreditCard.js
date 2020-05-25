let sampleText = "HI-123-Bye";
const stringArray = Array.from(sampleText);
const length = stringArray.length;
console.log(stringArray);
console.log(length);
for (let i = 0; i < length; i++) {
  const character = stringArray[i];
  const result = !isNaN(character);
  console.log(`Is character ${character} a number? ${result}`);
}
