import { useCallback, useReducer, useState } from 'react';

import { initialTodos } from '@/data/initialTodos';

import Todo from './components/Todo';
import todosReducer, { Action } from './reducers/todosReducer';

function Todos() {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  const [description, setDescription] = useState('');

  const handleSubmit = useCallback(
    function () {
      dispatch({ type: Action.ADD_TODO, payload: { description } });
    },
    [description],
  );

  return (
    <>
      <div>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button onClick={handleSubmit}>ADD</button>
      </div>
      {todos.map((todo) => (
        <Todo key={todo.id} data={todo} dispatch={dispatch} />
      ))}
    </>
  );
}

export default Todos;
