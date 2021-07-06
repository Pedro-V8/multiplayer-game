//Casos de Object Literals

//Ex1
const pessoa = {
    nome: "Pedro",
    sobrenome: "Vieira"
}

console.log(pessoa.nome)
//ou
console.log(pessoa["nome"])


//Ex2
const calculadora = {
    somar: function(){ return 1 + 1 } 
}

console.log(calculadora.somar) //Aqui mostra somente o valor da chave e não o resultado da soma =)

//Para pegar o valor da função...
console.log(calculadora["somar"]())

//Deixando mais bonito...
const somar = calculadora.somar
console.log(somar())


//É possível passar parâmetros para as funções do objeto...

const calculadora2 = {
    soma: function() { return 1 + 1 },
    duplica: function(valor) { return valor * 2 } 
}
const duplica = calculadora2.duplica(2)
console.log(duplica)


//Estrutura do Filipe que achei massa
function somaR (){
    return 1 + 1
}

const somar2 = somaR()
console.log(somar2)
