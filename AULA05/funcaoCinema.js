const filmes = require('./datebase/catalogo.json')

//console.log(filmes)

const  newFilme = {
    codigo:2,
    titulo: 'Abrao',
    duracao: 3,
    atores: ["brad pit","lucas lucco"],
    anoLancamento: 2024,
    emCartaz: true
}

const newFilme2 = {
    codigo: 3,
    titulo: "Transformers Rise of kindows" ,
    duracao: 3,
    atores: ["Optimus Prime", "Megatrom", "Bumblebee"],
    anoLancamento: 2003,
    emCartaz: false

}
const addFilme = filme => {filmes.push(filme)}


//addFilme(newFilme)
//addFilme(newFilme2)

//console.log(filmes)

const listarFilmes = arrayDeFilmes => {
    for(i = 0; i < arrayDeFilmes.length; i=i+1) {
        console.log("O indice do filme é:", i, "e o titulo: ", arrayDeFilmes[i].titulo)
    }
}

//listarFilmes(filmes)

const listarFilmesEmCartaz = arrayDeFilmes => {
    for(i = 0; i < arrayDeFilmes.length; i++) {
        if(arrayDeFilmes[i].emCartaz === false){
            console.log(arrayDeFilmes[i])
        }
    }
}

//listarFilmesEmCartaz(filmes)
function procurarFilmePeloCodigo(id) {
    return filmes.find((filme) => filme.codigo === id )
}

function  modificarCartaz  (id) {
    const auxiliar = procurarFilmePeloCodigo(id) 
    auxiliar.emCartaz === true ? auxiliar.emCartaz = false : auxiliar.emCartaz = true
    console.log(auxiliar)
}

modificarCartaz(0)