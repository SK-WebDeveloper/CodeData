const api_key = "3c8adccbf220e547d3446bb48aaa7fa4";

// 'https://api.openweathermap.org/data/2.5/weather?q={city'


async function getData(lat, lon) {
    let city = document.getElementById("city").value

    //destination 

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    // let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
    //car
    let res = await fetch(url);

    let data = await res.json();

    append(data)

    console.log(data)

}


function append(data) {

    let container = document.getElementById("container")

    container.innerHTML = null;

    console.log(data.main)

    // let img = document.createElement("img");
    // img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukjv2DsYHf0ViEIqX2B9JrDe2jh6sjqDB1p9FhJI5LN7xV6RE9hPVD_St2859k8B6UPs&usqp=CAU"

    let name = document.createElement("h1");
    name.innerText = data.name;

    let p = document.createElement("p");
    p.innerText = `Current temp : ${data.main.temp}`;

    let p2 = document.createElement("p");
    // p2.innerText = "Max temp :"+Math.floor(`${data.main.temp_max}`-273.15)+" C";
    p2.innerText = `Max temp :${data.main.temp_max}`;

    let p3 = document.createElement("p");
    p3.innerText = "Min temp :" +Math.floor(`${data.main.temp_min}`-273.15)+" C";

    let p4 = document.createElement("p");
    p4.innerText = `Wind Speed: ${data.wind.speed}`;

    let p5 = document.createElement("p");
    p5.innerText = `Humidity : ${data.main.humidity}`;

    let iframe = document.getElementById("gmap_canvas")
    iframe.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    container.append(name, p, p2, p3, p4, p5)
}

// Based on current location

function getLocationWeather() {
    navigator.geolocation.getCurrentPosition(success);

    function success(position) {

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log(latitude)
        console.log(longitude)

    }
}

getLocationWeather()