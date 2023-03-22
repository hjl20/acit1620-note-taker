
// When the “Dark Theme” button is clicked
const darkThemeBtn = document.querySelector(".darktheme-btn")

const toggleDarkTheme = () => {
    // Background colors should change to darker colors 
    // (use 2 different colors for the left and right parts)
    let header = document.querySelector("header")
    let body = document.querySelector("body")
    header.classList.toggle("header-dark")
    body.classList.toggle("body-dark")

    // Text colors on darker backgrounds should be updated to have good contrast
    let textArray = document.querySelectorAll("h2, h3, h4, p, a, ul")
    for (let text of textArray) {
        text.classList.toggle("text-dark")
    }

    let imgArray = document.querySelectorAll("img")
    for (let img of imgArray) {
        img.classList.toggle("img-dark")
    }

    // Text on the button should be updated to “Light Theme”.
    darkThemeBtn.classList.toggle("dark-theme")
    if (darkThemeBtn.classList.contains("dark-theme")) {
        darkThemeBtn.textContent = "Light Theme"
    }
    else {
        darkThemeBtn.textContent = "Dark Theme"
    }
}

darkThemeBtn.addEventListener("click", toggleDarkTheme)

// Clicking the “cancel” button should hide the 
// text area, save, and cancel buttons.

const cancelBtn = document.querySelector(".auburn-btn")
const textArea = document.querySelector("#textarea-note")
const saveBtn = document.querySelector("#save-btn")

const hideNoteContent = () => {

    textArea.classList.add("hidden")
    saveBtn.classList.add("hidden")
    cancelBtn.classList.add("hidden")
} 

cancelBtn.addEventListener("click", hideNoteContent)

// If the textarea, save and cancel buttons are hidden, 
// pressing "New Note" button would make them visible. 
// After that pressing “New Note” again should clear the text area.

const newNoteBtn = document.querySelector("#newnote-btn")

const showNoteContent = () => {

    textArea.classList.remove("hidden")
    saveBtn.classList.remove("hidden")
    cancelBtn.classList.remove("hidden")

    textArea.value = ""
} 

newNoteBtn.addEventListener("click", showNoteContent)

// Declare an array (notesArray) in your JS code with JS note objects 
// in this format: {title:"note one", body:"this is my first note"}. 
// Make sure this variable is declared outside of any function.

const notesArray = [
    {
        title: "note one",
        body: "this is my first note",
    },
    {
        title: "note two",
        body: "default note two",
    },
]

// When the user types something in the textarea and clicks the “save” button

const notesUl = document.querySelector("#mynotes-ul") 

const saveNote = () => {
    // Show a prompt to the user and ask for the title of the note they want to save
    let noteTitle = prompt("Enter a title for the new note:")
    
    // Add a new JS object to the notesArray with the provided 
    // title and the text in the text area as the body
    notesArray.push(
        {
            title: noteTitle,
            body: textArea.value
        }
    )
    
    // Add a list item to the sidebar with the title of 
    // the JS object you just added to the array
    noteLi = document.createElement("li")
    noteLi.appendChild(document.createTextNode(noteTitle))
    notesUl.appendChild(noteLi)
}

saveBtn.addEventListener("click", saveNote)

/* When any of the list items on the sidebar 
(including the default note one and note two added in the html) 
are clicked, you should search through notesArray and find the
JS object with its title property equal to the text of the clicked item. 
Then display the value of its body property in the text area. */

// Add one event handler on the parent of the list items 
// to take advantage of event bubbling, 
// rather than adding one event listener for each list item. 



/* After you are done with your work, push your branch to Github, 
make a pull request, assign it to yourself, merge to main, 
pull the changes in your local repo's main branch. */
