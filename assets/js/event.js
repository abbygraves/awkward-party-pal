let apiGenEl = document.querySelector("#api-generation");
let kanyeQuoteBtn = document.querySelector("#kanye-btn");
let copyBtn = document.querySelector("#copy");

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


// function to display api response data
function generateApiDiv(data) {
    // clear existing quote
    apiGenEl.innerHTML = "";

    // dynamically generate p-tag with api response data
    let apiDiv = document.createElement("p");
    apiDiv.textContent = data.quote;
    apiDiv.setAttribute("id", "copy");
    // append p-tag to html
    apiGenEl.appendChild(apiDiv);
}


// function to add a copy of displayed api response data to the clipboard
function copyClipboard(event) {
    let copyClick = event.target.getAttribute("#copy");
    console.log("click");
    //let copyText = ;
    //copyText.select(data.quote);
    //navigator.clipboard.writeText(copyText);
    //alert("Copied the text: " + copyText);
}

// event listenter to trigger askKanye function
kanyeQuoteBtn.addEventListener("click", askKanye);

// event listener to copy api response
copyBtn.addEventListener("click", copyClipboard);