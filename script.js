// Get Data
const timer = document.getElementById('timer')
const box = document.getElementById('box')
const giftCard = document.getElementById('gift-card')
const stars = document.getElementById('stars')

const happyBirthday = new Audio('assets/audio/happy_birthday.mp3')
const poem = new Audio('assets/audio/poem.mp3')
const audioStars = new Audio('assets/audio/sparkle.mp3')


// Ribbon Click
let i = 1
function ribbonClick() {
  if (i < 3) {
    i++
  } else {
    openBox()
    happyBirthday.play()

    setTimeout(function() {
      openGiftCard()
      poem.play()
    }, 84000)
  }
}


// Open Box
function openBox() {
  box.style.top = '-100%'
}


// Gift Card
function openGiftCard() {
  giftCard.style.display = 'block'
  setTimeout(function() {
    giftCard.style.opacity = '1'
  }, 1)
}

function closeGiftCard() {
  giftCard.style.opacity = '0'
  setTimeout(function() {
    giftCard.style.display = 'none'
  }, 500)
}


// Move Star
createStars()
function moveStars() {
  for (let i = 0; i < stars.children.length; i++) {
    stars.children[i].classList.add('star-up')
  }

  audioStars.play()

  setTimeout(function() {
    destroyStars()
    createStars()
  }, 5000)
}


// Create Star
function createStars() {
  for (let i = 1; i <= 100; i++) {
    const star = document.createElement('i')
    star.className = 'fas fa-star fa-2x'

    star.style.textShadow = 'var(--shadow-3d)'
    star.style.position = 'absolute'
    star.style.bottom = '-50%'

    const randomPosition = getRandomArbitrary(0, 50)
    star.style.left = (Math.round(randomPosition) * 2) + '%'

    const randomDuration = getRandomArbitrary(1, 6)
    const fixedDuration = Math.round(randomDuration * 100) / 100
    star.style.animationDuration = fixedDuration + 's'

    stars.appendChild(star)
  }
}


// Destroy Stars
function destroyStars() {
  stars.innerHTML = '';
}


// Randomizer
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


// ArrayTotal
function timeTotal(time) {
  return (time[0] * 360) + (time[1] * 60) + time[2]
}