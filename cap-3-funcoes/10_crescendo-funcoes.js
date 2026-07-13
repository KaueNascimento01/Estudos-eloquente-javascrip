// primeira versao: abordagem direta e repetitiva
function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = '0' + cowString;
  }
  console.log(`${cowString} Cows`);

  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = '0' + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);
// 007 Cows
// 011 Chickens
// undefined Pigs
// nota: a saída acima gera 'undefined Pigs' porque esta função foi sobrescrita pelo hoisting

// primeira refatoracao: isolando a logica de preenchimento e etiqueta
function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = '0' + numberString;
  }
  console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, 'Cows');
  printZeroPaddedWithLabel(chickens, 'Chickens');
  printZeroPaddedWithLabel(pigs, 'Pigs');
}

printFarmInventory(7, 11, 3);
// 007 Cows
// 011 Chickens
// 003 Pigs

// segunda refatoracao: criando uma funcao utilitaria pura e generica
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = '0' + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);
// 007 Cows
// 016 Chickens
// 003 Pigs