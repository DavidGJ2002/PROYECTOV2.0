window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".anuncio").style.display = "block";
        },
        1000)
});
document.querySelector("#cerrar").addEventListener("click", function(){
    document.querySelector(".anuncio").style.display = "none";
});
