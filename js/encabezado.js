//var link = document.createElement("link");
//link.rel = "stylesheet";
//link.href = "css/header.css";
//link.type = "text/css";
//document.getElementsByTagName("head")[0].appendChild(link);


const header = document.querySelector("header");

header.innerHTML =
    `
        <a href="#" class="logo">Fernando</a>

        <nav class="navbar">
            <a href="./index.html"  class="activo">Hogar</a>
            <a href="skills.html" >Skills</a>
            <a href="proyectos.html" >Proyectos</a>
            <a href="#" >Portafolios</a>
            <a href="#" >Contacto</a>
        </nav>
`;



//aqui ira una funcion de sonido mas nada

let audio1 = new Audio();
audio1.src = "./sonido/bom.mp3"

let audio2 = new Audio();
audio2.src = "./sonido/click.mp3"

//aqui vinen las skills
