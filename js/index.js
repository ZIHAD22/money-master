// income section
const calculateBtn = document.getElementById("calculate-btn")
const mainIncome = document.getElementById("total-income");
const foodCost = document.getElementById("cost-food");
const homeCost = document.getElementById("home-cost");
const clothesCost = document.getElementById("clothes-cost");
const exBalance = document.getElementById("expenses-blanc");
const withOutExBalances = document.getElementById("without-ex-blanc");
// Saving section
const savingBtn = document.getElementById("saving-btn")
const percentOfSave = document.getElementById("saving-input")
const savingTo = document.getElementById("saving-to")
const remainingBalance = document.getElementById("remaining-balance")


// income function
calculateBtn.addEventListener("click" , function(){
   if(mainIncome.value && homeCost.value && foodCost.value && clothesCost.value){
    let incomeValue = parseInt(mainIncome.value);
    let foodCostValue = parseInt(foodCost.value);
    let homeCostValue = parseInt(homeCost.value);
    let clothesCostValue = parseInt(clothesCost.value);
    let expensesValue = foodCostValue + homeCostValue + clothesCostValue
    let restBalance = incomeValue - expensesValue
    exBalance.innerText = expensesValue;
    withOutExBalances.innerText = restBalance;

    // saving function
    savingBtn.addEventListener("click" , function(){
       if(percentOfSave.value) {
        const perSavingValue = parseInt(percentOfSave.value);
        const preRestBalance = restBalance
        const savingAmount = (restBalance * 20) / 100
        const lastBalance = preRestBalance - savingAmount
        savingTo.innerText = savingAmount
        remainingBalance.innerText = lastBalance
       }else{
           console.log("Please Enter a saving percent ")
       }
    })


   }else{
       console.log("Please provide income value");
   }
})

