const firebaseConfig = {
    apiKey: "AIzaSyAS8eRgIHjO6URaIctMFafiUOaE4wubPgg",
    authDomain: "signup-5ae3f.firebaseapp.com",
    databaseURL: "https://signup-5ae3f-default-rtdb.firebaseio.com",
    projectId: "signup-5ae3f",
    storageBucket: "signup-5ae3f.appspot.com",
    messagingSenderId: "825329701277",
    appId: "1:825329701277:web:b48b09e88d6b0008dbdf74"
}

firebase.initializeApp(firebaseConfig);

const sos = firebase.database().ref('sos');
console.log(document.getElementById('sos'), "1234567890");
document.getElementById('sos').addEventListener('submit', submitForm);
// document.getElementById('getLocation').addEventListener('click', getLocation);

var longitude = document.getElementById('longitude');
var latitude = document.getElementById('latitude');
// console.log(latitude.value, longitude.innerHTML, "1234567890");
// console.log(latitude.value, longitude.innerHTML, "1234567890");
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      console.log(position.coords.latitude, position.coords.longitude, "1234567890");
    }else { 
        longitude.innerHTML= "Geolocation is not supported by this browser.";
        latitude.innerHTML= "Geolocation is not supported by this browser.";
      }
}
function showPosition(position) {
    latitude.setAttribute("value",position.coords.latitude);
    longitude.setAttribute("value",  position.coords.longitude);
    }

    // console.log(latitude.value, longitude.value);

function submitForm(e){
    console.log(latitude.value, longitude.value, "1234567890");
    e.preventDefault();
    var name = getElementVal('fullName');
    var contactNo = getElementVal('contactNo');
    var email = getElementVal('email');
    // console.log(name, contactNo, email, longitude, latitude, "1234567890");
    saveData(name, contactNo, email, longitude.value, latitude.value);
}

const saveData = (name, contactNo, email, longitude, latitude) => {
    var newSos = sos.push();
    newSos.set({
        name: name,
        contactNo: contactNo,
        email: email,
        longitude: longitude,
        latitude: latitude
    });                                                                                     
}
const getElementVal = (id) => {
    console.log(id);
    return document.getElementById(id).value;
}

