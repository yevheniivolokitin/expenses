let expenses = [];
let selectT = [];

const inputExpense = document.getElementById("inputExpense");
const inputButton = document.getElementById("inputButton");
const inputSelect = document.getElementById("select-type");
const historyNode = document.getElementById("history");
const questLimitNode = document.getElementById("questLimit");
const quest = document.getElementById("quest");
const allExpense = document.getElementById("allExpense");
const statusNode = document.getElementById("status");
const POSITIVE = "positive";
const NEGATIVE = "negative";
const posText = "Всё хорошо";
const negText = "Перебор";
var limitComparison = 0,
   number = 0;
limitQ = "";

quest.addEventListener("click", function () {
   askLimit();
});
inputButton.addEventListener("click", function () {
   if (!inputExpense.value) {
      return;
   }
   const expense = parseInt(inputExpense.value);
   const select = inputSelect.value;
   expenses.push(expense);
   selectT.push(select);
   inputExpense.value = "";
   expensesListHTML += `<li class="listOne">${expense}  $. - ${select}</li>`;
   historyNode.innerHTML = `<ol>${expensesListHTML}</ol>`;
   allSum();
   comparison(limitComparison, number);
});
expensesListHTML = "";
function askLimit() {
   limitQ = prompt("Задайте лимит", "");
   questLimitNode.innerText = limitQ + " $";
   limitComparison = parseInt(limitQ);
   comparison(limitComparison, number);
   return limitComparison;
}
function allSum() {
   let sum = 0;
   expenses.forEach((element) => {
      sum += element;
   });
   allExpense.innerText = sum + " $";
   number = parseInt(sum);
   return number;
}

function comparison(limitComparison, number) {
   if (limitComparison >= number) {
      statusNode.innerText = posText;
      statusNode.classList.add(POSITIVE);
      statusNode.classList.remove(NEGATIVE);
   } else {
      statusNode.innerText = negText;
      questLimitNode.innerText =
         limitQ + " $" + "(" + (limitComparison - number) + ")";
      statusNode.classList.remove(POSITIVE);
      statusNode.classList.add(NEGATIVE);
   }
   console.log(limitComparison, number);
}
