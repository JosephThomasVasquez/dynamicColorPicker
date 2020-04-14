// // DOM

// Main div - container for all color pickers
const toolBar = document.querySelector(".toolbar");
const hexInput = document.querySelector(".hex-input");
const rgbInput = document.querySelector(".rgb-input");
const displayContainer = document.querySelector(".sample-container");
const sliderContainer = document.querySelector(".slidecontainer");
let colorName = 1;

createColorPicker();

// Create a color picker
function createColorPicker(colorText) {
  const addPicker = document.querySelector(".btn-add");

  addPicker.addEventListener("click", () => {
    createHSLSlider();
  });

  const colorType = [];

  class ColorType {
    constructor(
      name,
      type,
      min1,
      min2,
      min3,
      max1,
      max2,
      max3,
      value,
      step,
      className
    ) {
      this.name = name;
      this.type = type;
      this.min1 = min1;
      this.min2 = min2;
      this.min3 = min3;
      this.max1 = max1;
      this.max2 = max2;
      this.max3 = max3;
      this.value = value;
      this.step = step;
      this.className = className;
    }
  }

  const CreateHSLSlider = new ColorType(
    "HSL",
    "range",
    "0",
    "0",
    "0",
    "360",
    "100",
    "100",
    "180",
    "1",
    "slider"
  );
  const CreateRGBSlider = new ColorType(
    "RGB",
    "range",
    "0",
    "0",
    "0",
    "255",
    "255",
    "255",
    "255",
    "1",
    "slider"
  );

  //   console.log('The RGB Slider:', CreateRGBSlider);

  const createInputs = document.createElement("input");

  setColorTypeAttributes(createInputs, CreateRGBSlider);

  //   console.log('The Input element:', createInputs);

  const a = 135;

  const toHex = a.toString(16);

  console.log("The new Value is:", toHex);

  hexInput.value = toHex;

  // Functions converts hsl values to rgb using formula from - https://css-tricks.com/converting-color-spaces-in-javascript/
  function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    let m = l - c / 2;
    let r = 0;
    let g = 0;
    let b = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    rgbToHex(r, g, b);

    return (hexInput.value = `rgb(${r}, ${g}, ${b})`);
  }

  // Broken, as the digits do not equate to the propper hexadecimal values
  function rgbToHex(r, g, b) {
    if (r.length === 1) {
      r = "0" + r.toString(16);
    } else if (g.length === 1) {
      g = "0" + g.toString(16);
    } else if (b.length === 1) {
      b = "0" + b.toString(16);
    }
    console.log(`rgb Values: ${r},${g},${b}`);
    return (rgbInput.value = `#${r}${g}${b}`);
  }

  //To test hslToRgb
  hslToRgb(90, 100, 50);

  function setColorTypeAttributes(element, attributes) {
    for (let key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  }

  // HSL input attributes
  const hueAttributes = {
    name: "hue1",
    type: "range",
    min: "0",
    max: "360",
    value: "180",
    step: "1",
    class: "slider",
  };

  const satAttributes = {
    name: "sat1",
    type: "range",
    min: "0",
    max: "100",
    value: "50",
    step: "1",
    class: "slider",
  };

  const lightAttributes = {
    name: "light1",
    type: "range",
    min: "0",
    max: "100",
    value: "50",
    step: "1",
    class: "slider",
  };

  // Assign atributes to input by selecting element and the attributes object
  function setInputAttributes(element, attributes) {
    for (let key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  }

  createHSLSlider();

  // Create HSL Slider ----------------------------------------------------------
  function createHSLSlider() {
    // Create the elements

    const elements = {
      div: document.createElement("div"),
      input: document.createElement("input"),
    };

    // Create classes for creating html elements
    class CreateHTMLElement {
      constructor(type, name, attachment) {
        this.type = document.createElement(type);
        this.name = this.type.textContent = name;
        this.attachment = attachment.appendChild(this.type);
      }
    }

    // Create Color Sample Class
    class CreateSample {
      constructor(color, attachment) {
        this.color = document.createElement(color);
        this.attachment = attachment.appendChild(this.color);
      }
    }

    const colorTitleElement = document.createElement("h3");
    colorTitleElement.textContent = `Color #${colorName++}`;

    const colorSwatch = document.createElement("div");
    colorSwatch.classList.add("primary-color-swatch");

    // create labels and slider html elements
    // i.e. CreateHTMLElement('tag type', 'name', html element to appendChild())
    colorTitleElement.appendChild(colorSwatch);

    const colorSample = new CreateSample("div", displayContainer);
    colorSample.color.classList.add("color-sample");

    const hLabel = new CreateHTMLElement("div", "Hue", colorTitleElement);
    const hueSlider = new CreateHTMLElement("input", null, colorTitleElement);

    const sLabel = new CreateHTMLElement(
      "div",
      "Saturation",
      colorTitleElement
    );
    const satSlider = new CreateHTMLElement("input", null, colorTitleElement);

    const lLabel = new CreateHTMLElement("div", "Lightness", colorTitleElement);
    const lightSlider = new CreateHTMLElement("input", null, colorTitleElement);

    sliderContainer.appendChild(colorTitleElement);

    // Assign attributes to hue, saturation, and light inputs
    setInputAttributes(hueSlider.type, hueAttributes);
    setInputAttributes(satSlider.type, satAttributes);
    setInputAttributes(lightSlider.type, lightAttributes);

    updateSliderValue(
      hueSlider.type,
      satSlider.type,
      lightSlider.type,
      colorSwatch,
      colorSample.color
    );
  }

  // Update slider values and color swatch
  function updateSliderValue(hVal, sVal, lVal, swatch, sample) {
    const hslLabel = document.createElement("input");
    swatch.appendChild(hslLabel);
    hslLabel.classList.add("input-hsl");

    const colorArray = [
      Math.floor(Math.random() * hVal.max),
      Math.floor(Math.random() * sVal.max),
      Math.floor(Math.random() * lVal.max),
    ];

    randomizeColor();

    // Randomize HSL Values
    function randomizeColor() {
      hslLabel.value = swatch.style.background = sample.style.background = `hsl(${colorArray[0]}, ${colorArray[1]}%, ${colorArray[2]}%)`;
      hVal.value = colorArray[0];
      sVal.value = colorArray[1];
      lVal.value = colorArray[2];
      hexInput.value = hslToRgb(colorArray[0], colorArray[1], colorArray[2]);
      console.log(colorArray);
    }

    const hslValues = [];

    hVal.oninput = () => {
      hslValues[0] = hVal.value;
      hslLabel.value = swatch.style.background = sample.style.background = `hsl(${hVal.value}, ${sVal.value}%, ${lVal.value}%)`;
      hexInput.value = hslToRgb(hVal.value, sVal.value, lVal.value);
    };
    sVal.oninput = () => {
      hslValues[1] = sVal.value;
      hslLabel.value = swatch.style.background = sample.style.background = `hsl(${hVal.value}, ${sVal.value}%, ${lVal.value}%)`;
      hexInput.value = hslToRgb(hVal.value, sVal.value, lVal.value);
    };
    lVal.oninput = () => {
      hslValues[2] = lVal.value;
      hslLabel.value = swatch.style.background = sample.style.background = `hsl(${hVal.value}, ${sVal.value}%, ${lVal.value}%)`;
      hexInput.value = hslToRgb(hVal.value, sVal.value, lVal.value);
    };
  }
}
