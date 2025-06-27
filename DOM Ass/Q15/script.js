const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function () {
      const taskText = taskInput.value.trim();

      if (taskText === "") {
        alert("Task cannot be empty!");
        return;
      }

     
      const li = document.createElement('li');
      li.textContent = taskText;

      const completeBtn = document.createElement('button');
      completeBtn.textContent = 'Complete';
      completeBtn.addEventListener('click', function () {
        li.classList.toggle('completed');
      });

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', function () {
        taskList.removeChild(li);
      });

    
      li.appendChild(completeBtn);
      li.appendChild(deleteBtn);

     
      taskList.appendChild(li);

      
      taskInput.value = '';
    });