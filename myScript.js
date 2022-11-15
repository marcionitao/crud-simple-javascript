const mytodo_list = ["Do Exercise", "Take Bath", "Have Breakfast"];

// create
const createTask = () => {
  // get value from input box
  const task = document.getElementById("add-task").value;
  // add to array
  mytodo_list.push(task);
  // clear input box after add task
  document.getElementById("add-task").value = "";
  // show list of task in the list box
  ReadAllTask();
};

// read all task in the list box
const ReadAllTask = () => {
  let data = "";
  // loop all task in the array and show in the list box
  for (let i = 0; i < mytodo_list.length; i++) {
    // create element li and set class to it and add to list box
    data += `
      <tr>
        <td>${mytodo_list[i]}</td>
        <td>
          <button onclick="UpdateTask(${i})">Update</button>
        </td>
        <td>
          <button onclick="DeleteTask(${i})">Delete</button>
        </td>
      </tr>
    `;
  }
  // add counter
  document.getElementById("counter").innerHTML = `${mytodo_list.length} Tasks`;
  // add data to list box and show it on the screen
  document.getElementById("mytodo-tasks").innerHTML = data;
};

ReadAllTask();

// update task in the list box if user click on update button in the list box
const UpdateTask = (item) => {
  document.getElementById("UpdateForm").style.display = "block";
  document.getElementById("update-task").value = mytodo_list[item];

  document.getElementById("UpdateForm").onsubmit = () => {
    let task = document.getElementById("update-task").value;
    // item = conteudo a ser deletado, 1 = quantidade de itens a serem deletados, task = conteudo a ser adicionado
    mytodo_list.splice(item, 1, task.trim());

    ReadAllTask();
    CloseInput();
  };
};

// delete task in the list box if user click on delete button in the list box
const DeleteTask = (item) => {
  // item = conteudo a ser deletado, 1 = quantidade de itens a serem deletados
  mytodo_list.splice(item, 1);
  ReadAllTask();
};

// close input form when user click on close button in the input form
const CloseInput = () => {
  document.getElementById("UpdateForm").style.display = "none";
};
