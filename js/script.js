// Show time

setInterval(()=>{
    let time = new Date()
    let sec = time.getSeconds()
    let min = time.getMinutes()
    let hour = time.getHours()

    let hourBox = document.querySelector('.hour')
    let minBox = document.querySelector('.min')
    let secBox = document.querySelector('.sec')

    let colorBox = document.querySelector('.color')
    

    let body = document.querySelector('body')

    if (sec < 10 || min < 10 || hour < 10) {
        sec < 10? sec = `0${sec}` : sec = `${sec}`
        min < 10? min = `0${min}` : min = `${min}`
        hour < 10? hour = `0${hour}` : hour = `${hour}`
        body.style.backgroundColor = `#${hour}${min}${sec}`
        secBox.innerText = `${sec}`
        minBox.innerText = `${min}:`
        hourBox.innerText = `${hour}:`
        colorBox.innerText = `#${hour}${min}${sec}`
    } else {
        body.style.backgroundColor = `#${hour}${min}${sec}`
        secBox.innerText = `${sec}`
        minBox.innerText = `${min}:`
        hourBox.innerText = `${hour}:`
        colorBox.innerText = `#${hour}${min}${sec}`
    }
}, 1000)

//Show-hide menu

let buttonShow = document.querySelector('.button-1')
let buttonHide = document.querySelector('.button-2')
let menu = document.querySelector('.menu')

buttonShow.addEventListener('click', ()=>{
    menu.classList.add('show-menu')
    buttonShow.classList.add('button-1__hide')
})
buttonHide.addEventListener('click',()=>{
    menu.classList.remove('show-menu')
    buttonShow.classList.remove('button-1__hide')
})

//Music

var sound = new Howl({
    src: ['https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3'],
    volume: 0.5,
    onend: function () {
      alert('Finished!');
    }
  });
  sound.play()


