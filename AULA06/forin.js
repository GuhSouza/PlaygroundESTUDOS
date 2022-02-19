let carro = {
    nome: "fox",
    ano: 2017,
    portas: 4
}

for(let propriedade in carro){
    console.log(carro[propriedade])
}


//for of

let series = ["The flash", "The boys", "Goliath"]

for(let propriedades of series) {
    console.log(propriedades)
}
