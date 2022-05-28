function orderStatus() {
    return true;
}

function orders() {

    //promise

    let my_promise = new Promise(function (resolve, reject) {

        let order = orderStatus()

        let time = Math.random() * 10000 // 0.1 to 0.9 *10000

        console.log(time)
        if (order == true) {

            setTimeout(function () {

                resolve(order)
            }, time)

        }
        else {
            reject("sorry we cannot deliver the order")
        }

    })

    my_promise.then(function (res) {
        console.log(`your ${res} is ready`)
    })
}