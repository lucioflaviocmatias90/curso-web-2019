// Trabalhando com bibliotecas de terceiros

// Instalando a biblioteca "lodash" com "npm install lodash"

// Podemos observar que foi criado a pasta "node_modules",
// o que seria a pasta "vendor" do PHP, pois NPM significa
// Node Package Manager (Gerenciador de Pacotes do Node)

// O caracter "_" representa uma referência à biblioteca
// "lodash", ao observar, não estamos passando um caminho
// relativo em "require()", isso pq ele vai buscar a biblio-
// teca em node_modules um módulo chamado "lodash", e dentro
// ele espera encontrar um arquivo chamado "index.js", e desse
// arquivo ele vai carregar todas as bibliotecas necessárias.
const _ = require('lodash')
setInterval(() => console.log(_.random(1, 1000)), 2000)


// Agora famos instalar uma bibloioteca terceira de forma
// globalmente, assim não será necessário importar a bibli-
// oteca localmente. Vamos instalar o "Nodemon"

// sudo npm install -g nodemon