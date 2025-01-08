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
});

// This button resets or clears the calculator
clearBtn.addEventListener('click', function () {
  billAmt.value = '';
  tipPercentage.value = '';
  splitBill.value = '';
  document.getElementById('currencies').selectedIndex = 0;
  totalValue.innerHTML = 'Total: $0.00';
});

const containerBoxes = document.querySelectorAll('.box');
console.log(containerBoxes);
// const transactions = {
//   movements: [232, 283787, 2634736, 28763],
//   movementsDates: [
//     '2019-11-01T13:15:33.035Z',
//     '2019-11-30T09:48:16.867Z',
//     '2019-12-25T06:04:23.907Z',
//     '2020-01-25T14:18:46.235Z',
//     '2020-02-05T16:33:06.386Z',
//     '2020-04-10T14:43:26.374Z',
//     '2020-06-25T18:49:59.371Z',
//     '2020-07-26T12:01:20.894Z',
//   ],
//   currency: 'EUR',
//   locale: 'pt-PT',
// };

// // History function
// const formatMovementDate = function (date, locale) {
//   const calcDaysPassed = (date1, date2) =>
//     Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

//   const daysPassed = calcDaysPassed(new Date(), date);
//   console.log(daysPassed);

//   if (daysPassed === 0) return 'Today';
//   if (daysPassed === 1) return 'Yesterday';
//   if (daysPassed <= 7) return `${daysPassed} days ago`;
//   else {
//     return new Intl.DateTimeFormat(locale).format(date);
//   }
// };

// const displayHistory = function (acc, sort = false) {
//   containerBoxes.innerHTML = '';

//   const histories = sort
//     ? acc.movements.slice().sort((a, b) => a - b)
//     : acc.movements;

//   histories.forEach(function (mov, i) {
//     // const type = mov > 0 ? 'deposit' : 'withdrawal';

//     const date = new Date(acc.movementsDates[i]);

//     const displayDate = formatMovementDate(date, acc.locale);

//     const formattedMov = formatCur(mov, acc.locale, acc.currency);

//     const html = `
//      <div class="box-container">
//       <div class="box box-one">
//         <h2>Date</h2>
//         <p class="history-date">${i + 1}. ${displayDate}</p>
//       </div>
//       <div class="box box-two">
//         <h2>Narration</h2>
//         <p class="history-narration">${i + 1}. Soda, Fries and Smoothie</p>
//       </div>
//       <div class="box box-three">
//         <h2>Amount</h2>
//         <p class="history-amount">${i + 1}. ${formattedMov}</p>
//       </div>
//     </div>
//     `;

//     containerBoxes.insertAdjacentHTML('afterbegin', html);
//   });
// };

// displayHistory(transactions);
