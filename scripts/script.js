
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

    imgArray = document.querySelectorAll("img")
    for (img of imgArray) {
        img.classList.toggle("img-dark")
    }

    darkThemeBtn.classList.toggle("dark-theme")
    if (darkThemeBtn.classList.contains("dark-theme")) {
        darkThemeBtn.textContent = "Light Theme"
    }
    else {
        darkThemeBtn.textContent = "Dark Theme"
    }

}

darkThemeBtn.addEventListener("click", toggleDarkTheme)