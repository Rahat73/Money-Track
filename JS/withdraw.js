document.getElementById('withdraw-btn').addEventListener('click', function () {

    //////     getting withdraw text value     //////
    const withdraw = document.getElementById('withdraw-value');
    const previousWithdraw = parseFloat(withdraw.innerText);

    //////     getting withdraw input value     //////
    const inputWithdraw = document.getElementById('input-withdraw');
    const inputWithdrawValue = parseFloat(inputWithdraw.value);

    //////     getting balance text value     //////
    const balance = document.getElementById('balance-value');
    const previousBalance = parseFloat(balance.innerText);

    if (isNaN(inputWithdrawValue)) {
        alert('Enter withdraw value');
        return;
    }

    if (previousBalance < inputWithdrawValue) {
        alert('Do not have sufficient money to withdraw');
        //////     resetting input field     //////
        inputWithdraw.value = '';
        return;
    }

    const newWithdraw = previousWithdraw + inputWithdrawValue;

    //////     setting new withdraw text value     //////
    withdraw.innerText = newWithdraw;

    const newBalance = previousBalance - inputWithdrawValue;

    //////     setting new balance text value     //////
    balance.innerText = newBalance;

    //////     resetting input field     //////
    inputWithdraw.value = '';
})