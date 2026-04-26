let theme = localStorage.getItem("theme")
const themeButtons = document.querySelectorAll(".theme-btn")

const clearActiveThemeButtons = () => {
    themeButtons.forEach(button => button.classList.remove("active"))
}

const enableLightmode = () => {
    document.body.classList.remove("darkmode")
    document.body.classList.add("lightmode")
    clearActiveThemeButtons()
    document.getElementById("light-btn").classList.add("active")
    localStorage.setItem("theme", "light")
}

const enableDarkmode = () => {
    document.body.classList.remove("lightmode")
    document.body.classList.add("darkmode")
    clearActiveThemeButtons()
    document.getElementById("dark-btn").classList.add("active")
    localStorage.setItem("theme", "dark")
}

const enableAutomode = () => {
    document.body.classList.remove("darkmode")
    document.body.classList.remove("lightmode")
    clearActiveThemeButtons()
    document.getElementById("auto-btn").classList.add("active")
    localStorage.setItem("theme", "auto")
}

themeButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const id = event.target.id
        if (id === "light-btn") {
            enableLightmode()
        } else if (id === "dark-btn") {
            enableDarkmode()
        } else {
            enableAutomode()
        }
    })
})