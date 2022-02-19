let dia = "terça feira"

let resultado = dia == 'domingo'? "Vou a praia" : "Não vou a praia"

//console.log(resultado)



// SWITCH

switch(dia) {
    case "domingo" :
        console.log("Eu vou a praia");
        break;
    case "segunda" :
        console.log("Eu vou trabalhar")  
        break; 
    default :
    console.log("Eu vou dormir") 
    break;   
}