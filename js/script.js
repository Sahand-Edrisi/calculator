//Clear the display
let ClearDisplay = document.getElementById("ClearDisplay");
let clearLastNumber = document.getElementById("clearLastNumber");

ClearDisplay.addEventListener(
  "click",
  () => (document.getElementById("display").value = "")
);

clearLastNumber.addEventListener(
  "click",
  () =>
    (document.getElementById("display").value = document
      .getElementById("display")
      .value.slice(0, -1))
);

// Nuumbers
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

numberZero.addEventListener(
  "click",
  () => (document.getElementById("display").value += numberZero.innerHTML)
);

numberOne.addEventListener(
  "click",
  () => (document.getElementById("display").value += numberOne.innerHTML)
);

numberTwo.addEventListener(
  "click",
  () => (document.getElementById("display").value += numberTwo.innerHTML)
);

numberThree.addEventListener(
  "click",
  () => (document.getElementById("display").value += numberThree.innerHTML)
);

numberFour.addEventListener(
  "click",
  () => (document.getElementById("display").value += numberFour.innerHTML)
);

numberFive.addEventListener(
  "click",
  () => (document.getElementById("display").value += numberFive.innerHTML)
);

numberSix.addEventListener(
  "click",
  () => (document.getElementById("display").value += numberSix.innerHTML)
);

numberSeven.addEventListener(
  "click",
  () => (document.getElementById("display").value += numberSeven.innerHTML)
);

numberEight.addEventListener(
  "click",
  () => (document.getElementById("display").value += numberEight.innerHTML)
);

numberNine.addEventListener(
  "click",
  () => (document.getElementById("display").value += numberNine.innerHTML)
);

// Calculations
let division = document.getElementById("division");
let multiply = document.getElementById("multiply");
let plus = document.getElementById("plus");
let negative = document.getElementById("negative");
let Point = document.getElementById("Point");
let sum = document.getElementById("sum");
let percent = document.getElementById("percent");

percent.addEventListener(
  "click",
  () => (document.getElementById("display").value /= 100)
);
division.addEventListener(
  "click",
  () => (document.getElementById("display").value += division.innerHTML)
);

multiply.addEventListener(
  "click",
  () => (document.getElementById("display").value += multiply.innerHTML)
);

plus.addEventListener(
  "click",
  () => (document.getElementById("display").value += plus.innerHTML)
);

negative.addEventListener(
  "click",
  () => (document.getElementById("display").value += negative.innerHTML)
);

Point.addEventListener(
  "click",
  () => (document.getElementById("display").value += Point.innerHTML)
);

sum.addEventListener(
  "click",
  () =>
    (document.getElementById("display").value = eval(
      document.getElementById("display").value
    ))
);


