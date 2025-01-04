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
fiveBtn.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('I was clicked!!');
});
