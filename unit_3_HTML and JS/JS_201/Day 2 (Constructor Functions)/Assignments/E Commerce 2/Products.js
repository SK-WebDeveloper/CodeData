let container = document.querySelector('.product')
let data = JSON.parse(localStorage.getItem('Products')) || [];
let total = 0
display(data)

function display(P_Data) {


    P_Data.forEach(function (el, index) {

        let div = document.createElement('div')

        let img = document.createElement('img')
        img.src = el.image;

        let name = document.createElement('h2')
        name.innerText = el.name;

        let price = document.createElement('p');
        price.innerText = el.price;

        let category = document.createElement('p');
        category.innerText = el.category;

        let gender = document.createElement('p')
        gender.innerText = el.gender;

        let remove = document.createElement('button')
        remove.innerText = 'Remove'
        remove.setAttribute('id', 'remove')
        remove.addEventListener('click', function () {
            data.splice(index, 1)
            localStorage.setItem('Products', JSON.stringify(data))
            window.location.reload()
        })

        let sold = document.createElement('button');
        sold.innerText = 'Sold';
        sold.setAttribute('id', 'sold')
        sold.style.background = 'green'
        sold.addEventListener("click", function () {
            if (sold.style.backgroundColor == "green") {
                sold.style.backgroundColor = "red"
                console.log("red")
            } else {

                sold.style.backgroundColor = "green"
                console.log("green")
            }

        })
        total++
        div.append(img, name, price, category, gender, remove, sold)
        container.append(div)
    })

}

document.querySelector('#counter').innerText = "Total : " + total