// global variables
// let score = 0
// let sequence = []
// let sequenceActive = []

// inputs
const first = document.querySelector('#aqua')
const second = document.querySelector('#aquamarine')
const third = document.querySelector('#cyan')
const fourth = document.querySelector('#skyblue')
const sequences = [first, second, third, fourth]
const activeGame = (circle) => {
  return new Promise((resolve, reject) => {
    circle.className += 'active'
    setTimeout(() => {
      circle.className = circle.className.replace('active', '')
      resolve()
    }, 1000)
  })
}
const rounds = async () => {
  for (const circles of sequences) {
    await activeGame(circles)
  }
}
rounds()
// const startButton = document.querySelector('#start_button')
// const endButton = document.querySelector('#end')
// // outputs
// const scoreDisplay = document.querySelector('#score')

// const clickCircle = (i) => {
//   console.log(i)
// }
// circles.forEach((circle, i) => {
//   circle.addEventListener('click', () => clickCircle(i))
// })
// function randomCircle() {
//   const blinks = ['#one', '#two', '#three', '#four']
//   const random = blinks[Math.floor(Math.random() * 4)]
//   return random
// }
// function round() {
//   score += 1
//   const nextSequence = [...sequence]
//   nextSequence.push(randomCircle())
// }
// const gameStart = () => {
//   startButton.classList.toggle('hidden')
//   endButton.textContent = 'keep patience'
// }
// startButton.addEventListener('click', gameStart)
// scoreDisplay.textContent = score

// google w3 school random function, function start game to start the game and endgame to endgame, function clickcircle, picknew to select the circle. resetgame function, picknew function inside the startgame.
// global variable- score, active, timer, pace, rounds.
