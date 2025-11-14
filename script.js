const luz = document.getElementById("luz");

function ligar(){
    luz.src = "bru.jpeg";
    document.body.style.background = "#ffeb3b22"
}


function desligar(){
    luz.src = "bru1.jpeg";
    document.body.style.background = "#222"
}