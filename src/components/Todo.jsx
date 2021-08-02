import { useState } from 'react';

function Todo() {
  const [itens] = useState(['1', '2', '3']);
  return (
    <div>
      <h2>To do APP</h2>
      <div>

        {itens.map(((todo) => (
          <div>
            <input type="checkbox" />
            <span>{todo}</span>
            <button type="button">Apagar</button>
          </div>
        )))}

      </div>
      <button type="button">Tarefas</button>
      <button type="button">Pendentes</button>
      <button type="button">Concluidas</button>
      <button type="button">inserir novo</button>

    </div>
  );
}

export default Todo;
