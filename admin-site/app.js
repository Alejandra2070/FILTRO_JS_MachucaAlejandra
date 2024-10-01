var link = 'https://imdb.iamidiotareyoutoo.com/justwatch?q=22'
let busqueda = document.getElementById("info-data")

mostrar(link)

function mostrar(link) {
    fetch(link)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        var infos = ""

        data.description.forEach(e => {
            infos+=`
            <div class="card">
                <h2 class="titulo">${e.title}</h2>
                <p class="año">Año: ${e.year}</p><p></p>
                <p class="id">Identificador: ${e.id}</p>
                <a class="boton" href="${e.url}">Url</a>
                <p class="tipo">Tipo: ${e.type}</p>
                <img id="imgs" src="${e.photo_url}"></p>
            </div>
            `
        })
        busqueda.innerHTML=infos
    });

    document.getElementById("input").addEventListener("keyup", e => {
        const search = e.target.value.toLowerCase();

        document.querySelectorAll(".card").forEach(element => {
            const titulo = element.querySelector(".titulo").textContent.toLowerCase();
            const año = element.querySelector(".año").textContent.toLowerCase();
            const id = element.querySelector(".id").textContent.toLowerCase();
            const boton = element.querySelector(".boton").textContent.toLowerCase();
            const tipo = element.querySelector(".tipo").textContent.toLowerCase();
            if (titulo.includes(search)||año.includes(search)||id.includes(search)||boton.includes(search)||tipo.includes(search)){
                element.classList.remove("filtro");
            }
            else{
                element.classList.add("filtro");
            }
        })
    })
}



/*const url = 'https://imdb.iamidiotareyoutoo.com/search';
const options = {method: 'GET'};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}*/