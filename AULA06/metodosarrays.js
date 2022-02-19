let listaDeNumeros = [1, 2, 3, 4, 5, 6,];

//map  

let listaDeNumerosDobros = listaDeNumeros.map(function(valor,index){
    return valor * 2
});

console.log(listaDeNumerosDobros)

//Filter

let listaDeNumerosFiltrados = listaDeNumeros.filter(function(valor,index){
    return valor < 5
})

console.log(listaDeNumerosFiltrados)

//reduce


let listaDeNumerosSomados = listaDeNumeros.reduce(function(resultado,valor){
    return resultado + valor
})

console.log(listaDeNumerosSomados)


//ForEach


listaDeNumeros.forEach(function(valor,index){
    console.log("O valor é: ", valor, "e o indice: ", index)

})

