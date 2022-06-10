let apiGenEl = document.querySelector("#api-generation");
let kanyeQuoteBtn = document.querySelector("#kanye-btn");

// function to get random Kanye West quotes
function askKanye() {
    let apiUrl = "https://api.kanye.rest";
    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            console.log(data.quote);
            generateApiDiv(data);
        })
    })
}

function generateApiDiv(data) {
    let apiDiv = document.createElement("p");
    apiDiv.textContent = data.quote;
    apiGenEl.appendChild(apiDiv);

}

// event listenter to trigger askKanye function
kanyeQuoteBtn.addEventListener("click", askKanye);