const increaseButton = document.querySelector(".increase");
const decreaseButton = document.querySelector(".decrease");
const resetButton = document.querySelector(".reset");
const counter = document.querySelector(".counter");


function increase (){
    counter.innerText ++;
};
function decrease () {
    counter.innerText --;
}
function reset () {
    counter.innerText = 0;
}
increaseButton.addEventListener("click", increase);
decreaseButton.addEventListener("click", decrease);
resetButton.addEventListener("click", reset);