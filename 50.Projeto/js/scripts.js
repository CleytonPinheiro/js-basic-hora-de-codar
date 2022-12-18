const addBtn = document.querySelector('#add-btn');

//Função que add tarefa
function addTask() {
    //Título da tarefa
    const taskTitle = document.querySelector('#task-title').value;

    if(taskTitle) {
        //Clonar template
        const template = document.querySelector('.template');

        const newTask = template.cloneNode(true);

        //Adiciona título
        newTask.querySelector('.task-title').textContent = taskTitle;

        //Remover as classes desnecessárias
        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        //Adicionar tarefa na lista
        const list = document.querySelector('#task-list');

        list.appendChild(newTask);

        //Adiciona o evento de remover task
        const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function(){
            removeTask(this);
        });

        //Adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function(){            
            completeTask(this);
        })

        //Limpar texto
        document.querySelector('#task-title').value = "";
    }
};

//Função remover task
function completeTask(task) {
    const taskToComplete = task.parentNode;

    taskToComplete.classList.toggle('done');
};

//Funçar remover tarefa
function removeTask(task) {
    task.parentNode.remove(true);
};

//Evento de add tarefa
addBtn.addEventListener('click', function(e) {
    e.preventDefault();

    addTask();
});
