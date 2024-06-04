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


// ! FUNCTIONS > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >
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
    happiness.innerText = `felicità ${Math.round(p[0] + p[1] + p[2] + p[3] + p[4] + p[5])}%`;
}

function showInvalid() {
    cake.setAttribute("style", "background-color: red;");
    happiness.innerText = "valori non validi";
}

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