document.getElementById('deposite-btn').addEventListener('click', function () {

    //////     getting deposite text value     //////
    const deposite = document.getElementById('deposite-value');
    const previousDeposite = parseFloat(deposite.innerText);

    //////     getting deposite input value     //////
    const inputDeposite = document.getElementById('input-deposite');
    const inputDepositeValue = parseFloat(inputDeposite.value);

    if (isNaN(inputDepositeValue)) {
        alert('Enter deposite value');
        return;
    }

    const newdeposite = previousDeposite + inputDepositeValue;

    //////     setting new deposite text value     //////
    deposite.innerText = newdeposite;

    //////     getting balance text value     //////
    const balance = document.getElementById('balance-value');
    const previousBalance = parseFloat(balance.innerText);

    const newBalance = previousBalance + inputDepositeValue;

    //////     setting new balance text value     //////
    balance.innerText = newBalance;

    //////     resetting input field     //////
    inputDeposite.value = '';
})