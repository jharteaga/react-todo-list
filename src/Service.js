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

export const updateTask = (task) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach((t) => {
    if (t.id === task.id) {
      t.completed = !task.completed;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return tasks;
};
