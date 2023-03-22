
darkThemeBtn = document.querySelector(".darktheme-btn")

const toggleDarkTheme = () => {
    header = document.querySelector("header")
    body = document.querySelector("body")

    header.classList.toggle("header-dark")
    body.classList.toggle("body-dark")
}

darkThemeBtn.addEventListener("click", toggleDarkTheme)