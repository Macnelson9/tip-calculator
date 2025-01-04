'use strict';

const billAmt = document.getElementById('bill-amount');
const tipPercentage = document.getElementById('tip-percentage');
const calcBtn = document.querySelector('.calc-btn');
const totalValue = document.querySelector('.total');
const splitBill = document.getElementById('split-bill');
const clearBtn = document.getElementById('clear-btn');
const fiveBtn = document.getElementById('five-btn');
const tenBtn = document.getElementById('ten-btn');
const fifteenBtn = document.getElementById('fifteen-btn');
const twentyBtn = document.getElementById('twenty-btn');
const fiftyBtn = document.getElementById('fifty-btn');
const hundredBtn = document.getElementById('hundred-btn');

const tipFunction = function (bill, tip, split) {
  bill = billAmt.value;
  tip = tipPercentage.value;
  split = splitBill.value;

  let total = bill * (1 + tip / 100);

  if (split > 1) {
    total /= split;
  } else {
    total;
  }

  totalValue.innerHTML = `Total: $${total.toFixed(2)}`;
};

calcBtn.addEventListener('click', tipFunction);

fiveBtn.addEventListener('click', function (bill, tip, split) {
  bill = billAmt.value;
  tip = tip === Number ? tipPercentage.value : fiveBtn.dataset.percentage;
  split = splitBill.value;

  let total = bill * (1 + tip / 100);

  if (split > 1) {
    total /= split;
  } else {
    total;
  }

  totalValue.innerHTML = `Total: $${total.toFixed(2)}`;
});

tenBtn.addEventListener('click', function (bill, tip, split) {
  bill = billAmt.value;
  tip = tip === Number ? tipPercentage.value : tenBtn.dataset.percentage;
  split = splitBill.value;

  let total = bill * (1 + tip / 100);

  if (split > 1) {
    total /= split;
  } else {
    total;
  }

  totalValue.innerHTML = `Total: $${total.toFixed(2)}`;
});

fifteenBtn.addEventListener('click', function (bill, tip, split) {
  bill = billAmt.value;
  tip = tip === Number ? tipPercentage.value : fifteenBtn.dataset.percentage;
  split = splitBill.value;

  let total = bill * (1 + tip / 100);

  if (split > 1) {
    total /= split;
  } else {
    total;
  }

  totalValue.innerHTML = `Total: $${total.toFixed(2)}`;
});

twentyBtn.addEventListener('click', function (bill, tip, split) {
  bill = billAmt.value;
  tip = tip === Number ? tipPercentage.value : twentyBtn.dataset.percentage;
  split = splitBill.value;

  let total = bill * (1 + tip / 100);

  if (split > 1) {
    total /= split;
  } else {
    total;
  }

  totalValue.innerHTML = `Total: $${total.toFixed(2)}`;
});

fiftyBtn.addEventListener('click', function (bill, tip, split) {
  bill = billAmt.value;
  tip = tip === Number ? tipPercentage.value : fiftyBtn.dataset.percentage;
  split = splitBill.value;

  let total = bill * (1 + tip / 100);

  if (split > 1) {
    total /= split;
  } else {
    total;
  }

  totalValue.innerHTML = `Total: $${total.toFixed(2)}`;
});

hundredBtn.addEventListener('click', function (bill, tip, split) {
  bill = billAmt.value;
  tip = tip === Number ? tipPercentage.value : hundredBtn.dataset.percentage;
  split = splitBill.value;

  let total = bill * (1 + tip / 100);

  if (split > 1) {
    total /= split;
  } else {
    total;
  }

  totalValue.innerHTML = `Total: $${total.toFixed(2)}`;
});

clearBtn.addEventListener('click', function () {
  billAmt.value = '';
  tipPercentage.value = '';
  splitBill.value = '';
  totalValue.innerHTML = 'Total: $0.00';
});
