
// const form = document.getElementById('todo-form');
// const input = document.getElementById('todo-input');
// const todoList = document.getElementById('todo-list');
// const add = document.getElementById("add");


// // const url = 'https://jsonplaceholder.typicode.com/todos';


// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(json => {
//     console.log("API Response:", json);
//     // document.getElementById("todo-list").innerText = "";
//     // form.textContent = `${list.todoList}`;
//   })

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const add = document.getElementById("add");
const url = 'https://jsonplaceholder.typicode.com/todos';



//fetch and display
const fetchTodos = async () => {
  const response = await fetch(url);
  const todos = await response.json();
  todoList.innerHTML = '';
  todos.slice(0, 10).forEach(todo => {
    const li = document.createElement('li');
    li.dataset.id = todo.id;
    li.innerHTML = `
      <span>${todo.title}</span>
      <div class = "modify">
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;
    todoList.appendChild(li);
  });
};

  //add new task
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const todoText = input.value.trim();

    if (todoText !== '') {
      const todoItem = document.createElement('li');
      todoItem.textContent = todoText;

      todoList.appendChild(todoItem);

      input.value = '';
    }
  });



// Edit or delete task
todoList.addEventListener('click', async (e) => {
  const id = e.target.closest('li').dataset.id;
  if (e.target.classList.contains('edit-btn')) {
    const newTitle = prompt('Enter new title');
    if (newTitle) {
      await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: newTitle })
      });
      fetchTodos();
    }
  } else if (e.target.classList.contains('delete-btn')) {
    await fetch(`${url}/${id}`, {
      method: 'DELETE'
    });
    fetchTodos();
  }
});

fetchTodos();

