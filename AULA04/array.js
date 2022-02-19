const pets = ["lepra","Marquinhos", "bonitao","idoso"]

//console.log(pets[0])

// METODO PUSH,ele adiciona na ultima posição do array

//METODO UNSHIFT add na primeira posicao do array

//METODO POP remove o ultimo item da array

// METODO index.Of  descobre a posicao da array

// METODO find retorna o primeiro elemento da array

const array1 = [2,15,18,28,35];

// console.log(array1.find((element) >= element > 10)

//console.log(pets)

pets.push("Minatin")

//console.log(pets)

function addItemArray (lastItem) {       //FUNCTION adicionar ultimo item a lista de arrays
    pets.push(lastItem)
}

addItemArray("Garuu")

//console.log(pets)


pets.unshift("Relikia")

//console.log(pets)

function addFirstItem (firstItem) {   // FUNCTION adicionar item na primeira posicao da array,indice 0
    pets.unshift(firstItem)
}

addFirstItem("Gugu")

console.log(pets)












