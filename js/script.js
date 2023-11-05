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

let body = document.querySelector("body");

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

// EventListeners-keydown
body.addEventListener("keydown", (event) => {
  let key = event.keyCode;
  let shiftKey = event.shiftKey;

  // numbers
  if (key == 48) {
    display.value += numberZero.innerHTML;
  }
  if (key == 49) {
    display.value += numberOne.innerHTML;
  }
  if (key == 50) {
    display.value += numberTwo.innerHTML;
  }
  if (key == 51) {
    display.value += numberThree.innerHTML;
  }
  if (key == 52) {
    display.value += numberFour.innerHTML;
  }
  if (key == 53) {
    display.value += numberFive.innerHTML;
  }
  if (key == 54) {
    display.value += numberSix.innerHTML;
  }
  if (key == 55) {
    display.value += numberSeven.innerHTML;
  }
  if (key == 57) {
    display.value += numberNine.innerHTML;
  }

  // multiply and number eight is on one button
  if (shiftKey && key == 56) {
    display.value += multiply.innerHTML;
  } else if (key == 56) {
    display.value += numberEight.innerHTML;
  }

  // Clear the display
  if (key == 8) {
    display.value = display.value.slice(0, -1);
  }

  // Calculations
  if (key == 191) {
    display.value += division.innerHTML;
  }
  if (key == 187) {
    display.value += plus.innerHTML;
  }
  if (key == 189) {
    display.value += negative.innerHTML;
  }
  if (key == 190) {
    display.value += point.innerHTML;
  }
  if (key == 13) {
    display.value = eval(display.value);
  }
});

// Calculations
percent.addEventListener("click", () => (display.value /= 100));

division.addEventListener("click", () => (display.value += division.innerHTML));

multiply.addEventListener("click", () => (display.value += multiply.innerHTML));

plus.addEventListener("click", () => (display.value += plus.innerHTML));

negative.addEventListener("click", () => (display.value += negative.innerHTML));

point.addEventListener("click", () => (display.value += point.innerHTML));

sum.addEventListener("click", () => (display.value = eval(display.value)));
