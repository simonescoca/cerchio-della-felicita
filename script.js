const cake = document.getElementById("cake");
const okButton = document.getElementById("ok-button");
const happiness = document.getElementById("happiness");

document.addEventListener("DOMContentLoaded", updateCake);
okButton.addEventListener("click", updateCake);

function updateCake() {
    const red = document.getElementById("red").value;
    const orange = document.getElementById("orange").value;
    const yellow = document.getElementById("yellow").value;
    const green = document.getElementById("green").value;
    const indigo = document.getElementById("indigo").value;
    const blue = document.getElementById("blue").value;

    const indexesSTR = [red, orange, yellow, green, indigo, blue];
    const percentages = indexesSTR.map((e) => parseInt(e) * (5 / 3));

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