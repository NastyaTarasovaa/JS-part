document.addEventListener("DOMContentLoaded",
function (event) {
fetch ("https://api.github.com/users/NastyaTarasovaa")
.then(response =>response.json())
.then(user => {
    document.getElementById("avatar").src = user.avatar_url;
    document.getElementById("login").innerText = user.login;
    document.getElementById("public_repos").innerText ="Количество репозиториев:" + " " + user.public_repos;
    document.getElementById("date").innerText ="Был создан:" + " " + user.created_at;
})

.catch(error => console.log(error));
});