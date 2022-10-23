let convertBtn = document.getElementById("btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("lengthEl")
let volumeEl = document.getElementById("volumeEl")
let massEl = document.getElementById("massEl")

const meterToFeet =  3.281
const feetToMeter =  0.3048
const literToGallon =  0.264
const gallonToLiter = 3.78541
const kiloToPound =  2.204
const poundToKilo = 0.453592

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.innerHTML = `${baseValue} meter = ${baseValue * meterToFeet.toFixed(3)} feet
    | ${baseValue} feet = ${baseValue * feetToMeter.toFixed(3)} meter`
    volumeEl.innerHTML = `${baseValue} liters = ${baseValue * literToGallon.toFixed(3)} gallon
    | ${baseValue} gallon = ${baseValue * gallonToLiter.toFixed(3)} liters`
    massEl.innerHTML = `${baseValue} kilograms = ${baseValue * kiloToPound.toFixed(3)} pound
    | ${baseValue} pounds = ${baseValue * poundToKilo.toFixed(3)} kilograms` 
})