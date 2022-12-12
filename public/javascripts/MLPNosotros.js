function Ocultar(){
    document.getElementById("infoib").style.display = "none";
}

function Mostrar(){
    document.getElementById("infoib").style.display = "block";
}


function Mostrar_Ocultar(){
    let infoib = document.getElementById("infoib");

    if(infoib.style.display == "none"){
        Mostrar();
        
    }
    else{
        Ocultar();
        
    }
}

function Oculta(){
    document.getElementById("infoc").style.display = "none";
}

function Muestra(){
    document.getElementById("infoc").style.display = "block";
}


function Mostrar_Info(){
    let infoc = document.getElementById("infoc");

    if(infoc.style.display == "none"){
        Muestra();
        
    }
    else{
        Oculta();
        
    }
}

function Guarda(){
    document.getElementById("infod").style.display = "none";
}

function Ver(){
    document.getElementById("infod").style.display = "block";
}


function Ver_Datos(){
    let infod = document.getElementById("infod");

    if(infod.style.display == "none"){
        Ver();
        
    }
    else{
        Guarda();
        
    }
}


