const btnMarche = document.getElementById("demarrage")
const btnSnooze = document.getElementById("snooze")
const btnStop = document.getElementById("stop")
const son = document.getElementById("son-reveil")
const selectionDuree = document.getElementById("selection-reveil")
const paragraphe = document.querySelector("p")

btnMarche.addEventListener("click", marche)
btnStop.addEventListener("click", arret)
btnSnooze.addEventListener("click", report)

const indication = "Appuyez sur snooze pour retarder ou stop pour arrêter"
const phraseArret = "Alarme arrêtée"
const phraseReport = "Alarme repoussée de 5 minutes"
const phraseDemarrage = "Alarme programée avec succès"
const fausseSaisie = "Veuillez saisir une valeur"

let timer = null
let intervale = null

function marche(){
    paragraphe.textContent = phraseDemarrage
    const duree = selectionDuree.value 
    timer = setTimeout(()=>{
        intervale = setInterval(()=>{
            son.currentTime = 0
            son.play()
            paragraphe.textContent = indication
        }, 1000)
    }, duree * 60000)
    if(duree === ""){
        paragraphe.textContent = fausseSaisie
    }
}

function reset(){
    son.pause()
    son.currentTime = 0
    
    if(timer){
        clearTimeout(timer)
    }

    if(intervale){
        clearInterval(intervale)
    }
    timer = null 
    intervale = null
}

function arret(){
    paragraphe.textContent = phraseArret
    reset()
}

function report(){
    paragraphe.textContent = phraseReport
    reset()
    timer = setTimeout(()=>{
        intervale = setInterval(()=>{
            son.currentTime = 0
            son.play()
        }, 1000)
    }, 5 * 60000)
}
