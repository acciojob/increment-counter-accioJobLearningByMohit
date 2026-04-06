//your JS code here. If required.
let counterEl = document.getElementById("counter");
let btn = document.getElementById("incrementBtn");
btn.addEventListener("click", function() {
    let currentValue = Number(counterEl.innerText);

    // Show alert BEFORE increment
    alert(currentValue);

    // Increment value
    currentValue++;

    // Update DOM
    counterEl.innerText = currentValue;
});