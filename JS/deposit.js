document.getElementById('deposite-btn').addEventListener('click', function () {

    //////     getting deposite text value     //////
    const deposite = document.getElementById('deposite-value');
    const previousDeposite = parseFloat(deposite.innerText);

    //////     getting deposite input value     //////
    const inputDepositeString = document.getElementById('input-deposite');
    const inputDeposite = parseFloat(inputDepositeString.value);

    if (isNaN(inputDeposite)) {
        alert('Enter deposite value');
        return;
    }

    const newdeposite = previousDeposite + inputDeposite;

    //////     setting new deposite text value     //////
    deposite.innerText = newdeposite;

    //////     getting balance text value     //////
    const balance = document.getElementById('balance-value');
    const previousBalance = parseFloat(balance.innerText);

    const newBalance = previousBalance + inputDeposite;

    //////     setting new balance text value     //////
    balance.innerText = newBalance;

    //////     resetting input field     //////
    inputDepositeString.value = '';
})