window.addEventListener("scroll", function(){
    const navbar = document.getElementById("navbar")
    const principal = document.getElementById("conteudo")

    if (window.scrollY >= 361.97){
        navbar.classList.add("navfixa");
        principal.classList.add("descriçao")}
    else{
        navbar.classList.remove("navfixa");
        principal.classList.remove("descriçao")}
});

function sobremim(){
    document.getElementById("texto").value = "";
}