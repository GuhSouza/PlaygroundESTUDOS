const objet = {a:1, b:2, c:3, soma (a,b) {return a + b}}
   console.log(JSON.stringify(objet)) //Veja que a função foi excluida,STRINGIFY transforma um OBJETO em um JSON

   console.log(JSON.parse('{"a":1,"b":2,"c":3}')) // PARSE transforma O JSON em um OBJETO
