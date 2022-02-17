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
  if (
    validatorIncome(incomeValue, foodCostValue, homeCostValue, clothesCostValue)
  ) {
    let expensesValue = foodCostValue + homeCostValue + clothesCostValue
    let restBalance = incomeValue - expensesValue
    console.log(expensesValue, incomeValue, restBalance)
    if (
      totalBalanceValidation(expensesValue, incomeValue) &&
      negInputValidate(
        incomeValue,
        foodCostValue,
        homeCostValue,
        clothesCostValue,
      )
    ) {
      exBalance.innerText = expensesValue
      withOutExBalances.innerText = restBalance
    } else {
      exBalance.innerText = '00'
      withOutExBalances.innerText = '00'
    }

    // saving function
    savingBtn.addEventListener('click', function () {
      const perSavingValue = parseInt(percentOfSave.value)
      const preRestBalance = restBalance
      const savingAmount = (restBalance * perSavingValue) / 100
      const lastBalance = preRestBalance - savingAmount
      if (savingValidation(perSavingValue, preRestBalance, savingAmount)) {
        savingTo.innerText = savingAmount
        remainingBalance.innerText = lastBalance
      } else {
        savingTo.innerText = '00'
        remainingBalance.innerText = '00'
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

// total balance validation
function totalBalanceValidation(expensesValue, incomeValue) {
  if (expensesValue > incomeValue) {
    validationText(
      'Your Provided Income is low than Expense. Please Provide A Valid Income That Not Low Than Expense ',
    )
  } else {
    return true
  }
}

// negative input validation
function negInputValidate() {
  let result = ''
  for (const value of arguments) {
    if (value < 0) {
      validationText('Please provide positive number')
      result = value
      break
    }
  }

  if (result) {
    return false
  } else {
    return true
  }
}

// validation function for income section
function validatorIncome(income, foodCostValue, rent, clothesCostValue) {
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

// saving section validation
function savingValidation(perSavingValue, preRestBalance, savingAmount) {
  if (!perSavingValue || perSavingValue > 100) {
    validationText('Please Provide percentage under 100% of your Saving')
  } else if (perSavingValue < 0) {
    validationText(
      'Your Provided percentage is Negative Please Provide a Positive Number Of percentage',
    )
  } else if (savingAmount > preRestBalance) {
    validationText('Your Saving Amount is getter than current Balance ')
  } else {
    validatorElement.classList.remove('show')
    return true
  }
}
