let yeezyBtn = document.querySelector("#yeezy");
let factBtn = document.querySelector("#icebreaker");
let apiGenEl = document.querySelector("#api-gen");
var cardEl = document.querySelector("#guest-cards");
var guestInfo;
let deleteBtn = document.querySelector("#deleteList");
let copyBtn = document.querySelector("#copy");


// function to get random Kanye West quotes
function askKanye() {
    let apiUrl = "https://api.kanye.rest";
    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            genKanyeDiv(data);
        })
    })
}


// function to display random fact
function randomFact() {
    var limit = 1;
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/facts?limit=' + limit,
        headers: { 'X-Api-Key': 'APIItc6Clhr3spOTxL6yNw==gpXlH2wS5Go2YP5h' },
        contentType: 'application/json',
        success: function (result) {
            genFactDiv(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}


// function to display kanye response
function genKanyeDiv(data) {
    // clear existing quote
    apiGenEl.innerHTML = "";

    // dynamically generate p-tag with api response data
    let apiDiv = document.createElement("p");
    apiDiv.textContent = data.quote;
    apiDiv.setAttribute("id", "copy");
    // append p-tag to html
    apiGenEl.appendChild(apiDiv);
}


// function to display random fact response data
function genFactDiv(result) {
    // clear existing quote
    apiGenEl.innerHTML = "";

    // dynamically generate p-tag with api response data
    let apiDiv = document.createElement("p");
    apiDiv.textContent = result[0].fact;
    apiDiv.setAttribute("id", "copy");
    // append p-tag to html
    apiGenEl.appendChild(apiDiv);
}


// function to add a copy of displayed api response data to the clipboard
function copyClipboard(event) {
    let copyText = document.getElementById("copy");
    if (copyText) {
        let copyValue = copyText.textContent;
        console.log(copyValue);
        navigator.clipboard.writeText(copyValue);
        //alert("Copied the text: " + copyValue);
    }
}


// function to create party people cards
function displayCard() {
    if (localStorage.length) {
        var guestArray = JSON.parse(localStorage.getItem("guestInfo"));
        for (let i = 0; i < guestArray.length; i++) {
            // create div element to act as card container
            var card = document.createElement("div");
            card.setAttribute("id", guestArray[i].id);
            card.classList.add("m-4", "border-solid", "border-2", "border-black", "p-3", "rounded", "bg-teal-500", "generate-container");
            cardEl.appendChild(card);

            // create h3 element for party people name
            let cardName = document.createElement("h3");
            cardName.classList.add("text-2xl", "text-white", "font-bold", "tracking-wide", "w-full", "pb-2");
            cardName.textContent = guestArray[i].name;

            // create p element for party people details
            let cardDetails = document.createElement("p");
            cardDetails.classList.add("w-full", "border-solid", "border-2", "border-black", "rounded", "bg-white", "p-4", "mb-4");
            cardDetails.textContent = guestArray[i].details;

            // append cardName and cardDetails to card
            card.append(cardName, cardDetails);
        }
    }

}


// function to clear localStorage
function clearProfiles() {
    localStorage.clear();
    cardEl.innerHTML = "";
}


// dynamically generate party people cards on load
displayCard();


// event listenter to trigger askKanye function
yeezyBtn.addEventListener("click", askKanye);
// event listener to trigger randomFact function
factBtn.addEventListener("click", randomFact);
// event listener to run function clearProfiles
deleteBtn.addEventListener("click", clearProfiles);


// event listener to copy api response
//copyBtn.addEventListener("click", copyClipboard);