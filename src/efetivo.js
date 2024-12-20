const sd = require('../json/soldados.json');
const cb = require('../json/cabos.json');
const sgt = require('../json/sargentos.json');
const sup = require('../json/superiores.json');
const other = require('../json/om.json');

const dadosCombinados = { sd, cb, sgt, sup, other};

const militares = JSON.parse(JSON.stringify(dadosCombinados));
export default militares;