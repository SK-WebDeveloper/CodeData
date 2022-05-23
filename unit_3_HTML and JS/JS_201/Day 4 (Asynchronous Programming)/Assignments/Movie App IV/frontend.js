let data = JSON.parse(localStorage.getItem('movies')) || [];
let display = document.getElementById("display")
data.forEach(function (el) {
    console.log(el)
    var div = document.createElement("div")

    var image = document.createElement("img")
    image.src = el.poster;
    image.setAttribute("class", "photo")

    var name = document.createElement('h2');
    name.innerText = el.name;

    var date = document.createElement("p");
    date.innerText = "Release Date: " + el.date;

    var rating = document.createElement("p");
    rating.innerText = "Rating: " + el.rating;

    div.append(image, name, date, rating)

    display.append(div)

})