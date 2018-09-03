setInterval(setdate, 1000)

let sechand = document.querySelector(".sec")
let minhand = document.querySelector(".min")
let hurhand = document.querySelector(".hour")
let audio = document.createElement("audio")
audio.src="tick.mp3"
let taudio = document.createElement("audio")
taudio.src = "twelve.mp3"

function setdate(){
  let date = new Date()
  let sec = date.getSeconds()
  let min = date.getMinutes()
  let hour = date.getHours()
  let secdeg = ((sec/60)*360) + 90
  let mindeg = ((min/60)*360) + 90
  let hurdeg = ((hour/12)*360) + 90
  if(hour == 12){
    taudio.play()
  }
  sechand.style.transform = "rotate(" + secdeg + "deg)"
  audio.play()
  minhand.style.transform = "rotate(" + mindeg + "deg)"
  hurhand.style.transform = "rotate(" + hurdeg + "deg)"
  console.log(secdeg, hour)
}
