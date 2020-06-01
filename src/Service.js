export const getTasks = () => {
  return JSON.parse(localStorage.getItem('tasks'))
    ? JSON.parse(localStorage.getItem('tasks'))
    : [];
};

export const saveTask = (task) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'))
    ? JSON.parse(localStorage.getItem('tasks'))
    : [];
  const id = tasks.length + 1;
  tasks.push({ id: id, description: task, completed: false });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return tasks;
};

export const checkedTask = (task) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach((t) => {
    if (t.id === task.id) {
      t.completed = !task.completed;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return tasks;
};

export const removeTask = (task) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const newTasks = tasks.filter((t) => t.id !== task.id);
  localStorage.setItem('tasks', JSON.stringify(newTasks));
  return newTasks;
};

export const updateTask = (newDescription, task) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach((t) => {
    if (t.id === task.id) {
      t.description = newDescription;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return tasks;
};

export const getDataChart = (tasks) => {
  const numCompleted = tasks.filter((t) => t.completed).length;
  const numPending = tasks.filter((t) => !t.completed).length;
  return { pending: numPending, completed: numCompleted };
};
