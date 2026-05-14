import { auth } from "./firebase_init.js";

import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email =
            loginForm.querySelector("input[name='email-input']").value;

        const password =
            loginForm.querySelector("input[name='password-input']").value;

        try {
            const userCredential =
                await signInWithEmailAndPassword(auth, email, password);

            console.log("Signed in as", userCredential.user.email);

        } catch (error) {
            console.error("Login failed:", error.code, error.message);
        }
    });
}

if (signupForm) {
    signupForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email =
            signupForm.querySelector("input[name='email-input']").value;

        const password =
            signupForm.querySelector("input[name='password-input']").value;

        const confirmPassword =
            signupForm.querySelector("#password-confirm").value;

        // Password match validation
        if (password !== confirmPassword) {
            alert("Error: Passwords must match");
            console.error("Passwords do not match");
            return;
        }

        // Minimum length validation
        if (password.length < 8) {
            alert(" Error: Password must be at least 8 characters");
            console.error("Password must be at least 8 characters");
            return;
        }

        try {
            const button = signupForm.querySelector("button")
            button.textContent = "...";
            button.disabled = true;

            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            window.location.href = "./index.html";
            alert("Account created: " + userCredential.user.email);
            console.log("Account created:", userCredential.user.email);
        } catch (error) {
            console.error("Signup failed:", error.code, error.message);
        }
    });
}