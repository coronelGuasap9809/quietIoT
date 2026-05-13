import { auth } from "./firebase_init.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

const loginForm = document.getElementById("login-form");

if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = loginForm.querySelector('input[name="email-input"]').value;
        const password = loginForm.querySelector('#password-input').value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Signed in as", user.email);
            })
            .catch((error) => {
                console.error("Login failed", error.code, error.message);
            });
    });
}
