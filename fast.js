
//login button
const loginControl = document.getElementById("login");
loginControl.addEventListener('click', function () {
    const logArea = document.getElementById("login-area");
    logArea.style.display = "none";
    const TransactionArea = document.getElementById('Transaction-Area');
    TransactionArea.style.display = "block";
})

//deposit button
const depositButton = document.getElementById('addDeposit');
depositButton.addEventListener('click', function () {
    const depositNumber = getInputNumber('amount');
    
    
    updateSpanNumber('current-Deposit', depositNumber);
    
    updateSpanNumber('current-balance',depositNumber)

    document.getElementById('amount').value = "";
})

// withdraw button
const withDrawButton = document.getElementById('addWithdraw');
withDrawButton.addEventListener('click', function(){

 const withdrawNumber =  getInputNumber('withdrawAmount');
    updateSpanNumber('current-withdraw', withdrawNumber);
    updateSpanNumber('current-balance',-1*withdrawNumber)

    document.getElementById('withdrawAmount').value = "";
})


function getInputNumber(id) {
    const Amount = document.getElementById(id).value;

    const Number = parseFloat(Amount);

    return Number;
}


function updateSpanNumber(id,depositNumber) {
    const currentNumber= document.getElementById(id).innerText;
    const currentNewNumber = parseFloat(currentNumber);
    const totalNumber = currentNewNumber + depositNumber;

    document.getElementById(id).innerText = totalNumber;
    
}
