'use strict';

// Selected elements
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

// Currency formatter function
const formatCur = function (amount, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

// Tipping function
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

  let currencyLocale = document.getElementById('currencies');
  let currencyValue = document.getElementById('currencies');

  // This logic ensures that the selected currency by the user is the one to be formatted and output
  if (currencyLocale.selectedIndex === currencyValue.selectedIndex) {
    currencyLocale = currencyLocale.dataset.locale;
    currencyValue = currencyValue.value;

    totalValue.innerHTML = `Total: ${formatCur(
      total.toFixed(2),
      currencyLocale,
      currencyValue
    )}`;
  } else {
    alert('Please select a currency');
  }
};

calcBtn.addEventListener('click', tipFunction);

// Logics for the percentage buttons
const calculateTips = function (bill, tip, split) {
  bill = billAmt.value;
  tip = tip === Number ? tipPercentage.value : this.dataset.percentage;
  split = splitBill.value;

  let total = bill * (1 + tip / 100);

  if (split > 1) {
    total /= split;
  } else {
    total;
  }

  let currencyLocale = document.getElementById('currencies');
  let currencyValue = document.getElementById('currencies');

  if (currencyLocale.selectedIndex === currencyValue.selectedIndex) {
    currencyLocale = currencyLocale.dataset.locale;
    currencyValue = currencyValue.value;

    totalValue.innerHTML = `Total: ${formatCur(
      total.toFixed(2),
      currencyLocale,
      currencyValue
    )}`;
  } else {
    alert('Please select a currency');
  }
};

fiveBtn.addEventListener('click', calculateTips);
tenBtn.addEventListener('click', calculateTips);
fifteenBtn.addEventListener('click', calculateTips);
fiftyBtn.addEventListener('click', calculateTips);
hundredBtn.addEventListener('click', calculateTips);

// This button resets or clears the calculator
clearBtn.addEventListener('click', function () {
  billAmt.value = '';
  tipPercentage.value = '';
  splitBill.value = '';
  document.getElementById('currencies').selectedIndex = 0;
  totalValue.innerHTML = 'Total: $0.00';
});
