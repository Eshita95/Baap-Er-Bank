/* function doubleIt(num){
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7); */

function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear deposit input field
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFiledId, amount){
    const totalElemnt = document.getElementById(totalFiledId);
    const totalText = totalElemnt.innerText;
    const previousTotal = parseFloat(totalText);
    // depositTotal.innerText = newDepositTotal;
    totalElemnt.innerText = previousTotal + amount;
}


// handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function(){
    const newDepositAmount = getInputValue('deposit-input');
    updateTotalField('deposit-total', newDepositAmount);
    // get the amount deposited
   /* const depositInput = document.getElementById('deposit-input');
   const newDepositAmountText = depositInput.value;
   const newDepositAmount = parseFloat(newDepositAmountText); */

    // add deposit amount
 
   /* const depositTotal = document.getElementById('deposit-total');
   const previousDepositText = depositTotal.innerText;
   const previousDepositAmount = parseFloat(previousDepositText);
   const newDepositTotal = previousDepositAmount + newDepositAmount; */
   
    //depositTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
/* 
    // clear deposit input field
    depositInput.value = '';
 */
    
});

// handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function(){

    const newWithdrawAmount = getInputValue('withdraw-input');
    updateTotalField('withdraw-total', newWithdrawAmount);
    // get the withdraw amount
   /*  const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText); */
    

    // add withdraw amount
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal; */
    

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    


});



