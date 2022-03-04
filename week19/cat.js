class Cat {
    constructor (name, name2, phone){
        this.name = name;
        this.name2 = name2;
        this.phone = phone;
    }
}
function addCat () {
    let name = document.getElementById("name").value;
    let name2 = document.getElementById("name2").value;
    let phone = document.getElementById("phone").value;
}
let cat = new Cat();
console.log(cat);
