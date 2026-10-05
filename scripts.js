//1
let enlace = document.querySelectorAll("a");

for (let i = 0; i < enlace.length; i++) {
    enlace[i].addEventListener("click", function(event) {
        event.preventDefault();
    })
}

//2

let imagenes = document.querySelectorAll("img")
let parrafos = document.querySelectorAll("p")
let seccion = document.querySelectorAll("section")

let imagenOriginal = [] // guardar variable original
for (let i = 0; i < imagenes.length; i++) {
    imagenOriginal.push(imagenes[i].src)
}

let elemento = document.querySelector("header") // este es el elemento de referencia

elemento.addEventListener("click", function() {
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].src ="./assets/magic-1.gif"
    }
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color = "red"
        parrafos[i].style.backgroundColor = "pink"
    }
    for (let i = 0; i < seccion.length; i++) {
        seccion[i].style.backgroundColor = "blue"
    }
}
)

//3
elemento.addEventListener("mouseover", function() {
        for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].src ="./assets/abracadabra.gif"
    }
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color = "yellow"
        parrafos[i].style.backgroundColor = "green"
    }
    for (let i = 0; i < seccion.length; i++) {
        seccion[i].style.backgroundColor = "black"
    }
})


elemento.addEventListener("mouseout", function() {
        for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].src = imagenOriginal[i] // volver a imagen original
    }
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color = "" // el valor vacío "" retira el color
        parrafos[i].style.backgroundColor = ""
    }
    for (let i = 0; i < seccion.length; i++) {
        seccion[i].style.backgroundColor = ""
    }
})


//Premium

function getRandom(arr) {
    for (let i = 0; i < arr.length; i++) {
        return arr[Math.floor(Math.random() * arr.length)]
    }
}

let colors = ["#724319", "#d88180", "#f7b1b0", "#feeac7", "#cad182"]
let gifs = ["assets/abracadabra.gif", "assets/magic-1.gif", "assets/magic-2.gif", "assets/magic-3.gif", "assets/magic-4.gif", "assets/magic-5.gif", "assets/magic-6.gif"]
let cuerpo = document.querySelector("body")
cuerpo.addEventListener("click", function() {
    for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].src = getRandom(gifs)
    }
    cuerpo.style.backgroundColor = getRandom(colors)
})




