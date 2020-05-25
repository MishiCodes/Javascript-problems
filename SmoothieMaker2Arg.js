let smoothies = {
  Classic: "ice, banana, pineapple, mango, peach, honey, yogurt, strawberry",
  ForestBerry: "strawberry, raspberry, blueberry, honey, ice, yogurt",
  Freezie: "blackberry, blueberry, black currant, grape juice, frozen yogurt",
  Greenie: "green apple, kiwi, lime, avocado, spinach, ice, apple juice",
  VeganDelite:
    "strawberry, passion fruit, pineapple, mango, peach, ice, soy milk",
  JustDesserts: "banana, ice cream, chocolate, peanut, cherry",
};
function ingredients(smoothieName) {
  let smoothie = smoothieName.split(",");
  let array = smoothies[smoothie[0]].split(", ");
  console.log(array);
  let exclude = [];
  for (let i = 1; i < smoothie.length; i++) {
    exclude.push(smoothie[i].slice(1));
  }
  console.log(exclude);
  array = array.filter((item) => {
    return !exclude.includes(item);
  });

  array = array.sort().join();
  return array;
}
console.log(ingredients("Classic,-ice,-yogurt,-banana"));

/*function ingredients(smoothieName) {
  let smoothie = smoothieName.split(",");
  let array = smoothies[smoothie[0]].split(",");
  var resultArr = [];
  for (let i = 1; i < smoothie.length - 1; i++) {
    let exclude = smoothie[i].slice(1);
    resultArr = array.filter((ingredient) => ingredient !== exclude);
  }

  let result = resultArr.sort().join();
  return result;
}*/
//console.log(ingredients("Classic,-yogurt"));

/*let excludeArray = exclude.split(",");

  let resultArray = smoothies[smoothieName].split(",");
  resultArray = resultArray.filter(function (item) {
    return !excludeArray.includes(item);
  });
  return resultArray.sort().join();
}*/
/* array1 = array1.filter(function(item) {
            return !array2.includes(item); }*/
/*return resultArray
      .filter((ingredient) => ingredient !== exclude)
      .sort()
      .join();
  } */
//console.log(ingredients("Classic", "strawberry"));
/*function maskify (creditCard) {
  // if the digits are 4 so there is no need to maskify
  if (creditCard.length <= 4 || creditCard.length == 0) return creditCard;
  return creditCard
      .split('')
      .map((accumulator, index, array) => {
    // Donot maskify first digit and last four digits
         if (index > 0 && index < array.length -4 && array.toString() !== '-') return '#';
         return accumulator;
       })
   .join('');
} */

/*function maskify (creditCard) {
  // if the digits are 4 so there is no need to maskify
  if (creditCard.length < 6) return creditCard;
  return creditCard
      .split('')
      .map((accumulator, index, array) => {
    // Donot maskify first digit and last four digits
         if (index > 0 && index < array.length -4 && array[index] !== '-' &&  array[index] !== ) {return '#'};
         return accumulator;
       })
   .join('');
} */

/*function maskify (creditCard) {
  // if the digits are 4 so there is no need to maskify
  if (creditCard.length < 6) return creditCard;
  return creditCard
      .split('')
      .map((accumulator, index, array) => {
    // Donot maskify first digit and last four digits
         if (array[i].match(/[A-Z]/))
         if (index > 0 && index < array.length -4 && array[index] !== '-') {
              return "#";
           }
         return accumulator;
       })
   .join('');
} 
//replace(/(?=.{5})./g, '#')*/
/**
 * Process the input and return masked string
 * @param {String} creditCard
 * @returns {String}
 */

function processInput(creditCard) {
  let output = "";
  const length = creditCard.length;
  //  checking the size of the input
  if (length > 5) {
    const firstDigit = creditCard.slice(0, 1);
    const lastDigits = creditCard.slice(length - 4, length);
    // replace Digit with #
    for (let i = 1; i < length - 4; i++) {
      const char = creditCard[i];
      output += isNaN(parseInt(char, 10)) ? char : "#";
    }
    output = `${firstDigit}${output}${lastDigits}`;
  } else {
    output = creditCard;
  }
  return output;
}

//checking the input if its a creditcard number or string
function maskify(creditCard) {
  let output;

  switch (typeof creditCard) {
    case "string":
      output = processInput(creditCard);
      break;
    case "number":
      output = processInput(String(creditCard));
      break;
    default:
      output = "";
      break;
  }

  return output;
}

// Menu of the smoothies
let smoothies = {
  Classic: "ice,banana,pineapple,mango,peach,honey,yogurt,strawberry",
  "Forest Berry": "strawberry,raspberry,blueberry,honey,ice,yogurt",
  Freezie: "blackberry,blueberry,black currant, grape juice,frozen yogurt",
  Greenie: "green apple, kiwi,lime,avocado,spinach,ice,apple juice",
  "Vegan Delite": "strawberry,passion fruit,pineapple,mango,peach,ice,soy milk",
  "Just Desserts": "banana,ice cream,chocolate,peanut,cherry",
};

function ingredients(order) {
  let smoothie = order.split(",");
  // Take the name of smoothie
  let array = smoothies[smoothie[0]].split(",");
  let exclude = [];
  //removing '-' from excluded ingredient
  for (let i = 1; i < smoothie.length; i++) {
    exclude.push(smoothie[i].slice(1));
  }
  //Compare and return smoothie ingredients for the order
  array = array.filter((item) => {
    return !exclude.includes(item);
  });
  // sorting and converting back to string
  array = array.sort().join();
  return array;
}

// Object for directions
const oppositeDirections = {
  NORTH: "SOUTH",
  SOUTH: "NORTH",
  EAST: "WEST",
  WEST: "EAST",
};

const dirReduc = (array) => {
  const stackArray = [];
  array.forEach((direction) => {
    //Fill the stackArray while comparing opposite directions
    if (stackArray.length) {
      const lastDirection = stackArray.pop();
      if (lastDirection != oppositeDirections[direction]) {
        stackArray.push(lastDirection);
        stackArray.push(direction);
      }
    } else {
      stackArray.push(direction);
    }
  });
  return stackArray;
};

// Object for directions
const oppositeDirections = {
  NORTH: "SOUTH",
  SOUTH: "NORTH",
  EAST: "WEST",
  WEST: "EAST",
};

const dirReduc = (array) => {
  const stackArray = [];
  array.forEach((direction) => {
    //Fill the stackArray while comparing opposite directions
    if (stackArray.length) {
      const lastDirection = stackArray.pop();
      if (lastDirection != oppositeDirections[direction]) {
        stackArray.push(lastDirection);
        stackArray.push(direction);
      }
    } else {
      stackArray.push(direction);
    }
  });
  return stackArray;
};
