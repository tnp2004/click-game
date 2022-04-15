const boxGame = document.querySelector('.game')
const reset = document.querySelector('.reset-btn')


const random = (limitRd) => {
    return Math.floor(Math.random() * limitRd)
}

let arrFirstSet = []
let arrSecondSet = []

const arrNumber = (numstart, numEnd, arrAdd) => {
    for (let j = numstart ; j <= numEnd; j++) {
        arrAdd.push(j)
    }    
}



const createElement = () => {
    arrNumber(1, 25, arrFirstSet)
    for( let i = 1; i <= 25; i++ ) {
        let rdNumber = random(arrFirstSet.length)
        const buttonGame = document.createElement('div')
        buttonGame.classList.add('element')
        buttonGame.addEventListener('click', secondSet)
        buttonGame.innerHTML = arrFirstSet[rdNumber]
        arrFirstSet.splice(rdNumber, 1)
        boxGame.append(buttonGame)
    }
}

const secFunc = () => {
    seconds++
    secondAdd.innerHTML = `${seconds}.`
    tens = 0
}

const tenFunc = () => {
    tens++
    tenAdd.innerHTML = `${tens}s`
}

let checkNumber = 1
let count = 0

const secondAdd = document.querySelector('.second')
const tenAdd = document.querySelector('.tens')
let seconds = 0
let tens = 0

let secInterval
let tenInterval

let round = 1
const timer = () => {
    if (round === 1) {
        round++
        secInterval = setInterval(secFunc, 1000)
        tenInterval = setInterval(tenFunc, 100)
    }
}

arrNumber(26, 50, arrSecondSet)
const secondSet = (event) => {
    let btn = event.target
    if (Number(btn.innerHTML) == checkNumber) {
        timer()
        count++
        if (Number(btn.innerHTML) >= 26) {
            btn.style.opacity = '0'
        }
        btn.style.backgroundColor = '#557B83'
        checkNumber++
        let rdNumber2 = random(arrSecondSet.length)
        btn.innerHTML = arrSecondSet[rdNumber2]
        arrSecondSet.splice(rdNumber2, 1)
    }
    if (count == 50) {
        document.querySelector('.img-end').style.display = 'block'
        clearInterval(secInterval)
        clearInterval(tenInterval)
    }
}

reset.addEventListener('click', () => {location.reload()})
createElement()
