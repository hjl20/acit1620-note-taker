
darkThemeBtn = document.querySelector(".darktheme-btn")

const toggleDarkTheme = () => {
    header = document.querySelector("header")
    body = document.querySelector("body")

    header.classList.toggle("header-dark")
    body.classList.toggle("body-dark")

    textArray = document.querySelectorAll("h2, h3, h4, p, a, ul")
    for (text of textArray) {
        text.classList.toggle("text-dark")
    }

}

darkThemeBtn.addEventListener("click", toggleDarkTheme)