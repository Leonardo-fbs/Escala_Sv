//ORDENAÇÃO DE MILITAR
const militaresPuro = require('./soldados.json');// typeof object 
const militares = JSON.stringify(militaresPuro);
console.log(typeof militares);
function ordenarMilitar(lista, propriedade) {
    return lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) return -1;
        if (a[propriedade] > b[propriedade]) return 1;
        return 0;
    })
} 
const listaOrdenada = ordenarMilitar(militares, 'nome');
console.log(listaOrdenada);