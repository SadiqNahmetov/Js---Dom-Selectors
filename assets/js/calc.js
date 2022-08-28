let result = document.querySelector(".result p");
let add = document.querySelector(".operators .add");
let subtract = document.querySelector(".operators .subtract");
let multiply = document.querySelector(".operators .multiply");
let divide = document.querySelector(".operators .divide");
let num1 = document.querySelector(".nums .num1");
let num2 = document.querySelector(".nums .num2");


function onlyNumbers(str) {
    return /^-?\d+(?:[.,]\d*?)?$/.test(str)
};

add.addEventListener("click", function () {
    debugger
    let demoResult = parseFloat(num1.value) + parseFloat(num2.value);
    if (onlyNumbers(demoResult)) {
        result.innerHTML = demoResult;
        
    }
    else {
        alert("Add correct input")
    }
})

subtract.addEventListener("click", function () {
    let demoResult = parseFloat(num1.value) - parseFloat(num2.value);
    if (onlyNumbers(demoResult)) {
        result.innerHTML = demoResult;
       
    }
    else {
        alert("Add correct input")
    }
})

multiply.addEventListener("click", function () {
    let demoResult = parseFloat(num1.value) * parseFloat(num2.value);
    if (onlyNumbers(demoResult)) {
        result.innerHTML = demoResult;
        
    }
    else {
        alert("Add correct input")
    }
})

divide.addEventListener("click", function () {
    if (num2.value != 0) {
        let demoResult = parseFloat(num1.value) / parseFloat(num2.value);
        if (onlyNumbers(demoResult)) {
            result.innerHTML = demoResult;
           
        }
        else {
            alert("Add correct input")
        }
    }
    else {
        alert("0-a bolme var??")
    }
})