let butao = document.querySelector("button");
let body = document.querySelector("body")
let titulo = document.querySelector("h1")

function darksLight(){
    body.classList.toggle('light')

    titulo.innerText == "Light Mode"? titulo.innerText = "Dark Mode": titulo.innerText = "Light Mode"

}

butao.onclick = darksLight;
