function sumInput() {
    let numbers = [];
    let sortNumbers = [];
    while (true) {
        let value = prompt("Введите число");
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }
    console.log(numbers);

    function sortMass(a, b) {
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0;
        }
    }

    numbers.sort(sortMass);
    for (let i = 0; i < numbers.length; i++) {
        sortNumbers = sortNumbers + numbers[i] + ` `;
    }
    document.getElementById('resultsort').innerHTML = `Массив отсортирован по возрастанию:  ` + sortNumbers;
    console.log(`Массив отсортирован:  ` + sortNumbers);

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

alert(`Сумма введенных чисел равна:  ` + sumInput());