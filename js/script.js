//Clear the display
document
  .getElementById("ClearDisplay")
  .addEventListener(
    "click",
    () => (document.getElementById("display").value = "")
  );

document
  .getElementById("clearLastNumber")
  .addEventListener(
    "click",
    () =>
      (document.getElementById("display").value = document
        .getElementById("display")
        .value.slice(0, -1))
  );

// Nuumbers

document
  .getElementById("numberZero")
  .addEventListener(
    "click",
    () => (document.getElementById("display").value += "0")
  );
document
  .getElementById("numberOne")
  .addEventListener(
    "click",
    () => (document.getElementById("display").value += "1")
  );
document
  .getElementById("numberTwo")
  .addEventListener(
    "click",
    () => (document.getElementById("display").value += "2")
  );
document
  .getElementById("numberThree")
  .addEventListener(
    "click",
    () => (document.getElementById("display").value += "3")
  );
document
  .getElementById("numberFour")
  .addEventListener(
    "click",
    () => (document.getElementById("display").value += "4")
  );
document
  .getElementById("numberFive")
  .addEventListener(
    "click",
    () => (document.getElementById("display").value += "5")
  );
document
  .getElementById("numberSix")
  .addEventListener(
    "click",
    () => (document.getElementById("display").value += "6")
  );
document
  .getElementById("numberSeven")
  .addEventListener(
    "click",
    () => (document.getElementById("display").value += "7")
  );
document
  .getElementById("numberEight")
  .addEventListener(
    "click",
    () => (document.getElementById("display").value += "8")
  );
document
  .getElementById("numberNine")
  .addEventListener(
    "click",
    () => (document.getElementById("display").value += "9")
  );

// Calculations

document
  .getElementById("percent")
  .addEventListener(
    "click",
    () => (document.getElementById("display").value /= 100)
  );
document
  .getElementById("division")
  .addEventListener(
    "click",
    () => (document.getElementById("display").value += "/")
  );
document
  .getElementById("multiply")
  .addEventListener(
    "click",
    () => (document.getElementById("display").value += "*")
  );
document
  .getElementById("plus")
  .addEventListener(
    "click",
    () => (document.getElementById("display").value += "+")
  );
document
  .getElementById("negative")
  .addEventListener(
    "click",
    () => (document.getElementById("display").value += "-")
  );
document
  .getElementById("Point")
  .addEventListener(
    "click",
    () => (document.getElementById("display").value += ".")
  );
document
  .getElementById("sum")
  .addEventListener(
    "click",
    () =>
      (document.getElementById("display").value = eval(
        document.getElementById("display").value
      ))
  );
