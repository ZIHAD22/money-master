// income section
const calculateBtn = document.getElementById('calculate-btn')
const mainIncome = document.getElementById('total-income')
const foodCost = document.getElementById('cost-food')
const homeCost = document.getElementById('home-cost')
const clothesCost = document.getElementById('clothes-cost')
const exBalance = document.getElementById('expenses-blanc')
const withOutExBalances = document.getElementById('without-ex-blanc')
// Saving section
const savingBtn = document.getElementById('saving-btn')
const percentOfSave = document.getElementById('saving-input')
const savingTo = document.getElementById('saving-to')
const remainingBalance = document.getElementById('remaining-balance')
// validation
const validatorElement = document.getElementById('validation')

// income function
calculateBtn.addEventListener('click', function () {
  let incomeValue = parseInt(mainIncome.value)
  let foodCostValue = parseInt(foodCost.value)
  let homeCostValue = parseInt(homeCost.value)
  let clothesCostValue = parseInt(clothesCost.value)
  if (validator(incomeValue, foodCostValue, homeCostValue, clothesCostValue)) {
    let expensesValue = foodCostValue + homeCostValue + clothesCostValue
    let restBalance = incomeValue - expensesValue
    
    exBalance.innerText = expensesValue
    withOutExBalances.innerText = restBalance

    // saving function
    savingBtn.addEventListener('click', function () {
      if (percentOfSave.value) {
        const perSavingValue = parseInt(percentOfSave.value)
        const preRestBalance = restBalance
        const savingAmount = (restBalance * 20) / 100
        const lastBalance = preRestBalance - savingAmount
        savingTo.innerText = savingAmount
        remainingBalance.innerText = lastBalance
      } else {
        console.log('Please Enter a saving percent ')
      }
    })
  }
})

// validation text function
function validationText(text, nameOfClass) {
  validatorElement.innerText = text
  if (nameOfClass) {
    validatorElement.classList.add(nameOfClass)
  } else {
    validatorElement.classList.add('show')
  }
  return false
}

// negative input validation
function negInputValidate() {
  for (const value of arguments) {
    if (value < 0) {
      validationText('Please provide positive number')
    }
  }
}

// validation function
function validator(income, foodCostValue, rent, clothesCostValue) {
  if (!income && !foodCostValue && !rent && !clothesCostValue) {
    validationText(`Please Provide Your Details To Calculation`)
  } else if (!income) {
    validationText(`Please Provide your income on the income input `)
  } else if (!foodCostValue) {
    validationText(`Please Provide your Food Market Budget in Food Input`)
  } else if (!rent) {
    validationText(`Please Provide Your house rent on the rent value`)
  } else if (!clothesCostValue) {
    validationText(`Please Provide Your Market Budget In Clothe Input`)
  } else {
    validatorElement.classList.remove('show')
    return true
  }
  negInputValidate(income, foodCostValue, rent, clothesCostValue)
}
