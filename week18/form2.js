
let errors = [];
function checkValidity (input) {
    let validity = input.validity;

    if (validity.patternMismatch)
    { errors.push ('Неверный формат заполнения');}

    if (validity.rangeOverflow)
    { let max= input.max;
    errors.push ('Максимальное значение не может быть больше чем'+max); }

    if (validity.rangeUnderflow)
    { let min = input.min;
    errors.push ('Минимальное значение не может быть больше чем' + min);}

if (validity.valueMissing) { errors.push('Поле не заполнено');}

}

function ValidateEmail(emailField) {
    var mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (emailField.value.match(mailFormat)) {
        return true;
    }
    else {
        alert("Ваш адрес электронной почты введен неверно!");
        return false;
    }
}

function checkAll() {
    errors = [];
    let inputs = document.querySelectorAll("input");

    for (let input of inputs) {
        checkValidity (input);
    }

document.getElementById ('errorsInfo').innerHTML = errors.join('.<br>');
}