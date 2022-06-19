

let data = JSON.parse(localStorage.getItem('user')) || []

data.forEach(function(el){
    document.getElementById('user_img').src = el.image;
    document.getElementById('user_name').innerText = el.name;
    document.getElementById('user_email').innerText = el.email;
    document.getElementById('user_country').innerText = el.country;
})

let side = document.getElementById('sidebar')
import {sidebar,navbar}  from "../components/sidebar"
side.innerHTML = sidebar()

let info = document.getElementById('navbar')
info.innerHTML = navbar()

async function newsData()
{
    let country_code = document.getElementById('user_country')
    let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country_code}`
    let res = await fetch(url)
    let data = res.json()
    console.log(data.articles)
    appendNewsData(data.articles)
}
newsData()

function appendNewsData(){

    let result = document.getElementById('news_result')

    let card = document.createElement('div')
    card.setAttribute('class','news')

    //  for news image

    let left = document.createElement(div)

    let img = document.createElement('img')
    img.src = data.url

    left.append(img)

    // for details

    let right = document.createElement('div')

    let title = document.createElement('h3')
    title.innerText = data.title

    let author = document.createElement('p')
    author.innerText = data.author

    right.append(title,author)

    card.append(left,right)

    result.append(card)

}
