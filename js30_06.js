// task1
function click1() {
    const number = document.querySelector('#num1').value;
    sqrt(number);
}

function sqrt(number) {
    const res = number ** 2;
    document.querySelector('#sqrt').value = res;
    //console.log(res);
};

// task2
// const sales_amount = prompt('Введите сумму продаж в $');

// function result_task2(sales_amount) {
//     return res = 250 + (sales_amount * 0.1);
// };
// alert(result_task2(sales_amount));

// tast3
function click3() {
    const namePlanet = document.getElementById('name_planet').value;
    if (namePlanet.toLowerCase() === 'земля') {
        document.getElementById('output__greetings').value = 'Привет землянин!!!'
    } else if (namePlanet === 'Введите название планеты') {
        document.getElementById('output__greetings').value = 'Вы не ввели название планеты!!!'
    } else {
        document.getElementById('output__greetings').value = 'Привет инопланетянин!!!'
    }
}

// task4

function click4() {
    let temp_value = document.querySelector('#initial_volume').value;
    const min_value = 10;
    let count = 0;
    while (temp_value > min_value) {
        temp_value = temp_value - (temp_value * 0.1);
        if (temp_value > min_value) {
            count++;
            console.log(temp_value + " " + count);
        }
    }
    span_id = document.querySelector('#amountOfDays').value = count;
}

// task5

const click_button5 = document.getElementById('button5');

click_button5.onclick = () => {
    const num1 = parseInt(document.querySelector('#first_number').value);
    const num2 = parseInt(document.querySelector('#second_number').value);

    minNumber(num1, num2);
};

function minNumber(num1, num2) {
    if (num1 <= num2) {
        document.getElementById('min_number').value = num1;
    } else {
        document.getElementById('min_number').value = num2;
    }
};

// task6

function click_true() {
    const num_from = document.querySelector('#from').value;
    const num_to = document.querySelector('#to').value;
    let arrEvenNumbers = [];

    for (let index = num_from; index <= num_to; index++) {
        if (index % 2 == 0) {
            arrEvenNumbers.push(index);
        }
    }
    document.querySelector('#output__numbers').value = `Четные числа:  ${arrEvenNumbers}.`;
};

function click_false() {
    const num_from = document.querySelector('#from').value;
    const num_to = document.querySelector('#to').value;
    let arrAddNumbers = [];

    for (let index = num_from; index <= num_to; index++) {
        if (index % 2 !== 0) {
            arrAddNumbers.push(index);
        }
    }
    document.querySelector('#output__numbers').value = `Нечетные числа:  ${arrAddNumbers}.`;
};