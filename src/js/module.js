{
    const form = document.querySelector('.createTaskForm');

    form.onsubmit = function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const task = formData.get('task');

        addTask(task);

        form.reset();
    }

    const getUpdatedTemplate = (task) => {
        return `
            <div class="content">
                <button class="checkbox"></button>
                <input type="text" disabled value="${task}" class="taskInput"/>
            </div>
            <div class="actions">
                <button class="star"></button>
                <button class="edit"></button>
                <button class="remove"></button>
            </div>
        `
    }

    const addTask = (task) => {
        const tasksDom = document.querySelector('.tasks');
        const taskDom = document.createElement('li');

        taskDom.innerHTML = getUpdatedTemplate(task);
        tasksDom.prepend(taskDom);
    }

    // const addTask = function (task) {

    // }
}