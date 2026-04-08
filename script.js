function processForm(event) {
    event.preventDefault();
    // Get input elements
    let fName = document.getElementById("firstname");
    let lName = document.getElementById("lastname");
    let email = document.getElementById("email");
    let dob = document.getElementById("birthdate");

    addParagraph(fName.value + " " + lName.value);
    addParagraph(email.value);
    addParagraph(dob.value);
    
}

function addParagraph(text) {
    let p = document.createElement("p");
    p.innerText = text;
    document.body.appendChild(p);
}