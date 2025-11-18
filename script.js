const sabre = document.getElementById("sabre");

function ligar(){
    sabre.src = "bru1.jpeg";
}


function desligar(){
    sabre.src = "bru.jpeg";
}

function modoAutomatico(){
    let estado = 0;
    intervalo = setInterval(()=>{
    if(estado === 0 ) desligar();
    else if (estado === 1) ligar();
    estado = (estado + 1) % 2;
},700)
}
function parar(){
    clearInterval(intervalo);
    limpar();
}

btnLigar.onclick = ligar;
btnDesligar.onclick = desligar;
btnAuto.onclick = modoAutomatico;
btnParar.onclick = parar;