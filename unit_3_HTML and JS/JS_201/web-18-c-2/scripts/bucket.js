// On clicking remove button the item should be removed from DOM as well as localstorage.

let datas = JSON.parse(localStorage.getItem('coffee')) || []

let bucket = document.getElementById('bucket');

displayData(datas)

function displayData(data) {


    // bucket.innerHTML = '';
    let total = 0;
    data.forEach(function (el, i) {

        let div = document.createElement('div');
        div.setAttribute('id','div')
        let img = document.createElement('img');
        img.src = el.image;

        let title = document.createElement('p');
        title.innerText = el.title;

        let price = document.createElement('p');
        price.innerText = el.price;

        total = total + el.price;

        let tp = document.getElementById('total_amount')
        tp.innerText = total

        let button = document.createElement('button');
        button.setAttribute('id', 'remove_coffee')
        button.innerText = 'Remove';
        button.addEventListener('click', function () {
            datas.splice(i, 1);
            localStorage.setItem("coffee", JSON.stringify(datas));
            window.location.reload()
        })

        div.append(img, title, price, button)
        bucket.append(div)
    })

    let c_checkout = document.querySelector('#confirm_checkout')
    c_checkout.addEventListener('click', function(){
        if(total>0){
            window.location.href = 'checkout.html'
        }
        else{
            alert('Bucket is Empty Cannot proceed')
        }
    })

}