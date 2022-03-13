let json = `[{
    "name":"Бэтмен",
    "universe":"DC Comics",
    "ego":"Брюс Уэйн",
    "activity":"борец с преступностью, филантроп",
    "friends":"Робин, Бэтгерл",
    "strength":"интеллект, боевые искусства, ловкость",
    "photo":"assets/images/547x397_0xac120002_8752067681540468870.jpg"
    
},{
    "name":"Супермен",
    "universe":"DC Comics",
    "ego":"Кларк Кент",
    "activity":"борец за справедливость ",
    "friends":"собака Крипто",
    "strength":"непробиваемость, полет, самоисцеление",
    "photo":"assets/images/547x397_0xac120002_45567661540468871.jpg"
    
},{
    "name":"Железный человек",
    "universe":"Marvel Comics",
    "ego":"Тони Старк",
    "activity":"гений, филантроп",
    "friends":"Мстители",
    "strength":"интеллект, бронекостюмы, связь со всемирной паутиной",
    "photo":"assets/images/547x397_0xac120002_1773711401540468871.jpg"
    
},{
    "name":"Человек-паук",
    "universe":"Marvel Comics",
    "ego":"Питер Паркер",
    "activity":"борец за справедливость, студент",
    "friends":"Мстители, Фантастическая четверка",
    "strength":"сверхчеловеческие рефлексы, паучье чутье",
    "photo":"assets/images/547x397_0xac120002_9548247751540468871.jpg"
    
},{
    "name":"Капитан Америка",
    "universe":"Marvel Comics",
    "ego":"Стивен Роджерс",
    "activity":"супер-солдат",
    "friends":"Мстители",
    "strength":"бессмертие, быстрая регенерация",
    "photo":"assets/images/547x397_0xac120002_20106541761540468871.jpg"
    
},{
    "name":"Тор",
    "universe":"Marvel Comics",
    "ego":"нет, полное имя - Тор Одинсон",
    "activity":"борец за справедливость, скандинавский бог",
    "friends":"Мстители",
    "strength":"все, что может бог, молот Мьелнир",
    "photo":"assets/images/547x397_0xac120002_19311926741540468872.jpg"
    
},{
    "name":"Халк",
    "universe":"Marvel Comics",
    "ego":"Брюс Беннер",
    "activity":"борец за справедливость, ученый-биохимик",
    "friends":"Мстители",
    "strength":"скорость, выносливость, полет",
    "photo":"assets/images/547x397_0xac120002_20162335021540468872.jpg"
    
},{
    "name":"Чудо-женщина",
    "universe":"DC Comics",
    "ego":"Диана Принс",
    "activity":"супергероиня, секретарь-референт",
    "friends":"Лига Справедливости, Бэтмэн ",
    "strength":"скорость, выносливость, полет",
    "photo":"assets/images/547x397_0xac120002_6444132261540468872.jpg"
   
},{
    "name":"Черная вдова",
    "universe":"Marvel Comics",
    "ego":"Наташа Романофф",
    "activity":"супергероиня, шпионка",
    "friends":"Мстители",
    "strength":"замедленное старение, знание многих языков",
    "photo":"assets/images/547x397_0xac120002_744074131540468872.jpg"
    
},{
    "name":"Дэдпул",
    "universe":"Marvel Comics",
    "ego":"Уэйд Уинстон Уилсон",
    "activity":"антигерой, наемник",
    "friends":"Мстители, Росомаха",
    "strength":"регенерация, бессмертие",
    "photo":"assets/images/728x382_1_cc2a743fd686b7b2e256c062966bb465@1034x543_0xac120002_2692921231540468872.jpg"
    
}]`;

document.addEventListener("DOMContentLoaded", function(event){
    let superheroes = JSON.parse(json);
    console.log(superheroes);

    let superheroesContent = "";
    for (let superhero of superheroes) {
        superheroesContent += `<div id ='superheroes'>
        <div class="superhero" style="width: 18rem;">
        <img class="card-img-top" src=${superhero.photo}
        >  </div>
        <h5>${superhero.name}</h5>
        <p class="card-text"> <b>Вселенная:</b> ${superhero.universe}</p>
        <p class="card-text"><b>Альтер эго:</b> ${superhero.ego}</p>
        <p class="card-text"><b>Род деятельности:</b> ${superhero.activity}</p>
        <p class="card-text"><b>Друзья:</b> ${superhero.friends}</p>
        <p class="card-text"><b>Суперсилы:</b> ${superhero.strength}</p>
        
        <button onclick="addGrade()" class="btn btn-primary">Оценить</button>
      </div> `;
        
}
document.getElementById("superheroes").innerHTML = superheroesContent;
});

let btn = document.querySelectorAll(".btn btn-primary");
let gradeInput = document.querySelector('.grade');
let itemsArray = [];

function addGrade(){
    let grade=prompt ('Оцени от 1 до 10');
    itemsArray.push(grade);
    localStorage.setItem('grades', itemsArray);
    
}
btn.addEventListener("onclick", addGrade)
