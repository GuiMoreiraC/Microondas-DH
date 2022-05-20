var readlineSync = require('readline-sync');
let nomeOpcao = '';
let tempoOpcao = 0;
let invalida = 0;
let tempoAdc = 0;

function microondas(opcao, tempo, tempoAdc) {
    tempoAdc == tempoAdc || 0;
    if (tempoAdc == 0) {
        console.log(`
        Prato pronto, bom apetite!!!
        
        O(A) ${opcao} Levou ${tempo} segundos para ficar pronto.

        ---------------------------------------------------------
        `);
    } else {
        if (tempoAdc < tempo) {
            console.log('\ntempo insuficiente');
        } else if (tempoAdc >= tempo * 3) {
            console.log('\nkabumm!!!');
        } else if (tempoAdc >= tempo * 2) {
            console.log('\ncomida queimou');
        } else {
            console.log(`
            Prato pronto, bom apetite!!!
            
            O(A) ${opcao} Levou ${tempoAdc} segundos para ficar pronto.
    
            ---------------------------------------------------------
            `);
        }
    }
}

/*
----------------------------------------------------------------------
Menu e entrada de dados
----------------------------------------------------------------------
*/
console.log(`

Menu Microondas:

[1] Pipoca
[2] Macarrão   
[3] Carne
[4] Feijão
[5] Brigadeiro 

`);

while (tempoOpcao <= 0) {
    let userInput = readlineSync.question(
        'Digite o número da opção desejada: '
    );
    switch (userInput) {
        case '1':
            nomeOpcao = 'Pipoca';
            tempoOpcao = 10;
            break;
        case '2':
            nomeOpcao = 'Macarrão';
            tempoOpcao = 8;
            break;
        case '3':
            nomeOpcao = 'Carne';
            tempoOpcao = 15;
            break;
        case '4':
            nomeOpcao = 'Feijão';
            tempoOpcao = 12;
            break;
        case '5':
            nomeOpcao = 'Brigadeiro';
            tempoOpcao = 8;
            break;
        default:
            console.log('Prato inexistente');
    }
}
console.log(
    '\nA Opção',
    nomeOpcao,
    'levara',
    tempoOpcao,
    'Segundos para ficar pronto(a)'
);

while (invalida == 0) {
    let resposta = readlineSync.question(
        'Deseja auterar o tempo padrão? (s|n): '
    );
    switch (resposta) {
        case 's':
            tempoAdc = readlineSync.question(
                '\nQuanto tempo (segundos) deseja programar: '
            );
            invalida = 1;
            break;

        case 'n':
            invalida = 1;
            break;

        default:
            invalida = 0;
            console.log('\nOpção invalida');
            break;
    }
}

microondas(nomeOpcao, tempoOpcao, tempoAdc);
