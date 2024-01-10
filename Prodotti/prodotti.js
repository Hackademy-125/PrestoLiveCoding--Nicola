// NAVBAR

let navbar = document.querySelector(".navbar")

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 0){
        navbar.classList.add("nav-custom")
    }else{
        navbar.classList.remove("nav-custom")
    }

})

// CHIAMATA API AL MIO FOGLIO JSON 

fetch("./prodotti.json").then((response)=> response.json()).then((data)=>{

// ORA TUTTO IL CODICE ANDRA SCRITTO QUA DENTRO 

// FILTRI CATEGORIE 

let prodottiWrapper = document.querySelector("#prodottiWrapper")

//CREAZIONE CARDS

function createCards(array){

    prodottiWrapper.innerHTML=""

    array.forEach((prodotto)=>{
            let colonna = document.createElement("div");
            colonna.classList.add("col-10", "col-md-3", "my-3");
            colonna.innerHTML = `
                                <div class="card position-relative">  
                                <div class="overflow-hidden card-img-top">
                                    <img src="https://picsum.photos/200" class="card-img-top transition" alt="...">
                                </div>
                                <div class="card-body">
                                <h5 class="card-title text-center">${prodotto.cibo}</h5>
                                <p class="card-text">Categoria: ${prodotto.categoria}</p>
                                <p class="card-text">Luogo: ${prodotto.regione}</p>
                                <p class="card-text">Prezzo: ${prodotto.prezzo}</p>
                                <div class="d-flex justify-content-center">
                                    <a href="#" class="btn btn-danger">Aggiungi al carrello</a>
                                </div>
                                </div>
                            </div>
            `
            prodottiWrapper.appendChild(colonna)
        })
    }

    createCards(data)

// SETTING CATEGORIE 

let radioWrapper = document.querySelector("#radioWrapper")

function aggiungereCategorie(){
    let categorie = data.map((el)=> el.categoria)
    let categorieSingole = [];
    categorie.forEach((categoria)=>{
        if(!categorieSingole.includes(categoria)){
            categorieSingole.push(categoria)
        }
    })

   categorieSingole.forEach((categoriaSingola)=>{
    let div = document.createElement("div");
    div.classList.add("form-check")
    div.innerHTML = `
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id=${categoriaSingola}>
                        <label class="form-check-label" for=${categoriaSingola}>
                        ${categoriaSingola}
                        </label>
    `
    radioWrapper.appendChild(div)
   })
}


aggiungereCategorie()

let bottoneCheck = document.querySelectorAll(".form-check-input")

function filtroCategorie(){
    let checkArray = Array.from(bottoneCheck)
    let check = checkArray.find((el)=> el.checked == true)
        if(check.id == "All"){
            createCards(data)
        }else{
            let filtro = data.filter((el)=> el.categoria == check.id)
            createCards(filtro);
        }
}


bottoneCheck.forEach((bottoneCheckSingolo)=>{
    bottoneCheckSingolo.addEventListener("input", ()=>{
        filtroCategorie();
    })
})


// FILTRO PER PREZZO !FUNZIONE!

let inputPrice = document.querySelector("#inputPrice")
let priceLabel = document.querySelector("#priceLabel")

function cercaMinMaxPrice(){

    let prices = data.map((el)=> el.prezzo)
    let max = Math.max(...prices)
    let min = Math.min(...prices)
    inputPrice.min = min
    inputPrice.max = max
    inputPrice.value = max
    priceLabel.innerHTML = max
}

cercaMinMaxPrice()

// FILTRO PREZZO 

function filtroPrezzo(){
    let filtro = data.filter((el)=> el.prezzo <= inputPrice.value)
    createCards(filtro)
}

inputPrice.addEventListener("input", ()=>{
    priceLabel.innerHTML = inputPrice.value;
    filtroPrezzo();
})

//FILTRO PER PAROLA

let inputWord = document.querySelector("#inputWord");

function filtroParole(){
    let filtro = data.filter((el)=> el.cibo.toLowerCase().includes(inputWord.value.toLowerCase()))
    createCards(filtro)
}

inputWord.addEventListener("input", ()=>{
    filtroParole()
})





















})



























