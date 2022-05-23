let imgData = ["https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/dbba13f2b8e065868db8014ce1166fc3452ed49aa9d485be95677f275b9f95cd._UR1920,1080_RI_SX356_FMwebp_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/1bb55206139e64da420615e947102ce4f10231ed8e4613fe238f3810b8460a9f._UR1920,1080_RI_SX356_FMwebp_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/579f625d2a6727fa43c84227ab30fc6a8701bd2cb8c54fd4f7d2560655303510._UR1920,1080_RI_SX356_FMwebp_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/c884e097f66997a42b7053fe9940c8fbc0a81c27e61a86196ef41397ac344996._UR1920,1080_RI_SX356_FMwebp_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/be7c378f3d62d7085ce2e32537b89108aaf59289f81c77e4128d5c4a57a11bab._UR1920,1080_RI_SX356_FMwebp_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/94806f93d9fe7b40d34b6adf640159923f2f59dd30fe3e88a90d5581de5cdf1d._UR1920,1080_RI_SX356_FMwebp_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/78aedb083bf31cd21d442b2598bcfecc6847d44d8c42b15e8890bd35299b1ba1._UR1920,1080_RI_SX356_FMwebp_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/5d3b681f3e0fa8762a10244cc01008de9be828a236d60ebd023bf0fbf78bc366._UR1920,1080_RI_SX356_FMwebp_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/53d95982427ed0eafc58b630e03e6e771a2c97e94cae4b807fb320d1d1bd8547._UR1920,1080_RI_SX356_FMwebp_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/8067087ea9643e497529db5bba5b7ede22b3addf115bfcc13af2bf7816a0223d._UR1920,1080_RI_SX356_FMwebp_.jpg",
]

let moviesData = [
    {
        date: "2022-05-20",
        name: "Bhool Bhulaiyaa 2",
        poster: "https://assetscdn1.paytm.com/images/cinema/Bb2-705x750-36a68220-d65c-11ec-8386-030f3d92e055.jpg",
        rating: 7.7
    },
    {
        date: "2022-05-15",
        name: "Dhaakad",
        poster: "https://assetscdn1.paytm.com/images/cinema/Dhaakad-705x750-e84ea150-d37e-11ec-8679-ab26124c1c6e.png",
        rating: 7.2
    },

    {
        date: "2022-05-19",
        name: "K.G.F. Chapter 2",
        poster: "https://assetscdn1.paytm.com/images/cinema/KGF-705x750-76008750-b6fd-11ec-9639-8322852eadd4.jpg",
        rating: 8.8
    },

    {
        date: "2022-05-19",
        name: "Anek",
        poster: "https://assetscdn1.paytm.com/images/cinema/Anek-705x750-cec02f00-d8e3-11ec-a247-cb3046901f82.jpg",
        rating: 8
    },

    {
        date: "2022-05-18",
        name: "Doctor Strange",
        poster: "https://assetscdn1.paytm.com/images/cinema/Doctor-Strange--In-The-Multiverse-Of-Madness-r-705x750-36f0e140-b752-11ec-a762-319bdb0970f2.jpg",
        rating: 7.4
    },

    {
        date: "2022-05-19",
        name: "Chandramukhi",
        poster: "https://assetscdn1.paytm.com/images/cinema/CHANDRAMUKHI--705x750-c8d63560-efb6-11eb-a810-99cd6391090f.jpg",
        rating: 6.5
    },

    {
        date: "2022-05-04",
        name: "Top Gun: Maverick",
        poster: "https://assetscdn1.paytm.com/images/cinema/Top-Gun--Maverick-705x750-3fc02540-cc80-11ec-829c-4bf6477dd3c8.jpg",
        rating: 7.5
    },

    {
        date: "2022-05-18",
        name: "Don",
        poster: "https://assetscdn1.paytm.com/images/cinema/Don---705x750-069e1b40-8375-11ec-9d54-d762aa0c6c82.jpg",
        rating: 6
    },

    {
        date: "2022-05-11",
        name: "Jayeshbhai Jordaar",
        poster: "https://assetscdn1.paytm.com/images/cinema/Jayeshbhai-Jordaar---705x750-660c01c0-cf7c-11ec-98b3-41c37f260d1c.jpg",
        rating: 7.8
    }
]

var moviesCart = JSON.parse(localStorage.getItem("movies")) || []

localStorage.setItem("movies", JSON.stringify(moviesCart))

let i = 0;
function start() {

    let show = document.getElementById("slideshow");

    let img = document.createElement("img");
    img.src = imgData[i]

    show.append(img);
    setInterval(function () {
        i++;
        if (i === imgData.length) {
            i = 0;
        }
        let image = imgData[i];
        let img = document.createElement('img');
        img.src = image;
        show.innerHTML = "";
        show.append(img)

    }, 5000);

}
start()

let movies = document.getElementById("movies")
function displayMovies(moviesData) {
    movies.innerHTML=null;
    moviesData.forEach(function (el) {
        let div = document.createElement("div")

        let img = document.createElement("img");
        img.src = el.poster;
        img.setAttribute("class","photo")

        let name = document.createElement("h2");
        name.innerText = el.name;

        let date = document.createElement("p");
        date.innerText = "Release Date: "+el.date;

        let rating = document.createElement("p");
        rating.innerText = "IMDb Rating: "+el.rating;
        if(el.rating>=0 && el.rating<=5){
            rating.style.color = 'red'
        }
        else if(el.rating>5 && el.rating<=7){
            rating.style.color = 'yellow'
        }
        else if(el.rating>7 && el.rating<=10){
            rating.style.color = 'green'
        }

        div.append(img, name, date, rating)
        movies.append(div)

    })
}
displayMovies(moviesData)

let LTH = document.getElementById('sort-lh');
let HTL = document.getElementById('sort-hl');

LTH.addEventListener('click', function() {
   moviesData.sort(function(a, b) {
      a = a.rating;
      b = b.rating;
      return a-b;
   })
   displayMovies(moviesData);
})

HTL.addEventListener('click', function() {
   moviesData.sort(function(a, b) {
      a = a.rating;
      b = b.rating;
      return b-a;
   })
   displayMovies(moviesData);
})
