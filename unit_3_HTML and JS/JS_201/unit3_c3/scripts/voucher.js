let voucher_data = JSON.parse(localStorage.getItem('purchase')) || []

let wallet = JSON.parse(localStorage.getItem('user')) || []


const url = 'https://masai-vouchers-api.herokuapp.com/api/vouchers';

async function getVoucher() {

    try {

        let res = await fetch(url)

        let data = await res.json() // collect the data

        //console.log(data[0].vouchers)
        displayVoucher(data[0].vouchers)
    } catch (error) {
        console.log('error')
    }
}

getVoucher()

function displayVoucher(data) {

    let w_balance = document.getElementById('wallet_balance')
    w_balance.innerText = wallet.amount
    let v_list = document.getElementById('voucher_list')
    data.forEach(function (el) {

        let voucher_card = document.createElement('div')
        voucher_card.setAttribute('class', 'voucher');

        let image = document.createElement('img');
        image.src = el.image;

        let name = document.createElement('p');
        name.innerText = el.name;

        let price = document.createElement('p')
        price.innerText = el.price;

        let button = document.createElement('button')
        button.innerText = 'buy';
        button.setAttribute('class', 'buy_voucher')
        button.addEventListener('click', function () {
            voucher_data.push(el)
            if (w_balance.innerText >= el.price) {
                alert("Hurray! purchase successful")
                w_balance.innerText = w_balance.innerText - el.price
                wallet.amount = wallet.amount - el.price
                localStorage.setItem('user',JSON.stringify(wallet))
                localStorage.setItem('purchase', JSON.stringify(voucher_data))
                return
            }
            else (w_balance.innerText < price.innerText)
            {
                alert("Sorry! insufficient balance")
            }

        })

        voucher_card.append(image, name, price, button);
        v_list.append(voucher_card)
    })
}