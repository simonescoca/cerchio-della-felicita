const cake = document.getElementById("cake");
const okButton = document.getElementById("ok-button");
const happiness = document.getElementById("happiness");

document.addEventListener("DOMContentLoaded", updateCake);
okButton.addEventListener("click", updateCake);

function updateCake() {
    const red = parseFloat(document.getElementById("red").value) * (5 / 3);
    const orange = parseFloat(document.getElementById("orange").value) * (5 / 3);
    const yellow = parseFloat(document.getElementById("yellow").value) * (5 / 3);
    const green = parseFloat(document.getElementById("green").value) * (5 / 3);
    const indigo = parseFloat(document.getElementById("indigo").value) * (5 / 3);
    const blue = parseFloat(document.getElementById("blue").value) * (5 / 3);

    cake.setAttribute("style",
        `background-image: conic-gradient(
            red ${red}%,
            orange ${red}%, orange ${red + orange}%,
            yellow ${red + orange}%, yellow ${red + orange + yellow}%,
            green ${red + orange + yellow}%, green ${red + orange + yellow + green}%,
            indigo ${red + orange + yellow + green}%, indigo ${red + orange + yellow + green + indigo}%,
            blue ${red + orange + yellow + green + indigo}%, blue ${red + orange + yellow + green + indigo + blue}%,
            black ${red + orange + yellow + green + indigo + blue}%
        );`
    );

    happiness.innerText = `felicità ${red + orange + yellow + green + indigo + blue}%`
}