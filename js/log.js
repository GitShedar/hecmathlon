import hECMAthlon from "./main.js"

const _hECMAthlon = new hECMAthlon();

function init() {
    let maxValueBtn = document.querySelector(".maxValue__btn");
    let greaterThanBtn = document.querySelector(".greaterThan__btn");
    let fizzBuzzBtn = document.querySelector(".fizzBuzz__btn");

    let maxValueInput = document.querySelector(".maxValue__input");
    let greaterThanInput = document.querySelector(".greaterThan__input");
    let fizzBuzzInput = document.querySelector(".fizzBuzz__input");

    let maxValueRoot = document.querySelector(".maxValue__container");
    let greaterThanRoot = document.querySelector(".greaterThan__container");
    let fizzBuzzRoot = document.querySelector(".fizzBuzz__container");

    maxValueBtn.addEventListener('click', () => {
        let maxValue = getOutput(_hECMAthlon.getMaxValue(maxValueInput.value));
        logResult(maxValueRoot, maxValue);
    });
    greaterThanBtn.addEventListener('click', () => {
        let greaterValues = getOutput(_hECMAthlon.getGreaterThan(greaterThanInput.value));
        logResult(greaterThanRoot, greaterValues);
    });
    fizzBuzzBtn.addEventListener('click', () => {
        let result = getOutput(_hECMAthlon.fizzBuzz(fizzBuzzInput.value));
        logResult(fizzBuzzRoot, result);
    });
}

function getOutput(output) {
    return ["The function starts", ...output, "The function ends"]
    /* let returnValue = ["The function starts"];
    for(let i = 0; i < output.length; i++){
        returnValue.push(output[i]);
    }
    returnValue.push("The function ends");
    return returnValue; */
}

function logResult(place, values){
    while(place.firstChild) {
        place.firstChild.remove();
    }
    for (let j = 0; j < values.length; j++) {
        place.insertAdjacentHTML("beforeend", "<div>" + values[j] + "</div>");
    }
}

init();
