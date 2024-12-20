


//Converter tudo para string
function buscaInformacao(lista, chave, valor) {
  // find retorna caso a expressão seja true e includes verifica se tem no obj
  return lista.find((militar) => militar[chave].includes(valor));
}

const militarEncontrado = buscaInformacao(militares, "nome", "John");
console.log(militares);