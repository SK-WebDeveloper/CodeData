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

    }, 3000);

}

start()
