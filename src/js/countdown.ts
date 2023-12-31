import startConfetti from './confetti'
import startFireworks from './firework'
import startConfetti2 from './confetti-2'

const $element = (selector: string): HTMLElement => document.querySelector(selector)!
const $audioElement = (selector: string): HTMLAudioElement => document.querySelector(selector)!

const $button = $element('#initCount')
const $count = $element('#count')
const $contentNewYear = $element('.happy-new-year')
const $audioYipee = $audioElement('#audio')
const $audioCount = $audioElement('#audio-count')
const $audioFireworks = $audioElement('#audio-fireworks')
const $audioMusic = $audioElement('#audio-music')

// console.log($count)

$button.addEventListener('click', () => {

  $button.classList.add('hide')
  $count.classList.add('show')

  $audioCount.play()
    .then(() => {
      $audioCount.loop = true
      $audioCount.volume = 0.7
    })
    .catch((err) => {
      console.log(err)
    })

  let count = 10
  $count.innerHTML = count.toString()
  const timer = setInterval(() => {
    if (count > 0) {
      $count.innerHTML = (--count).toString()
    } else {
      clearInterval(timer)
      setNewYear()
    }
  }, 1000)
})

function setNewYear (): void {
  
  $audioCount.pause()
  $count.classList.remove('show')
  $contentNewYear.classList.add('show')

  startConfetti('confetti').render()
  startFireworks('fireworks').start()
  const confetti2Interval = setInterval(() => {
    startConfetti2()
      .then(() => {
        console.log('confetti 2')
      })
      .catch((err) => {
        console.log(err)
      })
  }, 1000)

  $audioFireworks.play()
    .then(() => {
      $audioFireworks.loop = true
      $audioFireworks.volume = 0.5
    })
    .catch((err) => {
      console.log(err)
    })

  $audioMusic.play()
    .then(() => {
      $audioMusic.volume = 0.5
      $audioMusic.currentTime = 18
    })
    .catch((err) => {
      console.log(err)
    })

  $audioYipee.play()
    .then(() => {
      $audioYipee.loop = true
    })
    .catch((err) => {
      console.log(err)
    })
}
