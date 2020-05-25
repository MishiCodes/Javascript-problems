//SDA SOLUTION
/* function once(callback) {
  let isCalled = false;

  return function () {
    if (!isCalled) {
      isCalled = true;
      callback();
    }
  };
}

function everyOtherTime(callback) {
  let shouldBeCalled = true;

  return function () {
    if (shouldBeCalled) {
      callback();
    }
    shouldBeCalled = !shouldBeCalled;
  };
}

console.log(once());
 */
// MOHAMMAD SOLUTION
/* const once = (callback) => {
  let change = true;
  return () => {
    if (change) {
      callback();
      change = false;
    }
  };
};
const everyOtherTime = (callback) => {
  let change = true;
  return () => {
    if (change === true) {
      callback();
      change = false;
    } else {
      change = true;
    }
  };
};

console.log(once()); */

function once(callback) {
  let isCalled = false;
  return function () {
    if (!isCalled) {
      isCalled = true;
      callback();
    }
  };
}
const heyonce = once(() => console.log("Hey"));

heyonce();
heyonce();
heyonce();
