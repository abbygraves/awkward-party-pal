let kanyeQuoteEl = document.querySelector("#kanye-quote");
let kanyeQuoteBtn = document.querySelector("#kanye-btn");

// function to get random Kanye West quotes
function askKanye() {
    let apiUrl = "https://api.kanye.rest";
    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            console.log(data.quote);
        })
    })
}

// event listenter to trigger askKanye function
kanyeQuoteBtn.addEventListener("click", askKanye);