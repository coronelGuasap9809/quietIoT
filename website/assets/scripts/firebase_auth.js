import { auth } from "./firebase_init.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerificaton, sendPasswordResetEmail, deleteUser, signOut } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const logoutForm = document.getElementById("logout-form");

if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = loginForm.querySelector("input[name='email-input']").value;

        const password = loginForm.querySelector("input[name='password-input']").value;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            alert("Logged in as " + userCredential.user.email);
            console.log("Signed in as", userCredential.user.email);

        } catch (error) {
            alert("Failed to log in. Check your password or whether the referenced account exists.");
            console.error("Login failed:", error.code, error.message);
        }
    });
}

if (signupForm) {
    signupForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = signupForm.querySelector("input[name='email-input']").value;

        const password = signupForm.querySelector("input[name='password-input']").value;

        const confirmPassword = signupForm.querySelector("#password-confirm").value;

        // Password match validation
        if (password !== confirmPassword) {
            alert("Error: passwords must match");
            console.error("Passwords do not match");
            return;
        }

        // Minimum length validation
        if (password.length < 8) {
            alert(" Error: password must be at least 8 characters");
            console.error("Password must be at least 8 characters");
            return;
        }

        try {
            const button = signupForm.querySelector("button");
            button.textContent = "...";
            button.disabled = true;

            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            
            alert("Account created: " + userCredential.user.email);
            window.location.href = "./index.html";
            console.log("Account created:", userCredential.user.email);
        } catch (error) {
            console.error("Signup failed:", error.code, error.message);
        }
    });
}

if (logoutForm) {
    logoutForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        try {
            const button = logoutForm.querySelector("button");
            button.textContent = "...";
            button.disabled = true;

            signOut(auth);

            alert("Successfully signed out");
            console.log("Successfully signed out");

        } catch (error) {
            console.error("Logout failed:", error.code, error.message);
        }
    });
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Logged in as:", user.email, user.uid);
    } else {
        if (window.location.pathname.endsWith("dashboard.html")) {
            alert("User is signed out. Please log in.")
            console.log("User is signed out");
            window.location.href = "login.html";
        }
    }
});