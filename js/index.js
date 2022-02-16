const calculateBtn = document.getElementById("calculate-btn")
const mainIncome = document.getElementById("total-income");
const foodCost = document.getElementById("cost-food");
const homeCost = document.getElementById("home-cost");
const clothesCost = document.getElementById("clothes-cost");
const exBalance = document.getElementById("expenses-blanc");
const withOutExBalances = document.getElementById("without-ex-blanc");

// main function
calculateBtn.addEventListener("click" , function(){
   if(mainIncome.value){
    let incomeValue = parseInt(mainIncome.value);
    let foodCostValue = parseInt(foodCost.value);
    let homeCostValue = parseInt(homeCost.value);
    let clothesCostValue = parseInt(clothesCost.value);
    let expensesValue = foodCostValue + homeCostValue + clothesCostValue
    let restBalance = incomeValue - expensesValue
    exBalance.innerText = expensesValue;
    withOutExBalances.innerText = restBalance;
   }else{
       console.log("Please provide income value");
   }
})
