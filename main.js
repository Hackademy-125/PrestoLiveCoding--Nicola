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




// INTERSECTON OBSERVER         //Quando arrivo a quel pulsante inizia forEach fino ai valori che gli ho dato io.

let primoBox = document.querySelector("#primoBox")

let isIntersecato = false;                                          //Una variabile con is davanti si usa per affidargli un valore true o false.

let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting && isIntersecato == false){
            creazioneNumeri(100, numUtenti, 75)
            creazioneNumeri(500, numProdotti, 35)
            creazioneNumeri(1000, numMessaggi, 10)
            isIntersecato = true;   
        }
    })
})

observer.observe(primoBox)


//ULTIMI ANNUNCI

let ultimiAnnunciWrapper = document.querySelector("#ultimiAnnunciWrapper")

let annunci = [
    {name: "Prosciutto crudo al sale di Cervia", tipologiaCibo: "Salume", prezzo: "KG. 14€", img: "./Media/prosciutto.jpg"},
    {name: "Latte di montagna", tipologiaCibo: "Latticini", prezzo: "LT. 1,99€", img: "./Media/latte.jpg"},
    {name: "Farina di grano italiano", tipologiaCibo: "Farina", prezzo: "KG. 1€", img: "./Media/farina.jpg"},
    {name: "Uova", tipologiaCibo: "Uova", prezzo: "PZ. 0.80€", img: "./Media/uova.jpg"},
    {name: "Salame Felino", tipologiaCibo: "Salume", prezzo: "KG. 23€", img: "./Media/salame.jpg"},
    {name: "Formaggio di montagna", tipologiaCibo: "Stagionato", prezzo: "KG. 10€", img: "./Media/formaggio.jpg"},
]

annunci.forEach((annuncio, i)=>{
    if(i >= annunci.length - 3){
        let colonna = document.createElement("div");
        colonna.classList.add("col-10", "col-md-3", "my-3");
        colonna.innerHTML = `
                            <div class="card position-relative">
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger z-3">NEW</span>       
                            <div class="overflow-hidden card-img-top">
                                <img src="${annuncio.img}" class="card-img-top transition" alt="...">
                            </div>
                            <div class="card-body">
                            <h5 class="card-title text-center">${annuncio.name}</h5>
                            <p class="card-text">Categoria: ${annuncio.tipologiaCibo}</p>
                            <p class="card-text">Prezzo: ${annuncio.prezzo}</p>
                            <div class="d-flex justify-content-center">
                                <a href="#" class="btn btn-danger">Aggiungi al carrello</a>
                            </div>
                            </div>
                        </div>
        `
        ultimiAnnunciWrapper.appendChild(colonna)
    }
})