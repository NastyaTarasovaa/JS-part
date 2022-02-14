function calcPrice() {
    let brand = +document.getElementById("brandcar").value;
    let year = document.getElementById("year").value;
    let mile = document.getElementById("mileage").value;
    let body = +document.getElementById("bodytype").value;
    let fuel = document.querySelector('input[name="fuelRadio"]:checked').value;
    let engine = +document.getElementById("enginesize").value;
    let power = +document.getElementById("power").value;
    let trans = +document.getElementById("transmission").value;

    switch (true) {
        case (year < 2000):
            year = +1;
            break;
        case (2000 <= year && year < 2010):
            year = +2;
            break;
        case (2010 <= year && year < 2015):
            year = +3;
            break;
        case (2015 <= year && year < 2020):
            year = +4;
            break;
        case (2020 < year):
            year = +5;
            break;
    }

    switch (true) {
        case (mile > 200000):
            mile = +1;
            break;
        case (mile <= 200000 && mile > 150000):
            mile = +2;
            break;
        case (mile <= 150000 && mile > 100000):
            mile = +3;
            break;
        case (mile <= 100000 && mile > 50000):
            mile = +4;
            break;
        case (mile <= 50000 && mile > 10000):
            mile = +5;
            break;
        case (mile < 10000):
            mile = +6;
            break;
    }

    switch (fuel) {
        case "petrol":
            fuel = 100;
            break;
        case "diesel":
            fuel = 150;
            break;
        case "electric":
            fuel = 200;
            break;
    }

    console.log(brand, typeof (brand));
    console.log(year, typeof (year));
    console.log(mile, typeof (mile));
    console.log(body, typeof (body));
    console.log(fuel, typeof (fuel));
    console.log(engine, typeof (engine));
    console.log(power, typeof (power));
    console.log(trans, typeof (trans));

    let sum = 1000 * ((brand + year + mile + trans) * (body + fuel + power)) / engine;
    sum = Math.round(sum);
    alert(`Предполагаемая стоимость автомобиля:  ` + (sum) + `  р.`);
    return sum;
}