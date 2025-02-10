let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

// Function to calculate the tip
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

let i = 0;
while (i < bills.length) {
  let tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);

  i++;
}

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);
