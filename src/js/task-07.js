const fontInput = document.querySelector("#font-size-control");
const fontText = document.querySelector("#text");


fontInput.addEventListener("input", event => {
    fontText.style.fontSize = `${fontInput.value}px`
});