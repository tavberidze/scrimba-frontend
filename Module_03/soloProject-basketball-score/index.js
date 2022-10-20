let homeScore = 0;
let guestScore = 0;

const homeEl = document.getElementById('home-el')
const guestEl = document.getElementById('guest-el')

// home button elements

let homeOnePoint = document.getElementById('home-one')
let homeTwoPoint = document.getElementById('home-two')
let homeThreePoint = document.getElementById('home-three')

// guest button elements

let guestOnePoint = document.getElementById('guest-one')
let guestTwoPoint = document.getElementById('guest-two')
let guestThreePoint = document.getElementById('guest-three')

// home button functions

homeOnePoint.addEventListener('click', function() {
    homeScore += 1;
    homeEl.textContent = homeScore;
})

homeTwoPoint.addEventListener('click', function() {
    homeScore += 2;
    homeEl.textContent = homeScore;
})

homeThreePoint.addEventListener('click', function() {
    homeScore += 3;
    homeEl.textContent = homeScore;
})

// guest button functions

guestOnePoint.addEventListener('click', function() {
    guestScore += 1;
    guestEl.textContent = guestScore;
})

guestTwoPoint.addEventListener('click', function() {
    guestScore += 2;
    guestEl.textContent = guestScore;
})

guestThreePoint.addEventListener('click', function() {
    guestScore += 3;
    guestEl.textContent = guestScore;
})
