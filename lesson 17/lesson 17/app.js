let cards = document.querySelectorAll(".card")
let fronts = document.querySelectorAll(".front")
let backs = document.querySelectorAll(".back")
let counter = 0
let remember = null
let remember1 = null
let juftlik = 0
let alone=0
let win = document.querySelector(".youwin")
let heart1 = document.querySelector(".heart1")
let heart2 = document.querySelector(".heart2")
let heart3 = document.querySelector(".heart3")
let heart4 = document.querySelector(".heart")
let gameover=document.querySelector(".gameover")
let audio=new Audio('mus_badnote1.mp3')
let audios=new Audio('0961f580f9e00da.mp3')
let audioss=new Audio('fanfare.mp3')
let audi=new Audio('torjestvennyi-zvuk-pobedy-4.mp3')
for (let i = 0; i < cards.length; i++) {
    cards[i].style.order = parseInt(Math.random() * 16)
    backs[i].classList.add("orqa")
    fronts[i].classList.add("old")
    setTimeout(begin, 2000)

}
function begin() {
    for (let i = 0; i < cards.length; i++) {
        backs[i].classList.remove("orqa")
        fronts[i].classList.remove("old")
    }
}
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
        counter++
        backs[i].classList.add("orqa")
        fronts[i].classList.add("old")
        if (counter == 1) {
            remember = i
        }
        if (counter == 2) {
            remember1 = i

        }
        if (counter == 2) {
            if (backs[remember].children[0].src == backs[remember1].children[0].src) {
                juftlik++
                counter = 0
                console.log('hello')
                if(juftlik==1){
                    audioss.play()
                }
                if(juftlik==2){
                    audioss.play()
                }
                if(juftlik==3){
                    audioss.play()
                }
                if(juftlik==4){
                    audioss.play()
                }
                if(juftlik==5){
                    audioss.play()
                }
                if(juftlik==6){
                    audioss.play()
                }
                if(juftlik==7){
                    audioss.play()
                }
                if (juftlik === 8) {
                    win.style.display = "block"
                    audi.play()
                }


            } else {
                alone++
                if(alone==1){
                    heart1.style.display="none"
                    audio.play()
                }
                if(alone==2){
                    heart2.style.display="none"
                    audio.play()
                }
                if(alone==3){
                    heart3.style.display="none"
                    audio.play()
                }
                if(alone==4){
                    heart4.style.display="none"
                    gameover.style.display="block"
                    audios.play()
                }
                
                
                setTimeout(goback, 1000)
                counter = 0
            }
        }
    })
}
function goback() {

    backs[remember].classList.remove("orqa")
    fronts[remember].classList.remove("old")
    backs[remember1].classList.remove("orqa")
    fronts[remember1].classList.remove("old")

}