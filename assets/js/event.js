let apiGenEl = document.querySelector("#api-gen");
let kanyeQuoteBtn = document.querySelector("#kanye-btn");
let tFtBtn = document.querySelector("#tFt-btn");
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


// event listenter to trigger askKanye function
kanyeQuoteBtn.addEventListener("click", askKanye);

// event listener to trigger randomFact function
tFtBtn.addEventListener("click", randomFact);

// event listener to copy api response
copyBtn.addEventListener("click", copyClipboard);