"use strict"

const bill = document.getElementById("bill");
const number = document.getElementById("number");
const tipBox = document.querySelectorAll("div.tip-box");
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const reset = document.querySelector(".reset-button");
const zero = document.querySelector(".zero");
const custom = document.querySelector(".custom-box");



function get() {
    if (bill.value == "") {
        console.log("Input a number")
    }
    else if(number.value !== "") {
        reset.classList.remove("opa");
        tipclick();
        // console.log(bill.value)
        console.log("cant calculate")
        // calculate()
    }
}

function set() {
    if (number.value == "" || number.value == "0") {
        // console.log("Input a number")
        zero.classList.remove("hidden")
        number.classList.add("red-border")

    }
    else if(bill.value !== ""){
        tipclick();
        // console.log(number.value)
        // calculate()
    }
}

// function calculate() {
// const totalBill = bill.value / number.value;
// const totalAmount = tipBill + totalBill
// .textContent = `${totalAmount}.00`
console.log(tipBox.length)
// }

const tipclick = function () {
    for (let i = 0; i < tipBox.length; i++) {

        tipBox[i].addEventListener("click", () => {
            const perBill = bill.value / number.value;
            // console.log(perBill);
            const tipBill = (tipBox[i].childNodes[0].textContent / 100) * perBill;
            console.log(tipBox[i].childNodes[0].textContent)
            tip.textContent = tipBill.toFixed(2);
            // console.log(tipBox[i].textContent.slice(0,2))
            // console.log(tipBill);
            // console.log(tipBox[i].textContent);
            const totalBill = (perBill + tipBill).toFixed(2);
            total.textContent = totalBill
            // console.log(totalBill)

        })
    }
}

function cut() {
    console.log(custom.value)
    
}

reset.addEventListener("click", () => {
    bill.value = 0;
    number.value = 0;
    total.textContent = "0.00";
    tip.textContent = "0.00";
    zero.classList.remove("zero")
})


