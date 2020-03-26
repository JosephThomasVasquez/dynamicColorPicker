// DOM
var sliderRed = document.querySelector(".slider");
var sliderRedVal = document.querySelector(".redNumValue");

// Default Values
sliderRedVal.innerHTML = `Red: ${sliderRed.value}`;


// Update the current slider value (each time you drag the slider handle)
sliderRed.oninput = function() {
    sliderRedVal.innerHTML = `Red: ${this.value}`;
}