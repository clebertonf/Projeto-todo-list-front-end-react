const getTodos = () => fetch('http://localhost:3001/todo/list',
  {
    method: 'GET',
  }).then((resp) => resp.json()).then((data) => data);

const inserTodo = (task) => fetch('http://localhost:3001/todo/create',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: task }),

  }).then((resp) => resp.json())
  .then((data) => console.log(data)).catch((err) => console.log(err));

export {
  getTodos,
  inserTodo,
};
