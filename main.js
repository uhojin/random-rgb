let randR = 0;
let randG = 0;
let randB = 0;

const randomizeColor = () => {
    randR = Math.random();
    randG = Math.random();
    randB = Math.random();

    randR = Math.floor(randR * 255);
    randG = Math.floor(randG * 255);
    randB = Math.floor(randB * 255);
}

const colorContainer = document.getElementById("mainContainer");
const createPixels = () => {
    for (let i = 0; i <=1599; i++) {
        randomizeColor();
        colorContainer.innerHTML = `${colorContainer.innerHTML} <div style="background-color:rgb(${randR}, ${randG}, ${randB});" class="pixel" id="pixel${i}"></div>`;
    }
};

const pixels = document.getElementsByClassName("pixel");

createPixels();
