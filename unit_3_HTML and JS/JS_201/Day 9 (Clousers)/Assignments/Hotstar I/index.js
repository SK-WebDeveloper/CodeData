
let Recombox = document.getElementById('recommend')
let id;
async function searchMovies(query) {
   try {
      let url = `https://www.omdbapi.com/?s=${query}&apikey=d1c945fe`;
      let res = await fetch(url);
      let data = await res.json();
      // console.log(data)
      return data.Search;
   } catch (err) {
      console.log('error');
   }
}

async function main() {
   let query = document.getElementById("search").value;
   let data = await searchMovies(query)
   // console.log(data)
   append(data)
}

function debounceFunction(func, delay) {
   if (id) {
      clearTimeout(id)
   }
   id = setTimeout(function () {
      func()
   }, delay)
}

function append(data){
   Recombox.innerHTML = null
   data.forEach(function(el){
      console.log(el)
      let Recommdiv = document.createElement('div');
      Recommdiv.setAttribute('id','main')

      let PosterDiv = document.createElement('div');
      PosterDiv.setAttribute('id','first')

      let MoreDetails = document.createElement('div');
      MoreDetails.setAttribute('id','second')

      let Poster = document.createElement('img');
      Poster.src = el.Poster;
      PosterDiv.append(Poster)

      let Title = document.createElement('p');
      Title.innerText  = el.Title

      let Year = document.createElement('p');
      Year.innerText = el.Year;

      MoreDetails.append(Title,Year)

      Recommdiv.append(PosterDiv,MoreDetails)

      Recombox.append(Recommdiv)
   })
}