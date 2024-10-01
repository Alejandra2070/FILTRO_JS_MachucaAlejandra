let int = document.getElementById("input").value
let link = 'https://imdb.iamidiotareyoutoo.com/justwatch?q=22' + int;
let mas = document.getElementById("info-data")


function mostrar2(link){
    fetch(link)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let infos = ""
        
        data.description.forEach(e => {
            infos+=`
            <div class="card">
                <h3 class="año">Año:</h3><p>${e.year}</p>
                <h3 class="tipo">Tipo: </h3><p> ${e.type}</p>
                <h3 class="titulo">Título: </h3><p>${e.title}</p><br>
                <img id="imgs" src="${e.photo_url}"></p>
            </div>
            `
        })
        mas.innerHTML=infos
    });

    document.getElementById("input").addEventListener("keyup", e => {
        const search = e.target.value.toLowerCase();
        
        document.querySelectorAll(".card").forEach(element => {
            const año = element.querySelector(".año").textContent.toLowerCase();
            const tipo = element.querySelector(".tipo").textContent.toLowerCase();
            const titulo = element.querySelector(".titulo").textContent.toLowerCase();
            if (titulo.includes(search)||año.includes(search)||tipo.includes(search)){
                element.classList.remove("filtro");
            }
            else{
                element.classList.add("filtro");
            }
        })
    })
}
mostrar2(link)