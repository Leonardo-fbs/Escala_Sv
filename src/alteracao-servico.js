function alteracaoServico(infração, numeroMilitar, grau) {
    const alteracao = new Date();
    // não usar o getUTC para hora, usar o getHours pois UTC (Tempo Universal Coordenado) 
    return console.log(`
        Alteração de serviço: ${infração}\n
        Ocorrido: ${alteracao}\n
        Militares envolvidos:${numeroMilitar}\n
        Grau da alteração: ${grau}
    `);
    // De acordo com a documentação do developer mozilla, a data do 
    // JavaScript é baseada no valor de tempo em milissegundos desde
    // a meia noite de 01 de Janeiro de 1970, UTC.
}alteracaoServico("Disparo acidental", 857, 'alto');

