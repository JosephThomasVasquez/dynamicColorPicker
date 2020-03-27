// // DOM

// Main div - container for all color pickers
const sliderContainer = document.querySelector('.slidecontainer');

// Create elements
const colorTitleElement = document.createElement('h3');
const primaryLabel = colorTitleElement.textContent = 'Primary Color';

const hueSlider = document.createElement('input');
const satSlider = document.createElement('input');
const lightSlider = document.createElement('input');

const colorSwatch = document.createElement('div');
colorSwatch.classList.add('primary-color-swatch');



const hueAttributes = {
    id: 'hue1',
    type: 'range',
    min: '1',
    max: '360',
    value: '180',
    class: 'slider'
}

const satAttributes = {
    id: 'sat1',
    type: 'range',
    min: '1',
    max: '100',
    value: '50',
    class: 'slider'
}

const lightAttributes = {
    id: 'light1',
    type: 'range',
    min: '1',
    max: '100',
    value: '50',
    class: 'slider'
}


createColorPicker();

// Assign atributes to input by selecting element and the attributes object
function setInputAttributes(element, attributes) {

    for(let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }

};


// Create a color picker
function createColorPicker() {

    // Append all child elements to div container
    colorTitleElement.appendChild(colorSwatch);
    colorTitleElement.appendChild(hueSlider);
    colorTitleElement.appendChild(satSlider);
    colorTitleElement.appendChild(lightSlider);
    sliderContainer.appendChild(colorTitleElement);
    
    // Assign attributes to hue, saturation, and light inputs
    setInputAttributes(hueSlider, hueAttributes);
    setInputAttributes(satSlider, satAttributes);
    setInputAttributes(lightSlider, lightAttributes);

    function updateSlider(slider) {

        

    }

}
