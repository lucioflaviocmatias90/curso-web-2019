const ferrari = {
	modelo: 'F40',
	velMax: 324
}

const volvo = {
	modelo: 'V40',
	velMax: 200
}

/* 
	esse __proto__ vai verificar o prototype pai 
	desse objeto correspondente, verificando o pai
	do pai, do pai e assim em diante nessa cadeia
	de prototipos
*/
console.log(ferrari.__proto__)

/*
	Executando esse console.log(), iremos deparar com
	a comparação do objeto com o prototipe dele
*/
console.log(ferrari.__proto__ === Object.prototype)

// fazendo o mesmo teste de cima
console.log(volvo.__proto__ === Object.prototype)


function MeuObjeto() {}

// fazendo alguns testes
console.log(typeof MeuObjeto, typeof Object)