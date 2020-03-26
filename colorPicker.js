// DOM
var sliderHue = document.querySelectorAll(".slider-hue");
var huePrimaryVal = document.querySelector(".hue-pri-value");
var hueSecondaryVal = document.querySelector(".hue-2nd-value");
var hueTertiaryVal = document.querySelector(".hue-tert-value");

// Default Values



// Update the current slider value (each time you drag the slider handle)
// sliderHue.oninput = function() {
//     sliderHueVal.innerHTML = `H: ${this.value}`;
// }


// Hue Sliders
sliderHue.forEach(function (slider) {
    huePrimaryVal.innerHTML = `H: ${slider.value}`;
    hueSecondaryVal.innerHTML = `H: ${slider.value}`;
    hueTertiaryVal.innerHTML = `H: ${slider.value}`;

    if (slider.name === 'hue-primary') {
        slider.oninput = () => {
            huePrimaryVal.innerHTML = `H: ${slider.value}`;
        };
    }else if (slider.name === 'hue-secondary') {
        slider.oninput = () => {
            hueSecondaryVal.innerHTML = `H: ${slider.value}`;
        };
    }else if (slider.name === 'hue-tertiary') {
        slider.oninput = () => {
            hueTertiaryVal.innerHTML = `H: ${slider.value}`;
        };
    }
});