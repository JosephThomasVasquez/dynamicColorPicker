// // DOM

// Main div - container for all color pickers
const sliderContainer = document.querySelector('.slidecontainer');


createColorPicker();

// Create a color picker
function createColorPicker(colorText) {

    const addPicker = document.querySelector('.btn-add');
    console.log(addPicker);

    addPicker.addEventListener('click', () => {
        createHSLSlider();
    });

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

      // Create HSL Slider ----------------------------------------------------------
      function createHSLSlider() {

        // Create the elements

        const elements = {
            div: document.createElement('div'),
            input: document.createElement('input')
        };

        // Constructor function for creating html elements

        function CreateHTMLElement(type, name, attachment) {
            this.type = document.createElement(type);
            this.name = this.type.textContent = name;
            this.attachment = attachment.appendChild(this.type);
        };
    

        const colorTitleElement = document.createElement('h3');
        colorTitleElement.textContent = 'Color';

        const colorSwatch = document.createElement('div');
        colorSwatch.classList.add('primary-color-swatch');

        // Append all child elements to div container
        colorTitleElement.appendChild(colorSwatch);
        const hLabel = new CreateHTMLElement('div', 'Hue', colorTitleElement);
        const hueSlider = new CreateHTMLElement('input', null, colorTitleElement);
    
        const sLabel = new CreateHTMLElement('div', 'Saturation', colorTitleElement);
        const satSlider = new CreateHTMLElement('input', null, colorTitleElement);

        const lLabel = new CreateHTMLElement('div', 'Lightness', colorTitleElement);
        const lightSlider = new CreateHTMLElement('input', null, colorTitleElement);

        sliderContainer.appendChild(colorTitleElement);
        
        // Assign attributes to hue, saturation, and light inputs
        setInputAttributes(hueSlider.type, hueAttributes);
        setInputAttributes(satSlider.type, satAttributes);
        setInputAttributes(lightSlider.type, lightAttributes);

        updateSliderValue(hueSlider.type, satSlider.type, lightSlider.type, colorSwatch);
      }

      // Update slider values and color swatch
        function updateSliderValue(hVal, sVal, lVal, swatch) {

            const hslLabel = document.createElement('input');
            swatch.appendChild(hslLabel);
            hslLabel.classList.add('input-hsl');

            randomizeColor();

            // Randomize HSL Values
            function randomizeColor() {

                const colorArray = [
                    Math.floor(Math.random() * hVal.max),
                    Math.floor(Math.random() * sVal.max),
                    Math.floor(Math.random() * lVal.max)];

                    hslLabel.value = `hsl(${colorArray[0]}, ${colorArray[1]}%, ${colorArray[2]}%)`;
                    swatch.style.background = `hsl(${colorArray[0]}, ${colorArray[1]}%, ${colorArray[2]}%)`;
                    console.log(colorArray);
            }
        
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
