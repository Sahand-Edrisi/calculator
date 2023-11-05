let display = document.getElementById("display");
let clearDisplay = document.getElementById("clearDisplay");
let clearLastNumber = document.getElementById("clearLastNumber");

let numberZero = document.getElementById("numberZero");
let numberOne = document.getElementById("numberOne");
let numberTwo = document.getElementById("numberTwo");
let numberThree = document.getElementById("numberThree");
let numberFour = document.getElementById("numberFour");
let numberFive = document.getElementById("numberFive");
let numberSix = document.getElementById("numberSix");
let numberSeven = document.getElementById("numberSeven");
let numberEight = document.getElementById("numberEight");
let numberNine = document.getElementById("numberNine");

let division = document.getElementById("division");
let multiply = document.getElementById("multiply");
let plus = document.getElementById("plus");
let negative = document.getElementById("negative");
let point = document.getElementById("point");
let sum = document.getElementById("sum");
let percent = document.getElementById("percent");

//Clear the display
clearDisplay.addEventListener("click", () => (display.value = ""));

clearLastNumber.addEventListener(
  "click",
  () => (display.value = display.value.slice(0, -1))
);

// EventListeners
numberZero.addEventListener(
  "click",
  () => (display.value += numberZero.innerHTML)
);

numberOne.addEventListener(
  "click",
  () => (display.value += numberOne.innerHTML)
);

numberTwo.addEventListener(
  "click",
  () => (display.value += numberTwo.innerHTML)
);

numberThree.addEventListener(
  "click",
  () => (display.value += numberThree.innerHTML)
);

numberFour.addEventListener(
  "click",
  () => (display.value += numberFour.innerHTML)
);

numberFive.addEventListener(
  "click",
  () => (display.value += numberFive.innerHTML)
);

numberSix.addEventListener(
  "click",
  () => (display.value += numberSix.innerHTML)
);

numberSeven.addEventListener(
  "click",
  () => (display.value += numberSeven.innerHTML)
);

numberEight.addEventListener(
  "click",
  () => (display.value += numberEight.innerHTML)
);

numberNine.addEventListener(
  "click",
  () => (display.value += numberNine.innerHTML)
);

// Calculations
percent.addEventListener("click", () => (display.value /= 100));

division.addEventListener("click", () => (display.value += division.innerHTML));

multiply.addEventListener("click", () => (display.value += multiply.innerHTML));

plus.addEventListener("click", () => (display.value += plus.innerHTML));

negative.addEventListener("click", () => (display.value += negative.innerHTML));

point.addEventListener("click", () => (display.value += point.innerHTML));

sum.addEventListener("click", () => (display.value = eval(display.value)));
