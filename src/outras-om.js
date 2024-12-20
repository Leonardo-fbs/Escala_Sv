// requirindo dados de militares de outra om
// necessario converter obj de json para string para salvar no banco de dados
const omPuro = require('./om.json');// typeof object 
const om = JSON.stringify(omPuro);

console.log(om);