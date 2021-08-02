import { useState, useEffect } from 'react';
import { getTodos, inserTodo } from '../services/requestAPI';

function Todo() {
  const [itens, setItens] = useState([]);

  useEffect(async () => {
    const data = await getTodos();
    setItens(data.tasks);
  }, [itens]);

  return (
    <div>
      <h2>To do APP</h2>
      <div>

        {itens.map(((todo) => (
          <div>
            <input type="checkbox" />
            <span>{todo.text}</span>
            <button type="button">Apagar</button>
          </div>
        )))}

      </div>
      <button type="button">Tarefas</button>
      <button type="button">Pendentes</button>
      <button type="button">Concluidas</button>
      <button type="button" onClick={() => inserTodo('1')}>inserir novo</button>

    </div>
  );
}

export default Todo;
