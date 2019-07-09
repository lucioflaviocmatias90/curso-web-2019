// Trabalhando com herança em Classes

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        // chamando o sobrenome de "Avo"
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        // utilizando o "super()", estamos herdando tudo
        // que vem do construtor da classe "Pai"
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)