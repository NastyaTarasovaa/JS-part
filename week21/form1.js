btn.onclick = function (event) {

    event.preventDefault();

    let user = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value
    }
    console.log(user);

fetch("https://httpbin.org/post",
{
    method:'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
})
.then(response => response.json())
.then(user => {
    console.log(user);
})
.catch(error => console.log(error));
}