let ataqueJugador
let ataqueEnemigo
let resultadoCombate
let vidaJugador=3
let vidaEnemigo=3

function iniciarJuego(){
//Ocultar la seccion de ataque y reiniciar
    let sectionSeleccionarAtaque= document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display="none"

    let sectionReiniciar= document.getElementById("reiniciar")
    sectionReiniciar.style.display="none"
//Escuchar los click
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego= document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)

    let botonAgua= document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)

    let botonTierra= document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar= document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {

    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya =document.getElementById("ratigueya")
    let spanMascotaJugador= document.getElementById("mascota-jugador")

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML="Hipodoge"
    } else if( inputCapipepo.checked){
        spanMascotaJugador.innerHTML="Capipepo"
    } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML="Ratigueya"
    } else{
        alert("Por favor eliga una mascota")
    }
    //Al elegir mascota, aparece la seccion de ataque
    let sectionSeleccionarAtaque= document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display="block"
//Ahora debe desaparecer la seccion mascota
    let sectionSeleccionarMascota= document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display="none"

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio= aleatorio(1,3)
    let spanMascotaEnemigo= document.getElementById("mascota-enemigo")
    if(mascotaAleatorio==1){
        spanMascotaEnemigo.innerHTML="Hipodoge"
    } else if(mascotaAleatorio==2){
        spanMascotaEnemigo.innerHTML="Capipepo"
    } else if(mascotaAleatorio==3){
        spanMascotaEnemigo.innerHTML="Ratigueya"
    } else{
        //nojugar
    }
}

function ataqueFuego(){
    ataqueJugador="FUEGO 🔥🔥🔥🔥"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador="AGUA 🐳🐳🐳🐳"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador="TIERRA 🌱🌱🌱🌱"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio= aleatorio(1,3)

    if(ataqueAleatorio==1){
        ataqueEnemigo="FUEGO 🔥🔥🔥🔥"
    } else if(ataqueAleatorio==2){
        ataqueEnemigo="AGUA 🐳🐳🐳🐳"
    } else if(ataqueAleatorio==3){
        ataqueEnemigo="TIERRA 🌱🌱🌱🌱"
    } else{
        //nojugar
    }
    combate()
}

function combate(){
    let spanVidaJugador= document.getElementById("vida-jugador")
    let spanVidaEnemigo= document.getElementById("vida-enemigo")

    if(ataqueEnemigo==ataqueJugador){
        resultadoCombate="EMPATE"
    } else if(ataqueEnemigo=="FUEGO 🔥🔥🔥🔥 "&& ataqueJugador=="AGUA 🐳🐳🐳🐳" || ataqueEnemigo=="AGUA 🐳🐳🐳🐳"&& ataqueJugador=="TIERRA 🌱🌱🌱🌱"||"TIERRA 🌱🌱🌱🌱"&& ataqueJugador=="FUEGO 🔥🔥🔥🔥" ){
        resultadoCombate="GANASTE"
        vidaEnemigo --
        spanVidaEnemigo.innerHTML= vidaEnemigo
    } else {
        resultadoCombate="PIERDES"
        vidaJugador --
        spanVidaJugador.innerHTML= vidaJugador
    }

    crearMensaje()
    revisarVidas()
    
}

function revisarVidas(){
    if(vidaEnemigo==0){
        crearMensajeFinal("FELICITACIONES, GANASTE!! 🥳")
    } else if(vidaJugador==0){
        crearMensajeFinal("PERDISTE 💔, te doy mis condolecias ☹️")
    } else {
        //continuar juego
    }
}

function crearMensaje(){
    let sectionMensajes= document.getElementById("mensajes")

    let parrafo= document.createElement("p")
    parrafo.innerHTML= "Tumascota atacó con "+ ataqueJugador +", La mascota del enemigo atacó con " + ataqueEnemigo+ ","+ resultadoCombate; 

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes= document.getElementById("mensajes")

    let parrafo= document.createElement("p")
    parrafo.innerHTML= resultadoFinal

    sectionMensajes.appendChild(parrafo)

//Desabilitar los botones
    let botonFuego= document.getElementById("boton-fuego")
    botonFuego.disabled= true

    let botonAgua= document.getElementById("boton-agua")
    botonAgua.disabled= true

    let botonTierra= document.getElementById("boton-tierra")
    botonTierra.disabled=true
//Aparece boton de reinicio
    let sectionReiniciar= document.getElementById("reiniciar")
    sectionReiniciar.style.display="block"
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){ 
    return Math.floor(Math.random()*(max-min+1)+min)
}




window.addEventListener("load", iniciarJuego)