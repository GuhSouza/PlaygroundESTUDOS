const numeros = [1,20,3,43,5,6,7,88,9,10];


const numerosDobros = numeros.map(function(valor){
    return valor * 2
})

const numerosNegativos = numeros.map(function(valor){
    return valor * -1
})


const percorrerArray = numeros.filter(function(valor){
    return valor > 5
})



console.log(transformarNumero)