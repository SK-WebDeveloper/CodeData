const api_key = 'AIzaSyB3ho0b7fzh_Ll_wuOaFeVfm-1rnaqNmFk'

//let url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key=[YOUR_API_KEY]'

let search = async () => {
    try {
        let query = document.getElementById('query').value;
        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`
        let res = await fetch(url);
        let data = await res.json(); // collect the data
        console.log(data)
        append(data.items)
    } catch (error) {
        console.log('error')
    }
}
let trending = async () =>{
    try {
        let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&locale=India&maxResults=20&regionCode=IN&key=${api_key}`
        let res = await fetch(url)
        let data = await res.json()
        appendTrending(data.items)
        
    } catch (error) {
        console.log("error")
        
    }
}
trending()

let appendTrending = (data) => {

    console.log(data)
    let container = document.getElementById('cards');
    container.innerHTML = null;
    data.forEach(({ id, snippet: { title } }) => {
        console.log(id)
        // console.log(title)
        
        let div = document.createElement('div')

        let iframe = document.createElement('iframe')
        iframe.src = `https://www.youtube.com/embed/${id}`
        iframe.allow = 'fullscreen'

        let p = document.createElement('p')
        p.innerText = title

        div.append(iframe,p)
        container.append(div);
    })
}
let append = (data) => {

    console.log(data)
    let container = document.getElementById('cards');
    container.innerHTML = null;
    data.forEach(({ id:{videoID}, snippet: { title } }) => {
        console.log(videoID)
        // console.log(title)
        
        let div = document.createElement('div')

        let iframe = document.createElement('iframe')
        iframe.src = `https://www.youtube.com/embed/${videoId}`
        iframe.allow = 'fullscreen'

        let v_title = document.createElement('div')
        v_title.setAttribute('class','title')

        let p = document.createElement('p')
        p.innerText = title

        v_title.append(p)
        div.append(iframe,v_title)
        container.append(div);
    })
}

/*
<iframe width="560" height="315" 
src="https://www.youtube.com/embed/gDVpCGZCmh8" 
title="YouTube video player" 
frameborder="0" 
allow="accelerometer; 
autoplay; clipboard-write; 
encrypted-media; gyroscope; 
picture-in-picture" allowfullscreen></iframe>
*/
