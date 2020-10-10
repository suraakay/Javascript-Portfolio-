const background = document.querySelector('body')
const button = document.querySelector('.change')
const code = document.querySelector('.color-code')
const suprise = document.querySelector('.suprise')


const hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
let clickTimes = 0
let isTired = false
let interval

function changeColor() {
    let colorCode = []
    if (clickTimes > 5) {
        suprise.classList.add('open')
    }
    for (let i = 0; i < 6; i++) {
        let number = randomNumber()
        colorCode.push(hexDigits[number])
    }
    let cCode = colorCode.join('')
    code.textContent = `#${cCode}`
    background.style.backgroundColor = `#${cCode}`
    clickTimes++
}

function auto() {
    clearInterval(interval)
    interval = setInterval(() => {
        changeColor()
    }, 300);
}


function randomNumber() {
    return Math.floor(Math.random() * hexDigits.length)
}



button.addEventListener('click', changeColor)
suprise.addEventListener('click', () => {
    isTired = true
    auto()
})







