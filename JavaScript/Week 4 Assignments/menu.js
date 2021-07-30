const startersTextbox = document.getElementById("startersTextbox")
const entreesTextbox = document.getElementById("entreesTextbox")
const desserts = document.getElementById("dessertsTextbox")


const dishesUL = document.getElementById("dishesUL")

let dishes = [
    {
        "description" : "Made-from-scratch recipe, topped with cheddar cheese and red onions. Cup or Bowl. ",
        "imageURL" : "https://www.texasroadhouse.com/images/texas-red-chili-loading.f97193d91d2ca481e202604628eea83f.webp ",
        "title" : "Texas Chili",
        "course" : "Starters",
        "id" : 2,
        "price" : 6
    },
    {
        "desciption" : "A 1/2 lb. of fresh ground chuck topped with bacon strips and American cheese. Served on a toasted, Texas-sized bun with lettuce, tomato, and onion. Served with steak fries and a pickle spear on the side.",
        "imageURL" : "https://www.texasroadhouse.com/images/bacon-cheeseburger-loading.2677433589dce62064fabe3ac7c6f335.webp",
        "title" : "Bacon Cheeseburger",
        "course" : "Entrees",
        "id" : 1,
        "price" : "12"
    }
    {
        "desciption" : "",
        "imageURL" : "https://www.seriouseats.com/thmb/UGwN-duUT6336M5RFL8scx4MHpE=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2019__05__20190520-cheesecake-vicky-wasik-34-16488b3671ae47b5b29eb7124dbaf938.jpg",
        "title" : "New York Cheesecake",
        "course" : "Desserts",
        "id" : 4,
        "price" : "4"

    }
]

for(let index=0; index < dishes.length; index++) {
    const dish = dishes[index]

    const dishItem = `
        <li>
        <img src="${dish.imageURL}" class= "dish-photo"/>
        <b></b>
        <p>${dish.starters}, ${dish.entrees}, ${dish.desserts}</p>
        </li>
        `
}
//inner.html 