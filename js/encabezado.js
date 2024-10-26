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
            <a href="#" >Contacto</a>
        </nav>
`;

const footer = document.querySelector("footer");

footer.innerHTML =
    `
            <div class="home-sci">
                <a href="https://www.facebook.com/osito.jacky.7" onclick="audio2.play();" target="_blank"><i
                        class='bx bxl-facebook'></i></a>
                <a href="https://www.linkedin.com/in/luis-fernando-diaz-colunga-0a312a248/" onclick="audio2.play();"
                    target="_blank"><i class='bx bxl-linkedin'></i></a>
                <a href="https://github.com/LuisFernandoDiaz" onclick="audio2.play();" target="_blank"><i
                        class='bx bxl-github'></i></a>
            </div>
`;


//aqui ira una funcion de sonido mas nada

let audio1 = new Audio();
audio1.src = "./sonido/bom.mp3"

let audio2 = new Audio();
audio2.src = "./sonido/click.mp3"

//aqui vinen las skills
