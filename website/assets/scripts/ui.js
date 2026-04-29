let theme = localStorage.getItem("theme")
let motionSetting = localStorage.getItem("motionSetting")

const themeButtons = document.querySelectorAll(".theme-btn")
const motionButtons = document.querySelectorAll(".motion-btn")
const contentElements = document.querySelectorAll(".content")

const clearActiveThemeButtons = () => {
    themeButtons.forEach(button => button.classList.remove("active"))
}

const clearActiveMotionButtons = () => {
    motionButtons.forEach(button => button.classList.remove("active"))
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

const enableMotion = () => {
    contentElements.forEach(element => element.classList.remove("disable-motion"))
    clearActiveMotionButtons()
    document.getElementById("enable-motion").classList.add("active")
    localStorage.setItem("motionSetting", "enabled")
}

const disableMotion = () => {
    contentElements.forEach(element => element.classList.add("disable-motion"))
    clearActiveMotionButtons()
    document.getElementById("disable-motion").classList.add("active")
    localStorage.setItem("motionSetting", "disabled")
}


/* Read localStorage theme data */
if (theme === "light") {
    enableLightmode()
} else if (theme === "dark") {
    enableDarkmode()
} else {
    enableAutomode()
}

/* Read localStorage motion data */
if (motionSetting === "disabled") {
    disableMotion()
} else {
    enableMotion()
}

themeButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        theme = localStorage.getItem("theme")
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

motionButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        motionSetting = localStorage.getItem("motionSetting")
        const id = event.target.id
        if (id === "disable-motion") {
            disableMotion()
        } else {
            enableMotion()
        }
    })
})