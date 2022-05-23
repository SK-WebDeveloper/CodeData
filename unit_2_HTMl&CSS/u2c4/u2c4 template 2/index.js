// write js code here corresponding to index.html
// You should add submit event on the form
var form = document.querySelector("#masaiForm")
form.addEventListener("submit",submitData);

var matches = JSON.parse(localStorage.getItem("schedule")) || []
function submitData()
{
    event.preventDefault()

    var dataObj = {

        matchNum:form.matchNum.value,
        teamA:form.teamA.value,
        teamB:form.teamB.value,
        date:form.date.value,
        venue:form.venue.value,

    }
    matches.push(dataObj)
    localStorage.setItem("schedule",JSON.stringify(matches))
}

