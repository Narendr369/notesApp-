const noteTitleInput = document.getElementById("noteTitle")
const noteContentInput = document.getElementById("noteContent")
const addButton = document.getElementById("addNote")
const notesContainer = document.getElementById("note")

const notes = []

function renderNotes() {

    notesContainer.innerHTML = ''


    notes.forEach((note, index) => {
        const noteCard = document.createElement("div")
        noteCard.classList.add("note")
        noteCard.innerHTML = `<h3>${note.title}</h3><p>${note.content}</p>
        <button  onclick="editNote(${index})" ><i class="fa-solid fa-pen-to-square"></i></button>
        <button  onclick="deleteNote(${index})" ><i class="fa-sharp fa-solid fa-trash"></i></button>
        `
        notesContainer.appendChild(noteCard)
    })
}


function addNote(e) {
    e.preventDefault()

    const title = noteTitleInput.value
    const content = noteContentInput.value

    if (title.trim() !== '' && content.trim() !== '') {

        const note = {
            title: title,
            content: content
        }
        notes.push(note)

        noteTitleInput.value = ''
        noteContentInput.value = ''

        renderNotes()
    }
}



function editNote(index) {
    const note = notes[index]

    noteTitleInput.value = note.title
    noteContentInput.value = note.content

    notes.splice(index, 1)

    renderNotes()
}

function deleteNote(index) {
    notes.splice(index, 1)

    renderNotes()
}


addButton.addEventListener("click", addNote)
renderNotes()
