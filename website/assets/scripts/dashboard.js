import { auth } from "./firebase_init.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Logged in as:", user.email);
    } else {
        alert("User is signed out. Please log in.")
        console.log("User is signed out");
        window.location.href = "login.html";
    }
});