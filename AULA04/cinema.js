const catalogo = [
   
    {
    codigo: 1,
    titulo: "Transformers"  ,
    duracao: 2,
    atores: ["gustavin de maua","Minatin"],
    anoLancamento: 2023,
    emCartaz: false
}, 
{
    codigo: 2,
    titulo: "Vingadores",
    duracao: 1,
    atores: ["O cara la","o tal do rogerin"],
    anoLancamento: 2022,
    emCartaz: true
},
]


    console.log(JSON.stringify(catalogo))

function adicionarFilme (codigo,titulo,duracao,atores,anoLanmento,emCartaz) {
    let novo = 
    {codigo,titulo,duracao,atores,anoLanmento,emCartaz}
    catalogo.push(novo)
    //console.log("Foi adicionado um novo filme ao catalogo")
    //console.log(catalogo)
    
}

adicionarFilme(3, "Abrao",3,["brad pit","lucas lucco"], 2024, false )

function procurarFilmePeloCodigo(id) {
    return catalogo.find((filme) => filme.codigo === id )
}

// console.log(procurarFilmePeloCodigo(2))

function modificarCartaz (id) {
    const auxiliar = catalogo.find((filme) => filme.codigo === id )
    auxiliar.emCartaz = !auxiliar.emCartaz
}

modificarCartaz(0)
console.log(catalogo)
