let imagen = Number("1");
let imagen2 = Number("2");
let siguiente = document.getElementById("siguiente");
let anterior = document.getElementById("anterior");
let avance = document.getElementById("avance");
let parada = document.getElementById("parada");
let foto = document.getElementById("img");
let foto2 = document.getElementById("img2");
let fondo = document.querySelector("body");
let seguir = false;
let a = document.querySelectorAll("a");
let seccion = document.querySelector("section");
let cambiar = document.getElementById("cambiar");
let header = document.querySelector("header");
let input = document.querySelectorAll("input");


function pasarUnaImagen(){
    imagen = imagen + 1;
    if (imagen == 8){
        imagen = 1;
    }
    if (imagen == 1){
        foto.src = "https://steamuserimages-a.akamaihd.net/ugc/2046363739230761844/5C2137540B36D1ED05C7E14EF927DC55A817B7BD/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true";
    }
    if (imagen == 2){
        foto.src = "https://i.blogs.es/245247/010416-darksouls3-review/1366_2000.jpg";
    }
    if (imagen == 3){
        foto.src = "https://data.xxlgamer.com/galleries/318/XtFGmT6RD9SZC1-full.jpg";
    }
    if (imagen == 4){
        foto.src = "https://i0.wp.com/www.pswallpapers.com/wp-content/uploads/2017/03/Dark-Souls-III-4K-Main.jpg?ssl=1";
    }
    if (imagen == 5){
        foto.src = "https://images.alphacoders.com/588/588042.jpg";
    }
    if (imagen == 6){
        foto.src = "https://steamuserimages-a.akamaihd.net/ugc/2058741034012525685/D0FBE13833A04573BA78B1584C510EFC5CED0DEF/";
    }
    if (imagen == 7){
        foto.src = "https://www.psu.com/wp/wp-content/uploads/2020/10/demons-souls-remake-ps5-wallpapers-09.jpg";
    }
}

function volverUnaImagen(){
    imagen = imagen - 1;
    if (imagen == 0){
        imagen = 7;
    }
    if (imagen == 1){
        foto.src = "https://steamuserimages-a.akamaihd.net/ugc/2046363739230761844/5C2137540B36D1ED05C7E14EF927DC55A817B7BD/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true";
    }
    if (imagen == 2){
        foto.src = "https://i.blogs.es/245247/010416-darksouls3-review/1366_2000.jpg";
    }
    if (imagen == 3){
        foto.src = "https://data.xxlgamer.com/galleries/318/XtFGmT6RD9SZC1-full.jpg";
    }
    if (imagen == 4){
        foto.src = "https://i0.wp.com/www.pswallpapers.com/wp-content/uploads/2017/03/Dark-Souls-III-4K-Main.jpg?ssl=1";
    }
    if (imagen == 5){
        foto.src = "https://images.alphacoders.com/588/588042.jpg";
    }
    if (imagen == 6){
        foto.src = "https://steamuserimages-a.akamaihd.net/ugc/2058741034012525685/D0FBE13833A04573BA78B1584C510EFC5CED0DEF/";
    }
    if (imagen == 7){
        foto.src = "https://www.psu.com/wp/wp-content/uploads/2020/10/demons-souls-remake-ps5-wallpapers-09.jpg";
    }
}

function avanzarImagen(){
    if (seguir){
        setTimeout(avanzarImagen, 2000);
    }
    imagen2 = imagen2 + 1;
    if (imagen2 == 8){
        imagen2 = 1;
    }
    if (imagen2 == 1){
        foto2.src = "https://steamuserimages-a.akamaihd.net/ugc/2046363739230761844/5C2137540B36D1ED05C7E14EF927DC55A817B7BD/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true";
    }
    if (imagen2 == 2){
        foto2.src = "https://i.blogs.es/245247/010416-darksouls3-review/1366_2000.jpg";
    }
    if (imagen2 == 3){
        foto2.src = "https://data.xxlgamer.com/galleries/318/XtFGmT6RD9SZC1-full.jpg";
    }
    if (imagen2 == 4){
        foto2.src = "https://i0.wp.com/www.pswallpapers.com/wp-content/uploads/2017/03/Dark-Souls-III-4K-Main.jpg?ssl=1";
    }
    if (imagen2 == 5){
        foto2.src = "https://images.alphacoders.com/588/588042.jpg";
    }
    if (imagen2 == 6){
        foto2.src = "https://steamuserimages-a.akamaihd.net/ugc/2058741034012525685/D0FBE13833A04573BA78B1584C510EFC5CED0DEF/";
    }
    if (imagen2 == 7){
        foto2.src = "https://www.psu.com/wp/wp-content/uploads/2020/10/demons-souls-remake-ps5-wallpapers-09.jpg";
    }
}

function pararImagen(){
    seguir = false;
}

function clickAvance(){
    if (!seguir){
    seguir = true;
    avanzarImagen();
    }
}

let modooscuroactivado = false;

function cambiarColores(){
    modooscuroactivado = !modooscuroactivado;
    for (let i = 0; i < a.length; i++){
        if (modooscuroactivado){
            a[i].style.color = "#0077B6";
        }else{
            a[i].style.color = "#00B4D8";
        }
    }
    for (let i = 0; i < input.length; i++){
        if (modooscuroactivado){
            input[i].style.backgroundColor = "#023E8A";
            input[i].style.color = "#48CAE4";
        }else{
            input[i].style.backgroundColor = "#48CAE4";
            input[i].style.color = "#023E8A";
        }
    }
        if (modooscuroactivado){
            fondo.style.background = "#48CAE4";
            seccion.style.backgroundColor = "#00B4D8";
            header.style.backgroundColor = "rgba(240, 248, 255, 0.668)";
            header.style.color = "black";
        }else{
            fondo.style.background = "#023E8A";
            seccion.style.backgroundColor = "#0077B6";
            header.style.backgroundColor = "rgb(0, 0, 0)";
            header.style.color = "rgba(240, 248, 255, 0.668)";
        }
        localStorage.setItem('ModoOscuro', modooscuroactivado);
    }

    window.onload = ()=> {
        let saveMode = localStorage.getItem("ModoOscuro");
        if (saveMode === 'true'){
            cambiarColores();
        }

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("mensajeMantenimiento").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "../txt/mantenimiento.txt", true);
        xhttp.send();
    }

