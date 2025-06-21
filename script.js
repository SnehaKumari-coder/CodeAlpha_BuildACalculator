const display = document.getElementById('display');

function append(value) {
  if (display.innerText === "0") display.innerText = "";
  display.innerText += value;
}

function clearDisplay() {
  display.innerText = "0";
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace("÷", "/").replace("×", "*"));
  } catch {
    display.innerText = "Error";
  }
}

// Bonus: Keyboard Support
document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (!isNaN(key) || "+-*/.%".includes(key)) {
    append(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    display.innerText = display.innerText.slice(0, -1) || "0";
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});
