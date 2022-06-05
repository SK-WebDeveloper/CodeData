
let Recombox = document.getElementById('recommend')
let display = document.getElementById('display')
let search = document.getElementById('search')
let id;
async function searchMovies(query) {
   try {
      let url = `https://www.omdbapi.com/?s=${query}&apikey=d1c945fe`;
      let res = await fetch(url);
      let data = await res.json();
      console.log(data)
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

function append(data) {
   Recombox.style.display = 'block';
   Recombox.innerHTML = null
   // Recombox.style.display = 'none';
   data.forEach(function (el) {
      console.log(el)
      let Recommdiv = document.createElement('div');
      Recommdiv.setAttribute('id', 'main')

      Recommdiv.onclick = function () {
         Recombox.style.display = 'none'
         search.value = ''
         searchMovie(el)
      }
      let PosterDiv = document.createElement('div');
      PosterDiv.setAttribute('id', 'first')

      let MoreDetails = document.createElement('div');
      MoreDetails.setAttribute('id', 'second')

      let Poster = document.createElement('img');
      Poster.src = el.Poster;
      PosterDiv.append(Poster)

      let Title = document.createElement('p');
      Title.innerText = el.Title

      let Year = document.createElement('p');
      Year.innerText = el.Year;

      MoreDetails.append(Title, Year)

      Recommdiv.append(PosterDiv, MoreDetails)

      Recombox.append(Recommdiv)
   })
}

async function searchMovie(el) {
   try {
      display.innerHTML = null;
      let url = `https://www.omdbapi.com/?i=${el.imdbID}&apikey=d1c945fe`;
      let res = await fetch(url);
      let data = await res.json();
      displayDetails(data);
   } catch (err) {
      console.log(err);
   }
}
function displayDetails(data) {
   console.log(data)
   // Recombox.style.display = 'none';
   if (data.Response === 'False') {
      let error = document.createElement('img');
      error.setAttribute('id', 'error');
      error.src = 'https://www.lovelyfares.ca/404.jpg';
      display.append(error);
      return;
   }

   let top = document.createElement('div');
   top.setAttribute('id', 'top');

   let title = document.createElement('p');
   title.innerText = `${data.Title} - ${data.Year}`;

   top.append(title);

   // bottom div for the poster and details

   let bottom = document.createElement('div');
   bottom.setAttribute('id', 'bottom');

   // bottom - left div is for the poster only

   let left = document.createElement('div');
   left.setAttribute('id', 'left');

   let img = document.createElement('img');
   img.src = data.Poster;

   left.append(img);

   // bottom - right div is for the details 

   let right = document.createElement('div');
   right.setAttribute('id', 'right');

   // right - up div is for rating and votes 

   let up = document.createElement('div');
   up.setAttribute('id', 'up');

   let logo = document.createElement('img');
   logo.src = 'https://cdn.freebiesupply.com/images/large/2x/imdb-logo-transparent.png';

   let rating = document.createElement('p');
   rating.innerText = `${data.Ratings[0].Value} Out of ${data.imdbVotes} Votes`;

   let recommended;

   if (+(data.imdbRating) > 8.5) {

      recommended = document.createElement('p');
      recommended.setAttribute('id', 'recommended');
      recommended.innerText = 'Recommended';

   }

   up.append(logo, rating, recommended || '');

   // right - mid div is for plot and genre 

   let mid = document.createElement('div');
   mid.setAttribute('id', 'mid');

   let plotDiv = document.createElement('div');
   plotDiv.setAttribute('id', 'plotDiv')
   let plotSpan = document.createElement('span');
   plotSpan.innerText = 'Plot : ';

   let plot = document.createElement('p');
   plot.innerText = data.Plot;

   plotDiv.append(plotSpan, plot);

   let genreDiv = document.createElement('div');

   let genreSpan = document.createElement('span');
   genreSpan.innerText = 'Genre : ';

   let genre = document.createElement('p');
   genre.innerText = data.Genre;

   genreDiv.append(genreSpan, genre);

   let languageDiv = document.createElement('div');

   let languageSpan = document.createElement('span');
   languageSpan.innerText = 'Language : ';

   let language = document.createElement('p');
   language.innerText = data.Language;

   languageDiv.append(languageSpan, language);

   mid.append(plotDiv, genreDiv, languageDiv);

   // child div of right - down div is for director, actors, language 

   let down = document.createElement('div');
   down.setAttribute('id', 'down');

   let directorDiv = document.createElement('div');

   let directorSpan = document.createElement('span');
   directorSpan.innerText = 'Director : ';

   let director = document.createElement('p');
   director.innerText = data.Director;

   directorDiv.append(directorSpan, director);

   let actorsDiv = document.createElement('div');

   let actorsSpan = document.createElement('span');
   actorsSpan.innerText = 'Actors : ';

   let actors = document.createElement('p');
   actors.innerText = data.Actors;

   actorsDiv.append(actorsSpan, actors);

   down.append(directorDiv, actorsDiv);

   // appending all the child div of the right to the right 

   right.append(up, mid, down);

   // appending all the child div of the bottom to the bottom 

   bottom.append(left, right);

   // appending all the child of the display to the display 

   display.append(top, bottom);

}