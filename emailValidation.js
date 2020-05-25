//SOLUTION1
//const isEmail = (string) => !!string.match(/^\w+@\w+\.\w+$/);

//SOLUTION2
const isEmail = (email) => {
  if (email.indexOf("@") >= 0 && email.charAt(email.length - 4) != ".") {
    return false;
  } else if (email.indexOf("@") < 0 && email.indexOf(".") < 0) {
    return false;
  }
  return true;
};
console.log(isEmail("hello_1@SpeechGrammarList.com"));
