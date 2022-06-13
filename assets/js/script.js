var formName=document.querySelector("#name")

var formDetails=document.querySelector("#icebreaker")

let saveBtn=document.querySelector("#submit");

let guestArray=[]
let guestIdCounter=0
function saveProfile(event) {
 //   window.localStorage.setItem(name, iceBreakers);
 event.preventDefault();
 var guestObject={
    name:formName.value, 
    details:formDetails.value
 }
guestObject.setAttribute("id", guestIdCounter);
console.log(guestObject.id);
 //guestArray.push(guestObject);
 //console.log(guestArray);
 //localStorage.setItem("guestInfo", JSON.stringify(guestObject));
}

function getProfiles() {
    Object.keys(localStorage).forEach((key) => {
        console.log(key + " " + localStorage.getItem(key));
       });
}

function clearProfiles() {
        localStorage.clear();
}

saveBtn.addEventListener("click", saveProfile);
