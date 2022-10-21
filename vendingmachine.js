function* vendingMachine() {
  let moneySum = 0;
  let selected;
  const priceTable = {
    'bepsi': 200,
    'cola': 220,
    'fanta': 240
  };

  console.log(`select drink: ${Object.keys(priceTable)}`);

  selected = yield;

  while(!Object.keys(priceTable).includes(selected)) {
    console.log('not on the list');

    selected = yield;
  }

  console.log('good choice! The price is: ', priceTable[selected])

  moneySum = yield;

  while(moneySum !== priceTable[selected]) {
    console.log('gimme more money.', priceTable[selected] - moneySum, 'more needed');

    moneySum += yield;
  }

  console.log(`Thanks. Here you go: ${selected}`);

  return selected;
 }

window.transaction = vendingMachine();

