const cake = document.getElementById("cake");
const happiness = document.getElementById("happiness");

const redInput = document.getElementById("red");
const orangeInput = document.getElementById("orange");
const yellowInput = document.getElementById("yellow");
const greenInput = document.getElementById("green");
const indigoInput = document.getElementById("indigo");
const blueInput = document.getElementById("blue");

const inputs = [redInput, orangeInput, yellowInput, greenInput, indigoInput, blueInput];

// ! EVENT LISTENERS > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >
document.addEventListener("DOMContentLoaded", () => {
    if(checkInputValues()) updateCake();
    else showInvalid();
});

inputs.forEach(input => input.addEventListener("input", () => {
    if(checkInputValues()) updateCake();
    else showInvalid();
}));

inputs.forEach(input => input.addEventListener("keydown", (event) => {
    keyboardArrows(input, event);
}));


// ! FUNCTIONS > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >
/**
 * Reads inputs' values, turns them into ints and calculates the percentage of happiness from each input value,
 * then colours the cake.
 */
function updateCake() {
    const p = []; // percentages
    inputs.forEach(input => p.push(parseInt(input.value) * (5 / 3)));

    cake.setAttribute("style",
        `background-image: conic-gradient(
            red ${p[0]}%,
            orange ${p[0]}%, orange ${p[0] + p[1]}%,
            yellow ${p[0] + p[1]}%, yellow ${p[0] + p[1] + p[2]}%,
            green ${p[0] + p[1] + p[2]}%, green ${p[0] + p[1] + p[2] + p[3]}%,
            indigo ${p[0] + p[1] + p[2] + p[3]}%, indigo ${p[0] + p[1] + p[2] + p[3] + p[4]}%,
            blue ${p[0] + p[1] + p[2] + p[3] + p[4]}%, blue ${p[0] + p[1] + p[2] + p[3] + p[4] + p[5]}%,
            #28B8FF ${p[0] + p[1] + p[2] + p[3] + p[4] + p[5]}%
        );`
    );
    happiness.classList.remove("fs-4");
    happiness.classList.add("fs-2");
    happiness.innerText = `felicità ${Math.round(p[0] + p[1] + p[2] + p[3] + p[4] + p[5])}%`;
}

/**
 * This function is triggered when there's at least one input with an unacceptable value.
 * It handles clearing the cake and sending a warning to the user.
 */
function showInvalid() {
    cake.setAttribute("style", "background-color: #28B8FF;");
    happiness.classList.remove("fs-2");
    happiness.classList.add("fs-4");
    happiness.innerText = "inserire valori da 0 a 10";
}

/**
 * This function returns "true" if all inputs' values are acceptable, "false" if even only one isn't.
 * @returns {boolean}
 */
function checkInputValues() {
    let valid = false;
    let validValues = 0;
    const availableValues = [];
    for(let i = 0; i < 11; i++) availableValues.push(i);

    inputs.forEach((input) => {
        if(availableValues.includes(parseInt(input.value))) validValues++;
    });

    if (validValues === inputs.length) valid = true;
    return valid;
}

/**
 * This function is called by the keydown event listeners when one input is on focus. If the event key is a keyboard arrow then
 * this function provides to increment or decrement by 1 the current onfocus input's value.
 * If the input's value isNaN it overwrites the value to "0".
 * @param {Object} input the trigger node (the input on focus).
 * @param {Object} e the event object form the event listener.
 */
function keyboardArrows(input, e) {
    let availableValues = [];
    for(let i = 0; i < 11; i++) availableValues.push(i);
    availableValues = availableValues.map(e => String(e));

    if(availableValues.includes(input.value)) {

        if(e.key === "ArrowUp" || e.key === "ArrowRight") {
            if(parseInt(input.value) < 10) {
                input.value = String(parseInt(input.value) + 1);
            } else if (parseInt(input.value) === 10) {
                input.value = "0";
            }
        }
        
        if(e.key === "ArrowDown" || e.key === "ArrowLeft") {
            if(parseInt(input.value) > 0) {
                input.value = String(parseInt(input.value) - 1);
            } else if (parseInt(input.value) === 0) {
                input.value = "10";
            }
        }

    } else {
        
        if(e.key === "ArrowUp" || e.key === "ArrowRight") {
            input.value = "0";
            if(parseInt(input.value) < 10) {
                input.value = String(parseInt(input.value) + 1);
            } else if (parseInt(input.value) === 10) {
                input.value = "0";
            }
        }
        
        if(e.key === "ArrowDown" || e.key === "ArrowLeft") {
            input.value = "0";
            if(parseInt(input.value) > 0) {
                input.value = String(parseInt(input.value) - 1);
            } else if (parseInt(input.value) === 0) {
                input.value = "10";
            }
        }
    }

    if(checkInputValues()) updateCake();
}