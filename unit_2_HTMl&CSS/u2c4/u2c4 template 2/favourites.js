// write js code here corresponding to favourites.html
var table = document.querySelector("tbody")

var favouriteArr = JSON.parse(localStorage.getItem("favourites"))

displayData(favouriteArr)

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

        var Delete = document.createElement("td")
        Delete.innerText = "Delete";
        Delete.style.cursor = "pointer"
        Delete.addEventListener("click",function(){
            deleteItem(elem, index)
       })
       tr.append(matchNum,teamA,teamB,date,venue,Delete)
       table.append(tr)
    })
}

function deleteItem(elem, index)
{
    favouriteArr.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(favouriteArr))
    window.location.reload()
}