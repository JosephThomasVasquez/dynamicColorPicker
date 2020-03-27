// // DOM

// Main div - container for all color pickers
const sliderContainer = document.querySelector('.slidecontainer');


createColorPicker();

// Create a color picker
function createColorPicker(colorText) {

    const colorNum = [];
    
    // HSL input attributes
    const hueAttributes = {
        name: 'hue1',
        type: 'range',
        min: '0',
        max: '360',
        value: '180',
        step: '1',
        class: 'slider'
    }

    const satAttributes = {
        name: 'sat1',
        type: 'range',
        min: '0',
        max: '100',
        value: '50',
        step: '1',
        class: 'slider'
    }

    const lightAttributes = {
        name: 'light1',
        type: 'range',
        min: '0',
        max: '100',
        value: '50',
        step: '1',
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

      // Create HSL Slider ----------------------------------------------------------
      function createHSLSlider() {

        // Create the elements
        const colorTitleElement = document.createElement('h3');
        colorTitleElement.textContent = 'Color';

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

            const hslLabel = document.createElement('input');
            swatch.appendChild(hslLabel);
            hslLabel.classList.add('input-hsl');

            swatch.style.background = `hsl(
                ${Math.floor(Math.random() * hVal.max)},
                 ${Math.floor(Math.random() * sVal.max)}%, 
                 ${Math.floor(Math.random() * lVal.max)}%)`;
            
            hslLabel.value = `hsl(${hVal.value}, ${sVal.value}%, ${lVal.value}%)`;
            
            const hslValues = [];

            hVal.oninput = () => {
                hslValues[0] = hVal.value;
                hslLabel.value = `hsl(${hVal.value}, ${sVal.value}%, ${lVal.value}%)`;
                swatch.style.background = `hsl(${hVal.value}, ${sVal.value}%, ${lVal.value}%)`;
            }
            sVal.oninput = () => {
                hslValues[1] = sVal.value;
                hslLabel.value = `hsl(${hVal.value}, ${sVal.value}%, ${lVal.value}%)`;
                swatch.style.background = `hsl(${hVal.value}, ${sVal.value}%, ${lVal.value}%)`;
            }
            lVal.oninput = () => {
                hslValues[2] = lVal.value;
                hslLabel.value = `hsl(${hVal.value}, ${sVal.value}%, ${lVal.value}%)`;
                swatch.style.background = `hsl(${hVal.value}, ${sVal.value}%, ${lVal.value}%)`;
            }   
        };
};
