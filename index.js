const washBtn = document.getElementById("wash-btn");
const lawnBtn = document.getElementById("lawn-btn");
const weedBtn = document.getElementById("weeds-btn");
const details = document.getElementById("details");
const amount = document.getElementById("amount");
const totalAmount = document.getElementById("total-amount");
const sendInvoice = document.getElementById("send");

let arr = [
  ["Wash Car", "Mow Lawn", "Pull Weeds"],
  [10, 20, 30],
];

function updateTotal() {
  var money = arr[0];
  var tot = 0;
  for (var i = 0; i < mo.length; i++) {
    if (parseFloat(money[i].value)) tot += parseFloat(money[i].value);
  }
  totalAmount.innerHTML = tot;
}

washBtn.addEventListener("click", function () {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[0][0]);
  }
  washBtn.disabled = true;
  details.innerHTML += `<ul><li>${arr[0][0]}</li></ul>`;
  amount.innerHTML += `<ul><li>${"$"} ${arr[1][0]}</li></ul>`;
  updateTotal();
});

lawnBtn.addEventListener("click", function () {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[0][1]);
  }
  lawnBtn.disabled = true;
  details.innerHTML += `<ul><li>${arr[0][1]} </li></ul>`;
  amount.innerHTML += `<ul><li>${"$"} ${arr[1][1]}</li></ul>`;
  updateTotal();
});

weedBtn.addEventListener("click", function () {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[0][2]);
  }
  weedBtn.disabled = true;
  details.innerHTML += `<ul><li>${arr[0][2]}</li></ul>`;
  amount.innerHTML += `<ul><li>${"$"} ${arr[1][2]}</li></ul>`;
  updateTotal();
});

sendInvoice.addEventListener("click", function () {
  window.location.reload();
});
