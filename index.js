let cards=[]
let isALive = true
let hasblackJack = false
let messageEl= document.getElementById('message-el')
let cardsEl = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')

function randomNumber() {
    let randomNumber = Math.floor(Math.random()* 10 + 1)
    return randomNumber
}

function renderGame(){
    if (cards.length === 0){
        messageEl.textContent = " No cards is drawn!"
        return 
    }
    let sum = 0
    for(let i= 0; i < cards.length; i++){
         sum += cards[i]
    }
    
    sumEl.textContent = "sum : " + sum
    

    if(sum <= 20){
        messageEl.textContent = "Do you wanna draw again?"
    }
    else if(sum === 21){
        messageEl.textContent = "BlackJack!!"
        hasblackjack = true
    }
    else{
        messageEl.textContent = "You are out of game"
        isALive = false
    }

}

function newGame() {
    let firstCard = randomNumber()
    let secondCard =  randomNumber()
    cards.push(firstCard)
    cards.push(secondCard)
    cardsEl.textContent = "cards : "
   for(let i=0 ; i < cards.length;i++){
    cardsEl.textContent +=  cards[i] + ", "
   }
}

function clearGame() {
    cards.length = 0
    cardsEl.textContent = "cards:"
    sumEl.textContent = "sum :"
}
function drawCard(){
    newCard = randomNumber()
    cards.push(newCard)
    cardsEl.textContent = "cards : "
   for(let i=0 ; i < cards.length;i++){
    cardsEl.textContent +=  cards[i] + ", "
   }
}