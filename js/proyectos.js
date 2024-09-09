var c = 0;
function cambio() {
    c++;
    if (c > 5) c = 1;
    document.getElementById("carrusel").setAttribute("src", "img/" + c + ".jpg");
    setTimeout("cambio()", 2000);
}
document.body.setAttribute("onload", "cambio()");

