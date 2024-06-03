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
document.addEventListener("DOMContentLoaded", updateCake);
inputs.forEach(input => input.addEventListener("input", updateCake));


function updateCake() {
    const percentages = [];
    inputs.forEach(input => percentages.push(parseInt(input.value) * (5 / 3)));

    cake.setAttribute("style",
        `background-image: conic-gradient(
            red ${percentages[0]}%,
            orange ${percentages[0]}%, orange ${percentages[0] + percentages[1]}%,
            yellow ${percentages[0] + percentages[1]}%, yellow ${percentages[0] + percentages[1] + percentages[2]}%,
            green ${percentages[0] + percentages[1] + percentages[2]}%, green ${percentages[0] + percentages[1] + percentages[2] + percentages[3]}%,
            indigo ${percentages[0] + percentages[1] + percentages[2] + percentages[3]}%, indigo ${percentages[0] + percentages[1] + percentages[2] + percentages[3] + percentages[4]}%,
            blue ${percentages[0] + percentages[1] + percentages[2] + percentages[3] + percentages[4]}%, blue ${percentages[0] + percentages[1] + percentages[2] + percentages[3] + percentages[4] + percentages[5]}%,
            black ${percentages[0] + percentages[1] + percentages[2] + percentages[3] + percentages[4] + percentages[5]}%
        );`
    );
    happiness.innerText = `felicità ${Math.round(percentages[0] + percentages[1] + percentages[2] + percentages[3] + percentages[4] + percentages[5])}%`
}