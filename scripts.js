const convertButton = document.querySelector(".convert-button")

function convertValues (){

    const inputCurrencyValue = document.querySelector(".input-currency").value

    const dolartoday = 5.2

    const convertedValue = inputCurrencyValue / dolartoday

    console.log(convertedValue)
    
}
convertButton.addEventListener("click", convertValues)


