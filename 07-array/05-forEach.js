const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// simulando um forEach como funciona
Array.prototype.forEach2 = function(callback) {
    for (let i=0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

// Percorrendo o array "aprovados" com função anônima
aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})