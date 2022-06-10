let apiGenEl = document.querySelector("#api-gen");
let kanyeQuoteBtn = document.querySelector("#kanye-btn");
let copyBtn = document.querySelector("#copy");

// function to get random Kanye West quotes
function askKanye() {
    let apiUrl = "https://api.kanye.rest";
    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            genApiDiv(data);
        })
    })
}


// function to display api response data
function genApiDiv(data) {
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
    let copyText = document.getElementById("copy");
    if (copyText) {
        let copyValue = copyText.textContent;
        navigator.clipboard.writeText(copyText);
        alert("Copied the text: " + copyValue);
    }
}


// event listenter to trigger askKanye function
kanyeQuoteBtn.addEventListener("click", askKanye);

// event listener to copy api response
copyBtn.addEventListener("click", copyClipboard);