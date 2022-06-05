let OrderDone = document.getElementById('confirm');
let id;
OrderDone.addEventListener('click', function () {

    event.preventDefault()
    id = setTimeout(() => {
        alert('Your order is accepted')
    }, 0);

    if (id) {
        clearTimeout
    }
    id = setTimeout(() => {
        alert('Your order is being Prepared')
    }, 3000);
    if (id) {
        clearTimeout
    }
    id = setTimeout(() => {
        alert('Your order is being packed')
    }, 8000);
    if (id) {
        clearTimeout
    }
    id = setTimeout(() => {
        alert('Your order is out for delivery')
    }, 10000);
    if (id) {
        clearTimeout
    }
    id = setTimeout(() => {
        alert('Order delivered')
    }, 12000);

})