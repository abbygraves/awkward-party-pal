var formName=document.querySelector("#name")

var formDetails=document.querySelector("#icebreaker")

let saveBtn=document.querySelector("#submit");

//let guestArray=[]
//let guestIdCounter=0
function saveProfile(event) {
 //   window.localStorage.setItem(name, iceBreakers);
 var guestArrayString=localStorage.getItem("guestInfo");
let guestArray=[]
 if (guestArrayString!==null){
guestArray=JSON.parse(guestArrayString);
console.log(guestArrayString);
}

let guestIdCounter=localStorage.getItem("guestIdCounter") || 0;

 event.preventDefault();
 var guestObject={
    name:formName.value, 
    details:formDetails.value,
    id:guestIdCounter
 }
 guestIdCounter++;
//guestObject.setAttribute("id", guestIdCounter);
console.log(guestObject.id);
 guestArray.push(guestObject);
 //console.log(guestArray);
 localStorage.setItem("guestInfo", JSON.stringify(guestArray));
 localStorage.setItem("guestIdCounter", guestIdCounter);
 formName.value="";
 formDetails.value="";
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
