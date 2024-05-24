let singOp = document.getElementById("singOp");
let signIn = document.getElementById("singIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

signIn.onclick = function() {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "login";
    singOp.classList.add("disable");
    singOp.classList.remove("disable");
}

singOp.onclick = function() {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "login";
    singOp.classList.add("disable");
    signIn.classList.remove("disable");
}