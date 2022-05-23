// write js code here corresponding to matches.html

var table = document.querySelector("tbody")

var matches = JSON.parse(localStorage.getItem("schedule"))

displayData(matches)
var favouriteArr = JSON.parse(localStorage.getItem("favourites")) || []

function displayData(data)
{
    data.forEach(function(elem){
        var tr = document.createElement("tr")

        var matchNum = document.createElement("td")
        matchNum.innerText = elem.matchNum;

        var teamA = document.createElement("td")
        teamA.innerText = elem.teamA;

        var teamB = document.createElement("td")
        teamB.innerText = elem.teamB;

        var date = document.createElement("td")
        date.innerText = elem.date;

        var venue = document.createElement("td")
        venue.innerText = elem.venue;

        var favourite = document.createElement("td")
        favourite.innerText = "favourite";
        favourite.style.color = "green";
        favourite.addEventListener("click",function(){
            favouriteFun(elem)
       })
       tr.append(matchNum,teamA,teamB,data,venue,favourite)
       table.append(tr)
    })
}

function favouriteFun(elem)
{
    favouriteArr.push(elem)
    localStorage.setItem("favourites",JSON.stringify(favouriteArr))
}