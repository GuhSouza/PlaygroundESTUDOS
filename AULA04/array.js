let pets = ["lepra","Marquinhos", "bonitao","idoso"]
let animais = ["Lagarto", "Abelha", "Leao"]

// PUSH,ele adiciona um novo elemento a array,na ultima posição
pets.push("Minato") 

console.log(pets)

function adicionarUmNovoItem (array,...novoItem) {
    return array.push(novoItem)

}

adicionarUmNovoItem(animais,"Urso", "Jacare")

console.log(animais)

//UNSHIFT - adiciona um item na primeira posição

pets.unshift("LEO")

console.log(pets)

//POP - ele remove o ultimo elemento da array

const tirarOUltimoItem = pets.pop()


console.log(tirarOUltimoItem)

// indexOf - ele da a posição do lugar no array

const indiceDaArray = pets.indexOf("lepra")

console.log(indiceDaArray)

// find ele retorna a primeira posição que der true

const arrayDeTeste = [1,4,7,19,34,65,90]


const descobrirOFind = arrayDeTeste.find((arrayIndice) => { 
    return arrayIndice > 10})

console.log(descobrirOFind)



















