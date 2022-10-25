// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

const convertBtn = document.getElementById('convert-btn')
const inputEl = document.getElementById('input-el')
let outputOne = document.getElementById('output-one')
let outputTwo = document.getElementById('output-two')
let outputThree = document.getElementById('output-three')


convertBtn.addEventListener('click', function() {
    outputOne.textContent = `${inputEl.value} meters = ${(inputEl.value*3.281).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value/3.281).toFixed(3)} meters`
    outputTwo.textContent = `${inputEl.value} liters = ${(inputEl.value*0.264).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value/0.264).toFixed(3)} liters`
    outputThree.textContent = `${inputEl.value} kilos = ${(inputEl.value*2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value/2.204).toFixed(3)} kilos`
})
