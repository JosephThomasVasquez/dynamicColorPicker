// // DOM

// Main div - container for all color pickers
const sliderContainer = document.querySelector('.slidecontainer');


createColorPicker(1);

// Create a color picker
function createColorPicker(number) {

    
    // HSL input attributes
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

    // Assign atributes to input by selecting element and the attributes object
    function setInputAttributes(element, attributes) {

        for(let key in attributes) {
            element.setAttribute(key, attributes[key]);
        }

    };

      createHSLSlider();
      createHSLSlider();
      createHSLSlider();

      // Create HSL Slider
      function createHSLSlider() {

        // Create the elements
        const colorTitleElement = document.createElement('h3');
        colorTitleElement.textContent = 'Primary Color';

        const hLabel = document.createElement('div');
        hLabel.textContent = 'Hue';
        const sLabel = document.createElement('div');
        sLabel.textContent = 'Saturation';
        const lLabel = document.createElement('div');
        lLabel.textContent = 'Lightness';

        const hueSlider = document.createElement('input');
        const satSlider = document.createElement('input');
        const lightSlider = document.createElement('input');

        const colorSwatch = document.createElement('div');
        colorSwatch.classList.add('primary-color-swatch');

        // Append all child elements to div container
        colorTitleElement.appendChild(colorSwatch);
        colorTitleElement.appendChild(hueSlider);
        colorTitleElement.appendChild(hLabel);
        colorTitleElement.appendChild(satSlider);
        colorTitleElement.appendChild(sLabel);
        colorTitleElement.appendChild(lightSlider);
        colorTitleElement.appendChild(lLabel);
        sliderContainer.appendChild(colorTitleElement);
        
        // Assign attributes to hue, saturation, and light inputs
        setInputAttributes(hueSlider, hueAttributes);
        setInputAttributes(satSlider, satAttributes);
        setInputAttributes(lightSlider, lightAttributes);

        updateSliderValue(hueSlider, satSlider, lightSlider, colorSwatch);
      }

      // Update slider values and color swatch
        function updateSliderValue(hVal, sVal, lVal, swatch) {

            const hslValues = [];

            hVal.oninput = () => {

                hslValues[0] = hVal.value;
                console.log(hslValues[0]);
                swatch.style.background = `hsl(${hVal.value},${sVal.value}%,${lVal.value}%)`;
            }
            sVal.oninput = () => {

                hslValues[1] = sVal.value;
                console.log(hslValues[1]);
                swatch.style.background = `hsl(${hVal.value},${sVal.value}%,${lVal.value}%)`;
            }
            lVal.oninput = () => {

                hslValues[2] = lVal.value;
                console.log(hslValues[2]);
                swatch.style.background = `hsl(${hVal.value},${sVal.value}%,${lVal.value}%)`;
            }
            
        };

}
