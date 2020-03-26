// DOM
const sliderHue = document.querySelectorAll(".slider-hue");
const huePrimaryVal = document.querySelector(".hue-pri-value");
const hueSecondaryVal = document.querySelector(".hue-2nd-value");
const hueTertiaryVal = document.querySelector(".hue-tert-value");
const primaryColorSwatch = document.querySelector('.primary-color-swatch');
const secondaryColorSwatch = document.querySelector('.secondary-color-swatch');
const tertiaryColorSwatch = document.querySelector('.tertiary-color-swatch');

// Default Values



// Update the current slider value (each time you drag the slider handle)
// sliderHue.oninput = function() {
//     sliderHueVal.innerHTML = `H: ${this.value}`;
// }

const hueSliderValues = [];

// Hue Sliders
sliderHue.forEach(function (slider) {

    

    hueSliderValues.push(slider);
    huePrimaryVal.innerHTML = `H: ${slider.value}`;
    hueSecondaryVal.innerHTML = `H: ${slider.value}`;
    hueTertiaryVal.innerHTML = `H: ${slider.value}`;

    if (slider.name === 'hue-primary') {
        slider.oninput = () => {
            huePrimaryVal.innerHTML = `H: ${hueSliderValues[0].value}`;
            primaryColorSwatch.style.backgroundColor = `hsl(${hueSliderValues[0].value}, 100%, 50%)`;
        };
    }else if (slider.name === 'hue-secondary') {
        slider.oninput = () => {
            hueSecondaryVal.innerHTML = `H: ${hueSliderValues[1].value}`;
            secondaryColorSwatch.style.backgroundColor = `hsl(${hueSliderValues[1].value}, 100%, 50%)`;
        };
    }else if (slider.name === 'hue-tertiary') {
        slider.oninput = () => {
            hueTertiaryVal.innerHTML = `H: ${hueSliderValues[2].value}`;
            tertiaryColorSwatch.style.backgroundColor = `hsl(${hueSliderValues[2].value}, 100%, 50%)`;
        };
    }
});

console.log(hueSliderValues);