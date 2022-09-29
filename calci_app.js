(function () {
    let display = document.querySelector(".display");
    let buttons = document.querySelectorAll(".btn");
    let equal = document.querySelector(".equal-btn");
    let clear = document.querySelector(".clear-btn");

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            display.value += value;
        })
    })
    equal.addEventListener('click', function (e) {
        if (display.value === "") {
            display.value = "";
        }
        else {
            let answer = eval(display.value);
            display.value = answer;
        }
    })
    clear.addEventListener('click', function (e) {
        display.value = "";
    })
})();
