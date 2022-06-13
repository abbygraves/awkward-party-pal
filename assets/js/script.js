function saveProfile(name, iceBreakers) {
    window.localStorage.setItem(name, iceBreakers);
}

function getProfiles() {
    Object.keys(localStorage).forEach((key) => {
        console.log(key + " " + localStorage.getItem(key));
       });
}

function clearProfiles() {
        localStorage.clear();
}