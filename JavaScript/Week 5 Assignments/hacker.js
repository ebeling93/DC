
const news = document.getElementById("news")


async function getAllIds() {
const newsURL = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"

let response = await fetch(newsURL)
let storyIdArray = await response.json()
console.log(storyIdArray)
getArticles(storyIdArray)

}
getAllIds()

