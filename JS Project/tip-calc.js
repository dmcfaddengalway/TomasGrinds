let billAmount;
let tipAmount;
let finalBalance;
let discount;
let serverScore;
let tip;
const servers = ['Aoife', 'Eoin', 'Meadbh'];
const customers = ['Murphy', 'Keenan', 'DArcy'];
const bills = [118.56, 250.83, 90.45];
const tips = [0.2, 0.3, 0.45];

function getServer(server) {
  switch(server) {
    case 'Aoife':
      console.log('Aoife -- 0.2');
      return 0.2;
    case 'Eoin':
      console.log('Eoin -- 0.3');
      return 0.3;
    case 'Meadbh':
      console.log('Meadbh -- 0.1');
      return 0.1;
    default:
      return 0;
  }
}

function getBill(billIndex) {
  if (billIndex < 0 || billIndex > 2) {
    console.log('Error!');
    return 0.00; // not a valid option
  }
  return bills[billIndex];
}

function calculateBill(billChosen, serverChosen) {
  let bill = getBill(billChosen);
  console.log('Bill: ' + bill);

  discount = getServer(serverChosen);
  console.log('Discount: ' + bill * discount);

  finalBalance = bill - (bill * discount);
  console.log('Final Balance: ' + finalBalance);

  return finalBalance;
}

function getTip(x) {
  if (x < 33) {
    console.log('First');
    return tips[0];
  } else if (x > 33 && tip < 66) {
    console.log('Second');
    return tips[1];
  } else {
    console.log('Third');
    return tips[2];
  }
}

function calculateTipWithBill(billChosen, serverChosen) {
  let billCost = calculateBill(billChosen, serverChosen);
  console.log('Bill Cost: ' + billCost);
  let tipChoice = getTip(1 + Math.random() * 100);
  console.log('X: ' + tipChoice);
  let newBalance = billCost + (billCost * tipChoice); // We tip nicely
  console.log('Cost with Tip: ' + newBalance);
}

calculateTipWithBill(1, 'Aoife');
