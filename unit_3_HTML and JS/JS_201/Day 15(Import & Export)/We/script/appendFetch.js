let getData = async (url) => {
    // Fetch the data and return the data
    let res = await fetch(url);
    let data = await res.json();
    return data;
}

// What to append i.e Data
// Where to append i.e container

let append = (data, container) => {
    data.forEach(({title,image}) => {
        let div = document.createElement('div');

        let p = document.createElement('p');
        p.innerText = title;

        let img = document.createElement('img');
        img.src = image;

        div.append(img, p);

        container.append(div);
    })
}

export { getData, append };