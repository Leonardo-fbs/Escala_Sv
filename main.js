// Database de militares Evoluir para API

// Todos militares
// const militares = [...soldados, ...cabo, ...sgt, ...tentente, ...superior];



militares = [...outrasom.om];
console.log(militares);

// Todos mlitares de SV, Edital concluido.
let escalados = [];

function criarEdital(rank, qtd, lineup = true) {
    let meter = 0;
    for (i = 0; i < militares.length; i++) {
        // validação se é possivel tirar SV
        if (lineup) {
            if (militares[i].status === true && militares[i].patente === rank && meter < qtd) {
                escalados.push(militares[i]);
                militares[i].status = false;
                meter++;
            }
        } else {
            if (militares[i].red == false) {
                if (militares[i].status === true && militares[i].patente === rank && meter < qtd) {
                    escalados.push(militares[i]);
                    militares[i].status = false;
                    meter++;
                }
            }

        }

    }
    return console.log(escalados);
}
// criarEdital('sd', 4, false);
// criarEdital('ten', 1, false);
