module.exports = () => {
  const data = {
    projects: [],
  };

  for (let i = 0; i < 40; i++) {
    const tasks = [];
    let num = Math.random() * 10;
    for (let j = 0; j < num; j++) {
      tasks.push({
        id: Math.random() * 100000000000000000,
        text: 'Task' + (i * Math.floor(num) + j),
        isDone: j % 3 ? true : false,
        doneDate: j % 3 ? Date.now() - Math.floor(Math.random() * 10 * 24 * 60 * 60 * 1000) : null,
      });
    }

    data.projects.push({
      id: Math.random() * 100000000000000000,
      name: 'project' + i,
      description: 'this is project' + i,
      imageUrl: `https://picsum.photos/100?random=${i}`,
      dueDate: Date.now() + Math.floor(Math.random() * 10000000),
      isDone: false,
      tasks: tasks,
    });
  }

  return data;
};
