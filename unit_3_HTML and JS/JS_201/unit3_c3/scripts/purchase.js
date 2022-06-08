

let voucher_data = JSON.parse(localStorage.getItem('purchase')) || [];
displayPurchasedVoucher(voucher_data)

let balance = document.getElementById('balance')
let wallet = JSON.parse(localStorage.getItem('user')) || []
balance.innerText = wallet.amount

function displayPurchasedVoucher(data){
    
    let purchased = document.querySelector("#purchased_vouchers")
    data.forEach(function(el){

        let voucher = document.createElement('div')
        voucher.setAttribute('class','voucher')

        let image = document.createElement('img');
        image.src = el.image;

        let name = document.createElement('p');
        name.innerText = el.name;

        let price = document.createElement('p')
        price.innerText = el.price;

        voucher.append(image,name,price)

        purchased.append(voucher)
    })
}