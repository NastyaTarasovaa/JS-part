class Worker {
    constructor (name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
   
    getSalary () {
    console.log (this.rate*this.days);
    }
}

let worker1 = new Worker ('Иван', 'Иванов', 10, 31);
worker1.getSalary ();
console.log(worker1.name);
console.log(worker1.surname);
console.log(worker1.rate);
console.log(worker1.days);
