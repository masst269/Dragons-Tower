// //The dialog
// var modal = document.getElementById("info-dialog");
// //including the backdrop for functions
// var backdrop = document.getElementById("info-backdrop");
// //activating the instruction button
// var btn = document.getElementById("info-button");
//
// btn.addEventListener("click", function() {
//   modal.style.display = "block";
//   backdrop.style.display = "block";
// });
//
// var startBtn = document.getElementById('start-button');
// var infoBtn = document.getElementById('info-button');
//
// startBtn.addEventListener('click', startGame);
//
// function startGame(event){
//
//   console.log("Clicked = " + event);
//   //.open('../html/end.html');
//
// };



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
  // document.getElementById('todo-input-what').value = "";
  // document.getElementById('todo-input-where').value = "";
  // document.getElementById('todo-input-when').value = "";
  // document.getElementById('todo-input-who').value = "";
  // document.getElementById('todo-input-details').value = "";
  modal.style.display = "block";
  backdrop.style.display = "block";
});

var createToDo = document.getElementsByClassName('modal-accept-button')[0];
createToDo.addEventListener('click', makeTodo);

function makeTodo(event){
    var what = document.getElementById('todo-input-what').value;

    if (what !== '') {
    var section = document.createElement("section");
    section.classList.add("todo");
    var main = document.getElementsByTagName("main")[0];
    main.appendChild(section);

    var what = document.getElementById('todo-input-what').value;
    var header = document.createElement("h2");
    var doWhat = document.createTextNode(what);

    header.appendChild(doWhat);
    section.appendChild(header);
}
    var where = document.getElementById('todo-input-where').value;
    if (where !== '') {

    var divBody = document.createElement("div");
    divBody.classList.add("todo-body");

    var paraWhere = document.createElement("p");
    paraWhere.classList.add("indent-wrapped");

    var spanWhere = document.createElement("span");
    spanWhere.classList.add("where");

    var preWhere = document.createTextNode("where: ");
    spanWhere.appendChild(preWhere);

    section.appendChild(divBody);
    divBody.appendChild(paraWhere);
    paraWhere.appendChild(spanWhere);

    var where = document.getElementById("todo-input-where").value;
    doWhere = document.createTextNode(where);
    spanWhere.appendChild(doWhere);
}

var when = document.getElementById('todo-input-when').value;
if (when !== '') {

var divBody = document.createElement("div");
divBody.classList.add("todo-body");

var paraWhen = document.createElement("p");
paraWhen.classList.add("indent-wrapped");

var spanWhen = document.createElement("span");
spanWhen.classList.add("when");

var preWhen = document.createTextNode("when: ");
spanWhen.appendChild(preWhen);

section.appendChild(divBody);
divBody.appendChild(paraWhen);
paraWhen.appendChild(spanWhen);

var when = document.getElementById("todo-input-when").value;
doWhen = document.createTextNode(when);
spanWhen.appendChild(doWhen);
}

var who = document.getElementById('todo-input-who').value;

if (who !== '') {
var paraWho = document.createElement("p");
var doWho = document.createTextNode(who);

paraWho.appendChild(doWho);
section.appendChild(paraWho);

}

var details = document.getElementById('todo-input-details').value;

if (details !== '') {
var paraDetails = document.createElement("p");
var doDetails = document.createTextNode(details);

paraDetails.appendChild(doDetails);
section.appendChild(paraDetails);
}
}
