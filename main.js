let bill = document.querySelector('.input-bill');
let billNumber = parseInt(bill.value);
console.log(billNumber);

let people = document.querySelector('.input-people');
let peopleNumber = parseInt(people.value);

let tipResult = document.querySelector('.results__value');
let totalResult = document.querySelector('.results__total--value');
let buttons = document.querySelectorAll('.btns__button');
let alert = document.querySelector('#alert');

let tipValue = 5;
buttons.forEach(element => {
    element.addEventListener('click', event => {
        //Cambiar color
        buttons.forEach(element => {
            element.classList.remove('button--selected');
        })
        element.classList.add('button--selected');
        tipValue = parseInt(event.target.innerText.slice(0, -1));
        calculateTip()
    });
})

//Actualizando bill

bill.addEventListener('input', () => {
    billNumber = parseFloat(bill.value);
    calculateTip();
})

//Actualizando custom
let custom = document.querySelector('.btns__custom');
custom.addEventListener('input', () => {
    tipValue = parseInt(custom.value);
    if (isNaN(tipValue)) {

    }else {
        calculateTip();
    }
});

//Actualizando personas
people.addEventListener('input', () => {
    peopleNumber = parseFloat(people.value);

    if (peopleNumber == 0 || isNaN(peopleNumber)) {
        people.style.borderColor = 'rgb(164, 68, 68)';
        alert.classList.add('error');
    } else {
        alert.classList.remove('error');
        people.style.borderColor = 'hsl(189, 41%, 97%)';
        calculateTip()
    }
});

//Reset
let resetBtn = document.querySelector('.results__button');
resetBtn.addEventListener('click', () => {
    bill.value = 0;
    billNumber = 0;
    people.value = 5;
    peopleNumber = 5;
    custom.value = 'Custom';
    calculateTip();

});
 

function calculateTip() {
    //Calculo de Tip Amount
    tipResult.innerText = ((billNumber * tipValue / 100) / peopleNumber).toFixed(2);

    //Calculo total
    totalResult.innerText = (((billNumber * tipValue / 100) + billNumber) / peopleNumber).toFixed(2);
    
}




























