/* let smoothies = {
    Classic: "strawberry, banana, pineapple, mango, peach, honey, ice, yogurt",
    ForestBerry: "strawberry, raspberry, blueberry, honey, ice, yogurt",
    Freezie: "blackberry, blueberry, black currant, grape juice, frozen yogurt",
    Greenie: "green apple, kiwi, lime, avocado, spinach, ice, apple juice",
    VeganDelite: "strawberry, passion fruit, pineapple, mango, peach, ice, soy milk",
    JustDesserts: "banana, ice cream, chocolate, peanut, cherry",
}​ */

/*let classic = "strawberry, banana, pineapple, mango, peach, honey, ice, yogurt";
let exclude = "strawberry";

function ingredients(smoothieType, exclude) {
  return (smoothieArr = smoothieType
    .split(",")
    .filter((item) => item !== exclude)
    .sort()
    .join(","));
}

console.log(ingredients(classic, exclude)); */

let smoothies = {
  Classic: "ice,banana,pineapple,mango,peach,honey,strawberry,yogurt",
  ForestBerry: "strawberry, raspberry, blueberry, honey, ice, yogurt",
  Freezie: "blackberry, blueberry, black currant, grape juice, frozen yogurt",
  Greenie: "green apple, kiwi, lime, avocado, spinach, ice, apple juice",
  VeganDelite:
    "strawberry, passion fruit, pineapple, mango, peach, ice, soy milk",
  JustDesserts: "banana, ice cream, chocolate, peanut, cherry",
};

function ingredients(smoothieName, exclude) {
  const array = smoothies[smoothieName].split(",");
  return array
    .filter((ingredient) => ingredient !== exclude)
    .sort()
    .join();
}
console.log(ingredients("Classic", "honey"));
