function ClearDisplay() {
  display.value = "";
}
function ClearLastNumber() {
  display.value = display.value.slice(0, -1);
}

function zero() {
  display.value += numberZero.innerHTML;
}
function one() {
  display.value += numberOne.innerHTML;
}
function two() {
  display.value += numberTwo.innerHTML;
}
function three() {
  display.value += numberThree.innerHTML;
}
function four() {
  display.value += numberFour.innerHTML;
}
function five() {
  display.value += numberFive.innerHTML;
}
function six() {
  display.value += numberSix.innerHTML;
}
function seven() {
  display.value += numberSeven.innerHTML;
}
function eight() {
  display.value += numberEight.innerHTML;
}
function nine() {
  display.value += numberNine.innerHTML;
}

function Division() {
  display.value += division.innerHTML;
}
function Multiply() {
  display.value += multiply.innerHTML;
}
function Plus() {
  display.value += plus.innerHTML;
}
function Negative() {
  display.value += negative.innerHTML;
}
function Point() {
  display.value += point.innerHTML;
}
function Sum() {
  display.value = eval(display.value);
}
function Percent() {
  display.value /= 100;
}

let body = document.querySelector("body");

//Clear the display
clearDisplay.addEventListener("click", () => ClearDisplay());

clearLastNumber.addEventListener("click", () => ClearLastNumber());

// EventListeners
numberZero.addEventListener("click", () => zero());

numberOne.addEventListener("click", () => one());

numberTwo.addEventListener("click", () => two());

numberThree.addEventListener("click", () => three());

numberFour.addEventListener("click", () => four());

numberFive.addEventListener("click", () => five());

numberSix.addEventListener("click", () => six());

numberSeven.addEventListener("click", () => seven());

numberEight.addEventListener("click", () => eight());

numberNine.addEventListener("click", () => nine());

// EventListeners-keydown
body.addEventListener("keydown", (e) => {
  let shiftKey = e.shiftKey;
  let key = e.keyCode;
  let keyCode = key;
  switch ((key = keyCode)) {
    // numbers
    case 48:
      zero();
      break;
    case 49:
      one();
      break;
    case 50:
      two();
      break;
    case 51:
      three();
      break;
    case 52:
      four();
      break;
    case 54:
      six();
      break;
    case 55:
      seven();
      break;
    case 57:
      nine();
      break;

    //Clear the display
    case 8:
      ClearLastNumber();
      break;

    // Calculations
    case 191:
      Division();
      break;
    case 187:
      Plus();
      break;
    case 189:
      Negative();
      break;
    case 190:
      Point();
      break;
    case 13:
      Sum();
      break;
  }

  // multiply and number eight is on one button and Percent and number five is on one button
  if (shiftKey && key == 56) {
    Multiply();
  } else if (key == 56) {
    eight();
  }
  if (shiftKey && key == 53) {
    Percent();
  } else if (key == 53) {
    five();
  }
});

// Calculations
percent.addEventListener("click", () => Percent());

division.addEventListener("click", () => Division());

multiply.addEventListener("click", () => Multiply());

plus.addEventListener("click", () => Plus());

negative.addEventListener("click", () => Negative());

point.addEventListener("click", () => Point());

sum.addEventListener("click", () => Sum());
