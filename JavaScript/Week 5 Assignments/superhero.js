const batman = document.getElementById("batman")
const detailsButton = document.getElementById("detailsButton")
const batmanURL = "http://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa"


let request = new XMLHttpRequest()
   
    request.addEventListener(`load`, function() {
        const posts = postsAPI.search
        const result = JSON.parse(this.responseText)
        const movieItems = posts.map(function () {
            return movieItem = `<li>
            <img src= "${post.poster}"><br>
            <b> <div id="title">${post.Title}</div>
            </li>`
        })
        moviesUL.innerHTML = movieItems.join("")
        
    })

request.open(`GET`, "http://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa")
request.send()

