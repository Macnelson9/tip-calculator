'use strict';

const billAmt = document.getElementById('bill-amount');
const tipPercentage = document.getElementById('tip-percentage');
const calcBtn = document.querySelector('.calc-btn');
const totalValue = document.querySelector('.total');

const tipFunction = function (bill, tip) {
  bill = billAmt.value;
  tip = tipPercentage.value;
  const total = bill * (1 + tip / 100);

  totalValue.innerHTML = `Total: $${total.toFixed(2)}`;
};

calcBtn.addEventListener('click', tipFunction);

const fiveBtn = document.getElementById('five-btn');
fiveBtn.addEventListener('click', function (bill, tip) {
  bill = billAmt.value;
  tip = tip === Number ? tipPercentage.value : fiveBtn.dataset.percentage;

  const total = bill * (1 + tip / 100);

  totalValue.innerHTML = `Total: $${total.toFixed(2)}`;
});

const tenBtn = document.getElementById('ten-btn');
tenBtn.addEventListener('click', function (bill, tip) {
  bill = billAmt.value;
  tip = tip === Number ? tipPercentage.value : tenBtn.dataset.percentage;

  const total = bill * (1 + tip / 100);

  totalValue.innerHTML = `Total: $${total.toFixed(2)}`;
});

const fifteenBtn = document.getElementById('fifteen-btn');
fifteenBtn.addEventListener('click', function (bill, tip) {
  bill = billAmt.value;
  tip = tip === Number ? tipPercentage.value : fifteenBtn.dataset.percentage;

  const total = bill * (1 + tip / 100);

  totalValue.innerHTML = `Total: $${total.toFixed(2)}`;
});

const twentyBtn = document.getElementById('twenty-btn');
twentyBtn.addEventListener('click', function (bill, tip) {
  bill = billAmt.value;
  tip = tip === Number ? tipPercentage.value : twentyBtn.dataset.percentage;

  const total = bill * (1 + tip / 100);

  totalValue.innerHTML = `Total: $${total.toFixed(2)}`;
});

const fiftyBtn = document.getElementById('fifty-btn');
fiftyBtn.addEventListener('click', function (bill, tip) {
  bill = billAmt.value;
  tip = tip === Number ? tipPercentage.value : fiftyBtn.dataset.percentage;

  const total = bill * (1 + tip / 100);

  totalValue.innerHTML = `Total: $${total.toFixed(2)}`;
});

const hundredBtn = document.getElementById('hundred-btn');
hundredBtn.addEventListener('click', function (bill, tip) {
  bill = billAmt.value;
  tip = tip === Number ? tipPercentage.value : hundredBtn.dataset.percentage;

  const total = bill * (1 + tip / 100);

  totalValue.innerHTML = `Total: $${total.toFixed(2)}`;
});

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', function () {
  billAmt.value = '';
  tipPercentage.value = '';
  totalValue.innerHTML = 'Total: $0.00';
});
