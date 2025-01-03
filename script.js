'use strict';

const billAmt = document.getElementById('bill-amount');
const tipPercentage = document.getElementById('tip-percentage');
const calcBtn = document.querySelector('.calc-btn');
const totalValue = document.querySelector('.total');

calcBtn.addEventListener('click', function (e) {
  e.preventDefault();

  const billValue = billAmt.value;
  const tipValue = tipPercentage.value;

  const total = billValue * (1 + tipValue / 100);

  totalValue.innerHTML = `Total: $${total.toFixed(2)}`;
});
