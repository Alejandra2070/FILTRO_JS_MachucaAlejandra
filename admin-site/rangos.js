var link = 'https://imdb.iamidiotareyoutoo.com/justwatch?q=22'

let mas = document.getElementById("info-data")

mostrar2(link)

function mostrar2(link){
    fetch(link)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        var infos = ""

        data.description.forEach(e => {
            infos+=`
            <div class="card">
                <h3 class="año">Identificador: </h3><p>${e.imdbId}</p>
                <h3 class="titulo">Título: </h3><p>${e.title}</p>
                <h3 class="tipo">Tipo: </h3><p>${e.type}</p>
                <img id="imgs" src="${e.photo_url}"></p>
            </div>
            `
        })
        mas.innerHTML=infos
    })
}