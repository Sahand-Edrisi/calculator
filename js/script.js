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
body.addEventListener("keydown", (e) => {
  let shiftKey = e.shiftKey;
  let key = e.keyCode;
  let keyCode = key;
  switch ((key = keyCode)) {
    // numbers
    case 48:
      display.value += numberZero.innerHTML;
      break;
    case 49:
      display.value += numberOne.innerHTML;
      break;
    case 50:
      display.value += numberTwo.innerHTML;
      break;
    case 51:
      display.value += numberThree.innerHTML;
      break;
    case 52:
      display.value += numberFour.innerHTML;
      break;
    case 53:
      display.value += numberFive.innerHTML;
      break;
    case 54:
      display.value += numberSix.innerHTML;
      break;
    case 55:
      display.value += numberSeven.innerHTML;
      break;
    case 57:
      display.value += numberNine.innerHTML;
      break;

    //Clear the display
    case 8:
      display.value = display.value.slice(0, -1);
      break;

    // Calculations
    case 191:
      display.value += division.innerHTML;
      break;
    case 187:
      display.value += plus.innerHTML;
      break;
    case 189:
      display.value += negative.innerHTML;
      break;
    case 190:
      display.value += point.innerHTML;
      break;
    case 13:
      display.value = eval(display.value);
      break;
  }

  // multiply and number eight is on one button
  if (shiftKey && key == 56) {
    display.value += multiply.innerHTML;
  } else if (key == 56) {
    display.value += numberEight.innerHTML;
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
