var count = 0;

function updateDisplay() {
  document.getElementById("show").innerText = count;
}

function decrement() {
  if (count > 0) {
    count--;
  }
  updateDisplay();
}

function increment() {
  count++;
  updateDisplay();
}

function adds() {
  count += 5;
  updateDisplay();
}

function subs() {
  if (count >= 5) {
    count -= 5;
  } else {
    count = 0;
  }
  updateDisplay();
}

function resets() {
  count = 0;      
  updateDisplay();
}
