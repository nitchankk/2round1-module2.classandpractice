function init() {
    const addButton = document.getElementById('addButton');
    addButton.addEventListener('click', addTask);
}

function addTask() {
    const inputField = document.getElementById('todoInput');
    const inputValue = inputField.value.trim();

    if (inputValue === '') {
        alert('ป้อนข้อมูลลลลล!!!!!!!!!');
        return;
    }

    const todoList = document.getElementById('todoList');
    const newTask = document.createElement('li');
    newTask.textContent = inputValue;
    todoList.appendChild(newTask);

    inputField.value = '';
}

init();
