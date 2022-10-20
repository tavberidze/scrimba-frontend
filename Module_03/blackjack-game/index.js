let player = {
    name: 'Per',
    chips: "341$"
}
let isAlive = false
let hasBlackjack = false
let sum = 0
let cards = []
let message = ''


// DOM elements

messageEl = document.querySelector('#message-el')
cardsEl = document.querySelector('#cards-el')
sumEl = document.querySelector('#sum-el')
playerEl = document.querySelector('#player-el')


// buttons

startGame = document.querySelector('#start-game')
newCard = document.querySelector('#new-card')

// functions
function randomCard() {
    let random = Math.floor( Math.random() * 13 ) + 1
    if (random > 10) {
        return 11
    } else if (random === 11) {
        return 1
    } else {
        return random
    }
}


startGame.addEventListener('click', function(){
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
})

newCard.addEventListener('click', function() {
    if(isAlive === true && hasBlackjack === false) {
        let card = randomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
})

function renderGame() {
    cardsEl.textContent = 'Cards: '
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + ' '
    }
    
    sumEl.textContent = 'Sum: ' + sum
    if(sum < 21) {
        message = 'Do you want to draw another card?'
        isAlive = true
    } else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


playerEl.textContent = player.name + ': ' + player.chips