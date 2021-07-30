const newsUL = document.getElementById("news")



const newsArticles = news.articles.map(function(news) {
    if (news.imageURL == null){
            news.imageURL = ""
        }

        
        
        
        
        const Item = `
        <li class="article">
            <a href="${news.URL}">
            <img src="${news.imageURL}" class = "newsPhoto"/>
            <b>${news.title}</a></b>
            <li class="author">${news.author}</li>
            <li class="description"><p>${news.description}</p></li>
        </li>`
        
        return Item
        
    })

newsUL.innerHTML = news.join("")
// ? 

