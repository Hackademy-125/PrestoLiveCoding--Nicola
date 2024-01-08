// NAVBAR

let navbar = document.querySelector(".navbar")

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 0){
        navbar.classList.add("nav-custom")
    }else{
        navbar.classList.remove("nav-custom")
    }

})


//SEZIONE NUMERI

let numUtenti = document.querySelector("#numUtenti")
let numProdotti = document.querySelector("#numProdotti")
let numMessaggi = document.querySelector("#numMessaggi")

function creazioneNumeri(numeroFinale, elemento, frequenza){

    let counter = 0

    let intervalloNumeri = setInterval(()=>{
        if(counter < numeroFinale){
            counter++
            elemento.innerHTML = counter
        }else{
            clearInterval(intervalloNumeri)
        }
    }, frequenza)
}

creazioneNumeri(100, numUtenti, 75)
creazioneNumeri(500, numProdotti, 35)
creazioneNumeri(1000, numMessaggi, 10)
