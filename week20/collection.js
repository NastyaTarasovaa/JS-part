let json = `[{
    "name":"Бэтмен",
    "universe":"DC Comics",
    "ego":"Брюс Уэйн",
    "activity":"борец с преступностью, филантроп",
    "friends":"Робин, Бэтгерл",
    "strength":"интеллект, боевые искусства, ловкость"
    
},{
    "name":"Супермен",
    "universe":"DC Comics",
    "ego":"Кларк Кент",
    "activity":"борец за справедливость ",
    "friends":"собака Крипто",
    "strength":"непробиваемость, полет, самоисцеление"
    
},{
    "name":"Железный человек",
    "universe":"Marvel Comics",
    "ego":"Тони Старк",
    "activity":"гений, филантроп",
    "friends":"Мстители",
    "strength":"интеллект, бронекостюмы, связь со всемирной паутиной"
    
},{
    "name":"Человек-паук",
    "universe":"Marvel Comics",
    "ego":"Питер Паркер",
    "activity":"борец за справедливость, студент",
    "friends":"Мстители, Фантастическая четверка",
    "strength":"сверхчеловеческие рефлексы, паучье чутье"
    
},{
    "name":"Капитан Америка",
    "universe":"Marvel Comics",
    "ego":"Стивен Роджерс",
    "activity":"супер-солдат",
    "friends":"Мстители",
    "strength":"бессмертие, быстрая регенерация"
    
},{
    "name":"Тор",
    "universe":"Marvel Comics",
    "ego":"нет, полное имя - Тор Одинсон",
    "activity":"борец за справедливость, скандинавский бог",
    "friends":"Мстители",
    "strength":"все, что может бог, молот Мьелнир"
    
},{
    "name":"Халк",
    "universe":"Marvel Comics",
    "ego":"Брюс Беннер",
    "activity":"борец за справедливость, ученый-биохимик",
    "friends":"Мстители",
    "strength":"скорость, выносливость, полет"
    
},{
    "name":"Чудо-женщина",
    "universe":"DC Comics",
    "ego":"Диана Принс",
    "activity":"супергероиня, секретарь-референт",
    "friends":"Лига Справедливости, Бэтмэн ",
    "strength":"скорость, выносливость, полет"
   
},{
    "name":"Черная вдова",
    "universe":"Marvel Comics",
    "ego":"Наташа Романофф",
    "activity":"супергероиня, шпионка",
    "friends":"Мстители",
    "strength":"замедленное старение, знание многих языков"
    
},{
    "name":"Дэдпул",
    "universe":"Marvel Comics",
    "ego":"Уэйд Уинстон Уилсон",
    "activity":"антигерой, наемник",
    "friends":"Мстители, Росомаха",
    "strength":"регенерация, бессмертие"
    
}]`;

document.addEventListener("DOMContentLoaded", function(event){
    let superheroes = JSON.parse(json);
    console.log(superheroes);

    let superheroesContent = "";
    for (let superhero of superheroes) {
        superheroesContent += `<div class ='superhero'>
        <img class="card-img-top" src=${superhero.photo}
        alt="Card image cap">
        <h5>${superhero.name}</h5>
        <p class="card-text">Вселенная: ${superhero.universe}</p>
        <p class="card-text">Альтер эго: ${superhero.ego}</p>
        <p class="card-text">Род деятельности: ${superhero.activity}</p>
        <p class="card-text">Друзья: ${superhero.friends}</p>
        <p class="card-text">Суперсилы: ${superhero.strength}</p>
        <a href="#" class="btn btn-primary">Оценить</a>
        </div> `;
        
}
document.getElementById("superheroes").innerHTML = superheroesContent;
});