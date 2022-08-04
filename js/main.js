const toDoItems = document.getElementById('listElem');
const input = document.getElementById('inpTodo');
const trashIcon = document.getElementById('trash');

input.addEventListener("keydown", function(event){
    if(event.key === "Enter")
        addItem();
});


function addItem() {
    let divParent = document.createElement('div');
    let divChild = document.createElement('div');
    let checkIcon = document.createElement('i');
    let trashIcon = document.createElement('i');

    divParent.className = 'item';
    divParent.innerHTML = '<div>'+input.value+'</div>';

    checkIcon.className = 'fas fa-check-square';
    checkIcon.style.color = 'lightgray';
    checkIcon.addEventListener('click', function(){
        checkIcon.style.color = 'limegreen';
        divParent.classList.add('item_done');
    });

    divChild.appendChild(checkIcon);
    trashIcon.className = 'fas fa-trash';
    trashIcon.style.color = 'darkgrey';

    trashIcon.addEventListener('click', function(){
        divParent.remove();
    });

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);
    input.value = '';
}