function onSearch () {
    let getGiphy = document.getElementById("giphySearch").value;

    fetch ('https://api.giphy.com/v1/gifs/search?api_key=FapvShXUYLxlkhPH4qmHNsMgzzRSTISF&q=' + getGiphy+ 'gif&limit=5&offset=0&rating=g&lang=en')
    .then(response => response.json())
    .then(giphy => {
        document.getElementById("address").src = giphy.url;
        document.getElementById("title").innerText = giphy.title;
    })
    .catch(error => console.log(error));
}

