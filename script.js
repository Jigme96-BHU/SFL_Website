const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => { 
        removeactiveclasses()
        panel.classList.add('active')
    })
})

function removeactiveclasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })

}

const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
}) 

  
/*const container = document.querySelector('.container')

let load = 0

let int = setInterval(blurring, 10)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  container.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}*/

const menu = document.querySelectorAll('.menu')


function hoved() {
    menu.forEach(menu => {
        menu.classList.add('active')
    })
}

function hove() {
    menu.forEach(menu => {
        menu.classList.remove('active')
    })
}



const boxes = document.querySelectorAll('.box')
const videos = document.querySelectorAll('.wvid')

function checkBoxes() {
    boxes.forEach(box => {
        box.classList.add('show')
    })   
    videos.forEach(wvid => {
        wvid.classList.add('show')
    })
}


window.onload = checkBoxes

const summary = document.querySelectorAll('.summary')
const pri = document.querySelectorAll('.pri')
const sec = document.querySelectorAll('.sec')
const news = document.querySelectorAll('.newevent')
var tall = document.summary.height

function hovrev() {
    pri.forEach(pri => {
        pri.classList.add('reveal')
    })       
}

function hovaway() {
    pri.forEach(pri => {
        pri.classList.remove('reveal')
    })       
}


function hovin() {
    sec.forEach(sec => {
        sec.classList.add('reveal')
    })       
}

function hovout() {
    sec.forEach(sec => {
        sec.classList.remove('reveal')
    })       
}