var close = document.getElementsByClassName('dismiss-button');
var i;
for (i = 0; i < close.length; i++) {
close[i].addEventListener('click', closeNote) }

function closeNote(event){
var closeClick = event.currentTarget;

if (closeClick.classList.contains("dismiss-button"))
closeClick.parentNode.remove();
}

var cancel = document.getElementsByClassName("modal-cancel-button");
//closing the window and backdrop with the cancel button
for (i = 0; i < cancel.length; i++) {
  cancel[i].onclick = function() {
    modal.style.display = "none";
    backdrop.style.display = "none";
  }
}

var button = document.getElementsByClassName("modal-close-button")
//closing the window using the x button
for (i = 0; i < button.length; i++) {
  button[i].onclick = function() {
    modal.style.display = "none";
    backdrop.style.display = "none";
  }
}

//Getting the modal element
var modal = document.getElementById("add-note-modal");
//including the backdrop for functions
var backdrop = document.getElementById("modal-backdrop");
//adding the red add button
var btn = document.getElementById("add-note-button");

// When the user clicks on the button, open the modal
btn.addEventListener("click", function() {
  document.getElementById('todo-input-name').value = "";
  modal.style.display = "block";
  backdrop.style.display = "block";
});

var createToDo = document.getElementsByClassName('modal-accept-button')[0];
createToDo.addEventListener('click', makeTodo);

function makeTodo(event){
    var name = document.getElementById('todo-input-name').value;

    if (name !== '') {
    var section = document.createElement("section");
    section.classList.add("todo");
    var main = document.getElementsByTagName("main")[0];
    main.appendChild(section);

    header.appendChild(doName);
    section.appendChild(header);
}
}
