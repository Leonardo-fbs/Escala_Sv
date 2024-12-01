// Database de militares Evoluir para API
const soldados = [{ nome: "John", patente: "sd", numero: 1, status: false, red: true }, { nome: "martins", patente: "sd", numero: 2, status: false, red: true }, { nome: "junior", patente: "sd", numero: 3, status: false, red: false }, { nome: "santos", patente: "sd", numero: 4, status: true, red: true }, { nome: "leonardo", patente: "sd", numero: 5, status: true, red: false }, { nome: "cleiton", patente: "sd", numero: 6, status: true, red: true }, { nome: "oliveira", patente: "sd", numero: 7, status: true, red: true }, { nome: "almeida", patente: "sd", numero: 8, status: true, red: false }, { nome: "rocha", patente: "sd", numero: 9, status: true, red: true }, { nome: "ferreira", patente: "sd", numero: 10, status: true, red: true }];
const cabo = [{ nome: "alves", patente: "cabo", numero: 1, status: true, red: false }, { nome: "noienove", patente: "cabo", numero: 2, status: true, red: false }, { nome: "colin", patente: "cabo", numero: 3, status: true, red: false }, { nome: "forte", patente: "cabo", numero: 4, status: true, red: true }, { nome: "fernandes", patente: "cabo", numero: 5, status: true, red: true }]
const sgt = [{ nome: "pereira", patente: "sgt", numero: 1, status: true, red: false }, { nome: "nascimento", patente: "sgt", numero: 2, status: true, red: true }, { nome: "silva", patente: "sgt", numero: 3, status: true, red: false }, { nome: "souza", patente: "sgt", numero: 4, status: true, red: true }, { nome: "mendes", patente: "sgt", numero: 5, status: true, red: true }]
const tentente = [{ nome: "fradinha", patente: "ten", numero: 1, status: true, red: false }, { nome: "morte frona", patente: "ten", numero: 2, status: true, red: true }, { nome: "sem honra", patente: "ten", numero: 3, status: true, red: false }, { nome: "0", patente: "ten", numero: 4, status: true, red: true }, { nome: "negativo", patente: "ten", numero: 5, status: true, red: false }, { nome: "colado", patente: "ten", numero: 6, status: true, red: true }]
const superior = [{ nome: "moida", patente: "cap", numero: 1, status: true, red: false }, { nome: "soneca", patente: "cap", numero: 2, status: true, red: true }, { nome: "negao", patente: "cap", numero: 3, status: true, red: true }, { nome: "ditador", patente: "cap", numero: 4, status: true, red: true }]

// Todos militares
const militares = [...soldados, ...cabo, ...sgt, ...tentente, ...superior];

// quantidade de escalados JEITO BURRO
// let qtdSoldados = 2;
// let qtdCabos = 1;
// let qtdSgts = 1;
// let qtdTen = 1;
// let qtdSup = 1;


// Todos mlitares de SV, Edital concluido.
let escalados = [];

// JEITO BURRO Militares c/Escala confirmada
// let sdEscalados = 0;
// let cbEscalados = 0;
// let sgtEscalados = 0;
// let tenEscalados = 0;
// let supEscalados = 0;

// JEITO MUITO BURRO DE FAZER (EV)
// function criarEscala() {
//     //add validção de qtd como status e se já tirou serviço
//     for (i = 0; i < militares.length; i++) {
//         if (militares[i].status === true) {// validação se é possivel tirar SV
//             if (militares[i].patente === "sd" && sdEscalados < qtdSoldados) {
//                 escalados.push(militares[i]);
//                 militares[i].status = false;
//                 sdEscalados++;
//             } else if (militares[i].patente === "cabo" && cbEscalados < qtdCabos) {
//                 console.log("hop");
//                 escalados.push(militares[i]);
//                 militares[i].status = false;
//                 cbEscalados++;
//             } else if (militares[i].patente === "sgt" && sgtEscalados < qtdSgts) {
//                 escalados.push(militares[i]);
//                 militares[i].status = false;
//                 sgtEscalados++;
//             } else if (militares[i].patente === "ten" && tenEscalados < qtdTen) {
//                 escalados.push(militares[i]);
//                 militares[i].status = false;
//                 tenEscalados++;
//             } else if (militares[i].patente === "cap" && supEscalados < qtdSup) {
//                 escalados.push(militares[i]);
//                 militares[i].status = false;
//                 supEscalados++;
//             }
//         }
//     }
//     return console.log(escalados);
// }

// JEITO NÃO BURRO DE FAZER (MENOS)
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
criarEdital('sd', 4, false);
criarEdital('ten', 1, false);