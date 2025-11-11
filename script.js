const mulher = document.getElementById("lampada");

mulher.addEventListener("mouseover",acender);
mulher.addEventListener("mouseout",apagar);

function acender(){
    mulher.src = "on.png";
    document.body.style.background = "#ffeb3b22"
}


function apagar(){
    mulher.src = "off.png";
    document.body.style.background = "#222"
}