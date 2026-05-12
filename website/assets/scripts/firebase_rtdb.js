// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCDZacH6zceFw6gdgUK7USYT6rcxo5kJ4",
  authDomain: "quietiot.firebaseapp.com",
  databaseURL: "https://quietiot-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quietiot",
  storageBucket: "quietiot.firebasestorage.app",
  messagingSenderId: "1020170104801",
  appId: "1:1020170104801:web:c2583649aa2984c4a6eca0",
  measurementId: "G-QM72SSJ3NQ"
};
        
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {getDatabase, set, get, update, remove, ref, child} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-database.js"

const db = getDatabase();

var timeInput = document.getElementById("time-input");
var userInput = document.getElementById("user-input");
var deviceInput = document.getElementById("device-input");
var submitBtn = document.getElementById("test-button");
var returnedText = document.getElementById("returned-text");

function getData() {
  returnedText.textContent = String("users/" + userInput.value + "/devices/" + deviceInput.value + "/data/" + timeInput.value);
}

submitBtn.addEventListener("click", getData);
