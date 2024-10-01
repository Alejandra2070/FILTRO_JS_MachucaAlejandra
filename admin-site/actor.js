var link = 'https://imdb.iamidiotareyoutoo.com/justwatch?q=22'

let mas1 = document.getElementById("info-data")

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
                <h3 class="año">Actor: </h3><p>${e["#ACTORS"]}</p>
                <h3 class="titulo">Título:</h3><p> ${e.title}</p><br>
                <img id="imgs" src="${e.photo_url}"></p>
            </div>
            `
        })
        mas1.innerHTML=infos
    })
}