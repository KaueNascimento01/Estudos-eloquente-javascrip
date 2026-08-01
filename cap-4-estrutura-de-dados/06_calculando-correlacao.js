import { JOURNAL } from "./06_dados-correlacao.js";

function tableFor(event, journal) {
    let table = [0, 0,  0, 0];
    for ( let i = 0; i <  journal.length; i++ ){
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

console.log(tableFor("pizza", JOURNAL)); // [ 76, 9, 4, 1 ]

// Função que calcula a correlação (coenficiente phi)
function phi(table){
    // Cruzamento dos dados
    return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
    (table[0] + table[1]) *
    (table[1] + table[3]) *
    (table[0] + table[2]));
}

console.log(phi(tableFor("pizza", JOURNAL))); // 0.06859943405700354

function journalEvents(journal){
    let events = [];
    for(let entry of journal){
        for(let event of entry.events){
            if(!events.includes(event)){
                events.push(event)
            };
        }
    }
    return events;
}

for (let event of journalEvents(JOURNAL)){
    console.log(event + ":", phi(tableFor(event, JOURNAL)));
}

for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL));
    if (correlation > 0.1 || correlation < -0.1) {
        console.log(event + ":", correlation);
    }
}

for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth");
    }
}

console.log(phi(tableFor("peanut teeth", JOURNAL))); // 1