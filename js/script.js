let butao = document.querySelector("button");
let body = document.querySelector("body")
let titulo = document.querySelector("h1")
let change =  document.querySelector("div.change")
let icon = document.querySelector("button i")

function darksLight(){
    body.classList.toggle('light')
    butao.classList.toggle('active-move')
    change.classList.toggle('active-bg')
    let verificandoTroca = icon.classList.contains("bi-moon-stars-fill")

    if(verificandoTroca){
        icon.classList.remove("bi-moon-stars-fill")
        icon.classList.add("bi-brightness-high-fill")
    }else{
        icon.classList.remove("bi-brightness-high-fill")
        icon.classList.add("bi-moon-stars-fill")
    }

    

    titulo.innerText == "Light Mode"? titulo.innerText = "Dark Mode": titulo.innerText = "Light Mode"

}

butao.onclick = darksLight;
