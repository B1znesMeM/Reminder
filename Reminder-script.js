body = document.body;

const todoForm = document.querySelector('#todoForm');
const todoLi = document.querySelector('#todoLi');
const todoInput = document.querySelector('#todoInput');

todoForm.addEventListener('submit', formHandler);

function formHandler(e) {
    e.preventDefault();

    const newText = todoInput.value

    let newLi = document.createElement('li');

    newLi.innerText = newText;

    todoLi.append(newLi);

    todoInput.value = '';

    todoInput.focus();


    const deleteBtn = document.createElement('button');
    // deleteBtn.setAttribute('role' , 'button');
    deleteBtn.innerText = 'Удалить';

    newLi.append(deleteBtn);

    deleteBtn.addEventListener('click', deleteTask);

    function deleteTask() {

        // this.closest('li').remove();
        newLi.parentNode.removeChild(newLi);
         
    }
}

