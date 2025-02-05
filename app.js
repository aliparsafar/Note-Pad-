document.getElementById("addNotepad").addEventListener("click", function() {
    const createNotepad = document.createElement("div");
    createNotepad.classList.add("notePad");

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("input-container");

    const createTextarea = document.createElement("input");
    createTextarea.classList.add("input");

    createTextarea.addEventListener("input", function() {
        saveNotes();  
    });

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash-alt");  
    deleteIcon.classList.add("delete-icon");

    deleteIcon.addEventListener("click", function() {
        createNotepad.remove();    
        saveNotes();   
    });

    inputContainer.appendChild(createTextarea);
    inputContainer.appendChild(deleteIcon);
    createNotepad.appendChild(inputContainer);
    document.getElementById("container").appendChild(createNotepad);

    saveNotes();
});

window.onload = function() {
    loadNotes();
}

function saveNotes() {
    const notes = [];
    const notepads = document.querySelectorAll(".notePad");

    notepads.forEach(function(note) {
        const textarea = note.querySelector(".input");
        notes.push(textarea.value); 
    });

    localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes) {
        notes.forEach(function(noteText) {
            const createNotepad = document.createElement("div");
            createNotepad.classList.add("notePad");

            const inputContainer = document.createElement("div");
            inputContainer.classList.add("input-container");

            const createTextarea = document.createElement("input");
            createTextarea.classList.add("input");
            createTextarea.value = noteText;

            createTextarea.addEventListener("input", function() {
                saveNotes();  
            });

            const deleteIcon = document.createElement("i");
            deleteIcon.classList.add("fas", "fa-trash-alt");     
            deleteIcon.classList.add("delete-icon");

            deleteIcon.addEventListener("click", function() {
                createNotepad.remove();    
                saveNotes();   
            });

            inputContainer.appendChild(createTextarea);
            inputContainer.appendChild(deleteIcon);
            createNotepad.appendChild(inputContainer);
            document.getElementById("container").appendChild(createNotepad);
        });
    }
}